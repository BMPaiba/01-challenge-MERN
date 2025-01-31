import type { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  static login(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = AuthService.login(email, password);
    res.json(result);
  }

  static async register(req: Request, res: Response) {
    const { firstName, lastName, email, password } = req.body;
    const result = await AuthService.register( firstName, lastName, email, password);
    res.json(result);
  }
}
