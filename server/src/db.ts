import mysql from "mysql2/promise";
import { env, hasDatabaseConfig } from "./env.js";

export const pool = mysql.createPool({
  host: env.mysql.host,
  port: env.mysql.port,
  user: env.mysql.user,
  password: env.mysql.password,
  database: env.mysql.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function checkDatabase() {
  if (!hasDatabaseConfig) {
    return false;
  }

  const connection = await pool.getConnection();
  connection.release();
  return true;
}
