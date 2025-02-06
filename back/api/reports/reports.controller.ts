import type { Request, Response } from "express";
import { ReportsService } from "./reports.service";

export class ReportsController {

  static async reportByEmployeeId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const report = await ReportsService.reportByEmployeeId(id);
      res.json(report);
    } catch (error) {
      throw new Error("Error al obtener el reporte");
    }
  }
}
