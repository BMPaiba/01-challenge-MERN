import type { Request, Response } from "express";
import { FeedbackService } from "./feedback.service";

export class FeedbackController {
  
  static async createFeedback(req: Request, res: Response) {
    const { evaluationId, message, givenBy } = req.body;
    const result = await FeedbackService.createFeedback(evaluationId, message, givenBy);
    res.json(result);
  }

}
