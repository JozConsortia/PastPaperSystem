import jwt from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import { env } from "./env.js";

export type AuthRequest = Request & {
  user?: { id: number; email: string; role: "student" | "admin" };
};

export function createToken(user: { id: number; email: string; role: "student" | "admin" }) {
  return jwt.sign(user, env.jwtSecret, { expiresIn: "7d" });
}

export function requireAuth(
  request: AuthRequest,
  response: Response,
  next: NextFunction,
) {
  const authorization = request.headers.authorization;
  const token = authorization?.startsWith("Bearer ")
    ? authorization.slice(7)
    : null;

  if (!token) {
    response.status(401).json({ error: "Authentication required" });
    return;
  }

  try {
    request.user = jwt.verify(token, env.jwtSecret) as {
      id: number;
      email: string;
      role: "student" | "admin";
    };
    next();
  } catch {
    response.status(401).json({ error: "Invalid or expired token" });
  }
}

export function requireAdmin(
  request: AuthRequest,
  response: Response,
  next: NextFunction,
) {
  if (request.user?.role !== "admin") {
    response.status(403).json({ error: "Administrator access required" });
    return;
  }

  next();
}
