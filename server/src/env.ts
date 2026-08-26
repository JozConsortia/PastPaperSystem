import "dotenv/config";

function numberFromEnv(value: string | undefined, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export const env = {
  port: numberFromEnv(process.env.PORT, 3000),
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:5173",
  jwtSecret: process.env.JWT_SECRET || "development-only-change-this-secret",
  mysql: {
    host: process.env.DB_HOST || "localhost",
    port: numberFromEnv(process.env.DB_PORT, 3306),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "pastpaperhub",
  },
  openAiApiKey: process.env.OPENAI_API_KEY || "",
  openAiModel: process.env.OPENAI_MODEL || "gpt-4o-mini",
};

export const hasDatabaseConfig = Boolean(
  process.env.DB_HOST && process.env.DB_USER && process.env.DB_NAME,
);
