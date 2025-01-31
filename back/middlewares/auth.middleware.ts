import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: { id: string; email: string; role: string };
}

export const authenticateUserMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "No autorizado. Token requerido." });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; email: string; role: string };
    (req as AuthRequest).user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token inválido o expirado." });
  }
};