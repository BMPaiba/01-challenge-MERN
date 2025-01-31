import type { Request, Response } from "express";
import { EmployeesService } from "./employees.service";

export class EmployeesController {
  static login(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = EmployeesService.login(email, password);
    res.json(result);
  }

  static register(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = EmployeesService.register(email, password);
    res.json(result);
  }
}
