import { connectDB } from "@/lib/database/connectDB";
import type { Request, Response } from "express";

export class AuthController {
  static async testingConection(req: Request, res: Response) {
    try {
      const conectDB = await connectDB();
      res.json(conectDB);
    } catch (error: any) {
      res.status(400).json({
        message: "Error al hacer login",
        error: error.message,
      });
    }
  }
}
