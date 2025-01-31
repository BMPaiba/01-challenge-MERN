import type { Request, Response } from "express";
import { ReportsService } from "./reports.service";

export class ReportsController {

  static reportByEmployeeId(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = ReportsService.reportByEmployeeId(email, password);
    res.json(result);
  }
}
