import type { Request, Response } from "express";
import { FeedbackService } from "./feedback.service";

export class FeedbackController {
  
  static createFeedback(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = FeedbackService.createFeedback(email, password);
    res.json(result);
  }

}
