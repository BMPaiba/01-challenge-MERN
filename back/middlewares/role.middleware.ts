import type { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  user?: { id: string; email: string; role: string };
}

export const authorizeRoleMiddleware = (role: string) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const authReq = req as AuthRequest;

    if (!authReq.user) {
      res.status(401).json({ message: "Usuario no autenticado." });
      return;
    }

    if (authReq.user.role !== role) {
      res.status(403).json({ message: "Acceso denegado. Rol no autorizado." });
      return;
    }

    next();
  };
};