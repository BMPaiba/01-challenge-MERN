import type { Request, Response } from "express";
import { ReportsService } from "./reports.service";

export class ReportsController {
  static login(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = ReportsService.login(email, password);
    res.json(result);
  }

  static register(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = ReportsService.register(email, password);
    res.json(result);
  }
}
