import bcrypt from "bcryptjs";
import cors from "cors";
import express from "express";
import multer from "multer";
import path from "node:path";
import { mkdir } from "node:fs/promises";
import type { Request, Response } from "express";
import { pool, checkDatabase } from "./db.js";
import { createToken, requireAdmin, requireAuth } from "./auth.js";
import type { AuthRequest } from "./auth.js";
import { env, hasDatabaseConfig } from "./env.js";

const app = express();
const uploadDirectory = path.resolve("uploads");
const upload = multer({
  dest: uploadDirectory,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_request, file, callback) => {
    callback(null, file.mimetype === "application/pdf");
  },
});

app.use(cors({ origin: env.corsOrigin }));
app.use(express.json({ limit: "1mb" }));
app.use("/uploads", express.static(uploadDirectory));

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function localTutorReply(grade: string, subject: string, question: string) {
  const lowerQuestion = question.toLowerCase();

  if (subject === "Mathematics") {
    if (lowerQuestion.includes("fraction")) {
      return `For Grade ${grade}, start with the bottom number. It tells you how many equal parts make the whole. What are the top and bottom numbers? We can work through the next step together.`;
    }

    return `Let's break this ${subject.toLowerCase()} question into small steps. Underline the important words, decide what the question is asking, and try the first step. Share your working so I can give you a useful hint.`;
  }

  if (subject.includes("Language")) {
    return `Read the question twice and circle the key word. Explain the sentence in your own words first, then share it here so I can guide your next step.`;
  }

  return `Let's work through this Grade ${grade} ${subject} question together. Tell me what you already know, what you have tried, and where you feel stuck. I will guide you without simply giving away the answer.`;
}

async function getAiReply(grade: string, subject: string, question: string) {
  if (!env.openAiApiKey) {
    return localTutorReply(grade, subject, question);
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.openAiApiKey}`,
    },
    body: JSON.stringify({
      model: env.openAiModel,
      temperature: 0.3,
      messages: [
        {
          role: "system",
          content:
            "You are a safe, patient primary-school tutor for South African learners. Give age-appropriate guidance for the stated grade and subject. Use simple language, ask one useful follow-up question, explain steps, and do not complete graded homework without teaching the method. Do not request personal information.",
        },
        {
          role: "user",
          content: `Grade: ${grade}\nSubject: ${subject}\nHomework question: ${question}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`AI provider returned ${response.status}`);
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const reply = data.choices?.[0]?.message?.content?.trim();

  if (!reply) {
    throw new Error("AI provider returned an empty response");
  }

  return reply;
}

app.get("/api/health", async (_request, response) => {
  let database: boolean;

  try {
    database = await checkDatabase();
  } catch {
    database = false;
  }

  response.json({
    status: "ok",
    database,
    ai: Boolean(env.openAiApiKey),
  });
});

app.post("/api/auth/register", async (request: Request, response: Response) => {
  const firstName = text(request.body?.firstName);
  const lastName = text(request.body?.lastName);
  const email = text(request.body?.email).toLowerCase();
  const password = text(request.body?.password);
  const accountType = text(request.body?.accountType) || "Student";

  if (!firstName || !lastName || !email || password.length < 8) {
    response.status(400).json({
      error: "First name, last name, email, and an 8-character password are required",
    });
    return;
  }

  if (!hasDatabaseConfig) {
    response.status(503).json({ error: "Database is not configured" });
    return;
  }

  try {
    const passwordHash = await bcrypt.hash(password, 12);
    const [result] = await pool.execute(
      "INSERT INTO users (first_name, last_name, email, password_hash, account_type) VALUES (?, ?, ?, ?, ?)",
      [firstName, lastName, email, passwordHash, accountType],
    );
    const userId = Number((result as { insertId: number }).insertId);
    const token = createToken({ id: userId, email, role: "student" });

    response.status(201).json({
      token,
      user: { id: userId, firstName, lastName, email, role: "student" },
    });
  } catch (error) {
    const duplicate = error instanceof Error && error.message.includes("Duplicate");
    response.status(duplicate ? 409 : 500).json({
      error: duplicate ? "An account with that email already exists" : "Could not create account",
    });
  }
});

