import type { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const result = await AuthService.login(email, password);
      res.json(result);
    } catch (error: any) {
      res.status(400).json({
        message: "Error al hacer login",
        error: error.message,
      });
    }
  }

  static async register(req: Request, res: Response) {
    const { firstName, lastName, email, password, role } = req.body;

    try {
      const result = await AuthService.register({ firstName, lastName, email, password, role });
      res.json(result);
    } catch (error: any) {
      res.status(400).json({ message: "Error al registrar usuario", error: error.message });
    }
  }
}
