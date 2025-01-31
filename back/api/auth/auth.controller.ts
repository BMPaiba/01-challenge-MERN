import type { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  static login(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = AuthService.login(email, password);
    res.json(result);
  }

  static register(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = AuthService.register(email, password);
    res.json(result);
  }
}