app.post("/api/auth/login", async (request: Request, response: Response) => {
  const email = text(request.body?.email).toLowerCase();
  const password = text(request.body?.password);

  if (!email || !password) {
    response.status(401).json({ error: "Invalid email or password" });
    return;
  }

  if (!hasDatabaseConfig) {
    response.status(503).json({ error: "Database is not configured" });
    return;
  }

  try {
    const [rows] = await pool.execute(
      "SELECT id, first_name, last_name, email, password_hash, role, account_type FROM users WHERE email = ? LIMIT 1",
      [email],
    );
    const user = (rows as Array<{
      id: number;
      first_name: string;
      last_name: string;
      email: string;
      password_hash: string;
      role: "student" | "admin";
      account_type: string;
    }>)[0];

    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      response.status(401).json({ error: "Invalid email or password" });
      return;
    }

    response.json({
      token: createToken({ id: user.id, email: user.email, role: user.role }),
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        role: user.role,
        accountType: user.account_type,
      },
    });
  } catch (error) {
    console.error("Login database error:", error);
    const code = error && typeof error === "object" && "code" in error
      ? String(error.code)
      : "";
    const connectionFailure = [
      "ER_ACCESS_DENIED_ERROR",
      "ECONNREFUSED",
      "ER_BAD_DB_ERROR",
    ].includes(code);
    response.status(connectionFailure ? 503 : 500).json({
      error: connectionFailure
        ? "Database connection failed. Check backend/.env"
        : "Could not sign in",
    });
  }
});

app.get("/api/papers", async (request, response) => {
  if (!hasDatabaseConfig) {
    response.status(503).json({ error: "Database is not configured" });
    return;
  }

  const filters: Array<[string, string]> = [
    ["grade", text(request.query.grade)],
    ["subject", text(request.query.subject)],
    ["term", text(request.query.term)],
    ["paper_type", text(request.query.paperType)],
    ["year", text(request.query.year)],
  ];
  const conditions: string[] = [];
  const values: string[] = [];

  for (const [column, value] of filters) {
    if (value) {
      conditions.push(`${column} = ?`);
      values.push(value);
    }
  }

  const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
  const [rows] = await pool.query(
    `SELECT id, title, education_level AS educationLevel, phase, grade, subject, language_name AS language, year, term, paper_type AS paperType, description, file_url AS fileUrl, memo_url AS memoUrl, memorandum_available AS memorandumAvailable FROM past_papers ${where} ORDER BY year DESC, id DESC`,
    values,
  );

  response.json(rows);
});

app.get("/api/papers/:id", async (request, response) => {
  if (!hasDatabaseConfig) {
    response.status(503).json({ error: "Database is not configured" });
    return;
  }

  const [rows] = await pool.execute(
    `SELECT id, title, education_level AS educationLevel, phase, grade, subject,
      language_name AS language, year, term, paper_type AS paperType,
      description, file_url AS fileUrl
      , memo_url AS memoUrl, memorandum_available AS memorandumAvailable
     FROM past_papers WHERE id = ? LIMIT 1`,
    [request.params.id],
  );
  const paper = (rows as Array<Record<string, unknown>>)[0];

  if (!paper) {
    response.status(404).json({ error: "Paper not found" });
    return;
  }

  response.json(paper);
});

app.post("/api/homework-assistance", async (request, response) => {
  const grade = text(request.body?.grade);
  const subject = text(request.body?.subject);
  const question = text(request.body?.question);

  if (!grade || !subject || !question) {
    response.status(400).json({ error: "Grade, subject, and question are required" });
    return;
  }

  try {
    const reply = await getAiReply(grade, subject, question);
    response.json({ reply, source: env.openAiApiKey ? "ai" : "local" });
  } catch {
    response.json({
      reply: localTutorReply(grade, subject, question),
      source: "local-fallback",
    });
  }
});

