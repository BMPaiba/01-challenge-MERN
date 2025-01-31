import type { Request, Response } from "express";
import { FeedbackService } from "./feedback.service";

export class FeedbackController {
  
  static postFeedback(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = FeedbackService.postFeedback(email, password);
    res.json(result);
  }

}
