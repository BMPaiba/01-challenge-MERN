import type { NextFunction, Request, Response } from "express";
import { EmployeesService } from "./employees.service";

export class EmployeesController {
  static async getAllEmployees(req: Request, res: Response) {
    try {
      const result = await EmployeesService.getAllEmployees();
      res.json(result);
    } catch (error: any) {
      res.status(400).json({
        message: "Error al hacer login",
        error: error.message,
      });
    }
  };
}