app.get("/api/me", requireAuth, async (request: AuthRequest, response) => {
  try {
    const [rows] = await pool.execute(
      "SELECT id, first_name, last_name, email, role, account_type FROM users WHERE id = ? LIMIT 1",
      [request.user!.id],
    );
    const user = (rows as Array<{
      id: number;
      first_name: string;
      last_name: string;
      email: string;
      role: "student" | "admin";
      account_type: string;
    }>)[0];

    if (!user) {
      response.status(404).json({ error: "User not found" });
      return;
    }

    response.json({
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        role: user.role,
        accountType: user.account_type,
      },
    });
  } catch {
    response.status(500).json({ error: "Could not load profile" });
  }
});

app.get("/api/notifications", requireAuth, async (request: AuthRequest, response) => {
  const [rows] = await pool.execute(
    `SELECT id, title, message, paper_id AS paperId, is_read AS isRead, created_at AS createdAt
     FROM notifications WHERE user_id = ? ORDER BY created_at DESC LIMIT 20`,
    [request.user!.id],
  );
  response.json(rows);
});

app.patch("/api/notifications/:id/read", requireAuth, async (request: AuthRequest, response) => {
  await pool.execute(
    "UPDATE notifications SET is_read = TRUE WHERE id = ? AND user_id = ?",
    [request.params.id, request.user!.id],
  );
  response.json({ ok: true });
});

app.patch("/api/me", requireAuth, async (request: AuthRequest, response) => {
  const firstName = text(request.body?.firstName);
  const lastName = text(request.body?.lastName);
  const email = text(request.body?.email).toLowerCase();

  if (!firstName || !lastName || !email || !request.user) {
    response.status(400).json({ error: "First name, last name, and email are required" });
    return;
  }

  try {
    await pool.execute(
      "UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE id = ?",
      [firstName, lastName, email, request.user.id],
    );
    response.json({
      user: {
        ...request.user,
        firstName,
        lastName,
        email,
        accountType: "Student",
      },
    });
  } catch (error) {
    const duplicate = error instanceof Error && error.message.includes("Duplicate");
    response.status(duplicate ? 409 : 500).json({
      error: duplicate ? "An account with that email already exists" : "Could not update profile",
    });
  }
});

app.get("/api/admin/stats", requireAuth, requireAdmin, async (_request, response) => {
  const [userRows] = await pool.query("SELECT COUNT(*) AS count FROM users");
  const [paperRows] = await pool.query("SELECT COUNT(*) AS count FROM past_papers");
  response.json({
    users: Number((userRows as Array<{ count: number }>)[0]?.count ?? 0),
    papers: Number((paperRows as Array<{ count: number }>)[0]?.count ?? 0),
  });
});

app.get("/api/admin/users", requireAuth, requireAdmin, async (_request, response) => {
  const [rows] = await pool.query(
    "SELECT id, first_name, last_name, email, role, account_type, created_at FROM users ORDER BY created_at DESC",
  );
  response.json((rows as Array<{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    role: "student" | "admin";
    account_type: string;
    created_at: string;
  }>).map((user) => ({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    role: user.role,
    accountType: user.account_type,
    createdAt: user.created_at,
  })));
});

app.patch("/api/admin/users/:id", requireAuth, requireAdmin, async (request, response) => {
  const role = text(request.body?.role);

  if (role !== "student" && role !== "admin") {
    response.status(400).json({ error: "Role must be student or admin" });
    return;
  }

  const [result] = await pool.execute(
    "UPDATE users SET role = ? WHERE id = ?",
    [role, request.params.id],
  );

  if ((result as { affectedRows: number }).affectedRows === 0) {
    response.status(404).json({ error: "User not found" });
    return;
  }

  response.json({ id: Number(request.params.id), role });
});

