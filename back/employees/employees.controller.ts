import type { Request, Response } from "express";
import { EmployeesService } from "./employees.service";

export class EmployeesController {

  static getAllEmployees(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = EmployeesService.getAllEmployees(email, password);
    res.json(result);
  }
  
}
