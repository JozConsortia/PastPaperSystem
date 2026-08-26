import bcrypt from "bcryptjs";
import cors from "cors";
import express from "express";
import type { Request, Response } from "express";
import { pool, checkDatabase } from "./db.js";
import { createToken, requireAuth } from "./auth.js";
import type { AuthRequest } from "./auth.js";
import { env, hasDatabaseConfig } from "./env.js";

const app = express();

app.use(cors({ origin: env.corsOrigin }));
app.use(express.json({ limit: "1mb" }));

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
      "INSERT INTO users (first_name, last_name, email, password_hash) VALUES (?, ?, ?, ?)",
      [firstName, lastName, email, passwordHash],
    );
    const userId = Number((result as { insertId: number }).insertId);
    const token = createToken({ id: userId, email });

    response.status(201).json({
      token,
      user: { id: userId, firstName, lastName, email },
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

  if (!email || !password || !hasDatabaseConfig) {
    response.status(401).json({ error: "Invalid email or password" });
    return;
  }

  try {
    const [rows] = await pool.execute(
      "SELECT id, first_name, last_name, email, password_hash FROM users WHERE email = ? LIMIT 1",
      [email],
    );
    const user = (rows as Array<{
      id: number;
      first_name: string;
      last_name: string;
      email: string;
      password_hash: string;
    }>)[0];

    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      response.status(401).json({ error: "Invalid email or password" });
      return;
    }

    response.json({
      token: createToken({ id: user.id, email: user.email }),
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
      },
    });
  } catch {
    response.status(500).json({ error: "Could not sign in" });
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
    `SELECT id, title, education_level AS educationLevel, phase, grade, subject, language_name AS language, year, term, paper_type AS paperType, description, file_url AS fileUrl FROM past_papers ${where} ORDER BY year DESC, id DESC`,
    values,
  );

  response.json(rows);
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

app.get("/api/me", requireAuth, (request: AuthRequest, response) => {
  response.json({ user: request.user });
});

app.listen(env.port, () => {
  console.log(`PastPaperHub API running on http://localhost:${env.port}`);
});