app.patch("/api/admin/papers/:id", requireAuth, requireAdmin, async (request, response) => {
  const title = text(request.body?.title);
  const educationLevel = text(request.body?.educationLevel);
  const phase = text(request.body?.phase);
  const grade = text(request.body?.grade);
  const subject = text(request.body?.subject);
  const year = Number(request.body?.year);
  const term = text(request.body?.term);
  const paperType = text(request.body?.paperType);
  const description = text(request.body?.description);

  if (!title || !educationLevel || !phase || !grade || !subject ||
    !Number.isInteger(year) || !term || !paperType || !description) {
    response.status(400).json({ error: "All paper details are required" });
    return;
  }

  const [result] = await pool.execute(
    `UPDATE past_papers SET title = ?, education_level = ?, phase = ?, grade = ?,
      subject = ?, year = ?, term = ?, paper_type = ?, description = ?
     WHERE id = ?`,
    [title, educationLevel, phase, grade, subject, year, term, paperType, description, request.params.id],
  );

  if ((result as { affectedRows: number }).affectedRows === 0) {
    response.status(404).json({ error: "Paper not found" });
    return;
  }

  response.json({ id: Number(request.params.id), title, educationLevel, phase, grade, subject, year, term, paperType, description });
});

app.delete("/api/admin/papers/:id", requireAuth, requireAdmin, async (request, response) => {
  const [result] = await pool.execute(
    "DELETE FROM past_papers WHERE id = ?",
    [request.params.id],
  );

  if ((result as { affectedRows: number }).affectedRows === 0) {
    response.status(404).json({ error: "Paper not found" });
    return;
  }

  response.json({ ok: true });
});

app.post(
  "/api/admin/papers",
  requireAuth,
  requireAdmin,
  upload.fields([
    { name: "paper", maxCount: 1 },
    { name: "memorandum", maxCount: 1 },
  ]),
  async (request: AuthRequest, response) => {
    const fields = request.body as Record<string, unknown>;
    const title = text(fields.title);
    const educationLevel = text(fields.educationLevel);
    const phase = text(fields.phase);
    const grade = text(fields.grade);
    const subject = text(fields.subject);
    const year = Number(fields.year);
    const term = text(fields.term);
    const paperType = text(fields.paperType);
    const description = text(fields.description);
    const memorandumAvailable = fields.memorandumAvailable === "true";
    const files = request.files as { [fieldname: string]: Express.Multer.File[] };
    const paperFile = files?.paper?.[0];
    const memorandumFile = files?.memorandum?.[0];

    if (!title || !educationLevel || !phase || !grade || !subject ||
      !Number.isInteger(year) || !term || !paperType || !description || !paperFile ||
      (memorandumAvailable && !memorandumFile)) {
      response.status(400).json({ error: memorandumAvailable
        ? "All paper details and the memorandum PDF are required"
        : "All paper details and a PDF are required" });
      return;
    }

    await mkdir(uploadDirectory, { recursive: true });
    const fileUrl = `/uploads/${path.basename(paperFile.filename)}`;
    const memoUrl = memorandumFile
      ? `/uploads/${path.basename(memorandumFile.filename)}`
      : null;
    const uploadedBy = request.user!.id;

    try {
      const [result] = await pool.execute(
        `INSERT INTO past_papers
          (title, education_level, phase, grade, subject, year, term, paper_type, description, file_url, memo_url, memorandum_available, uploaded_by)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [title, educationLevel, phase, grade, subject, year, term, paperType, description, fileUrl, memoUrl, memorandumAvailable, uploadedBy],
      );
      const paperId = Number((result as { insertId: number }).insertId);
      await pool.execute(
        `INSERT INTO notifications (user_id, title, message, paper_id)
         SELECT id, ?, ?, ? FROM users WHERE role = 'student'`,
        ["New past paper available", `${title} is now available to download.`, paperId],
      );
      response.status(201).json({ id: paperId, fileUrl, memoUrl });
    } catch {
      response.status(500).json({ error: "Could not save paper" });
    }
  },
);

app.listen(env.port, () => {
  console.log(`PastPaperHub API running on http://localhost:${env.port}`);
});
