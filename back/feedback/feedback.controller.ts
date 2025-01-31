import type { Request, Response } from "express";
import { FeedbackService } from "./feedback.service";

export class FeedbackController {
  static login(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = FeedbackService.login(email, password);
    res.json(result);
  }

  static register(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = FeedbackService.register(email, password);
    res.json(result);
  }
}
