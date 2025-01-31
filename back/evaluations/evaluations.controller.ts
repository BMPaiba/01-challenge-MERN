import type { Request, Response } from "express";
import { EvaluationsService } from "./evaluations.service";

export class EvaluationsController {
  static login(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = EvaluationsService.login(email, password);
    res.json(result);
  }

  static register(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = EvaluationsService.register(email, password);
    res.json(result);
  }
}
