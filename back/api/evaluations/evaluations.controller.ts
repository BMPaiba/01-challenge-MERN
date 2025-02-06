import type { Request, Response } from "express";
import { EvaluationsService } from "./evaluations.service";

export class EvaluationsController {
  static async createEvaluation(req: Request, res: Response) {
    const evaluationData = req.body;
    const result = await EvaluationsService.createEvaluation(evaluationData);
    res.status(201).json(result);
    try {
    } catch (error: any) {
      res.status(400).json({ message: "Error al crear la evaluación", error: error.message });
    }
  }

  static async getEvaluationById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const evaluation = await EvaluationsService.getEvaluationById(id);
      res.json(evaluation);
    } catch (error: any) {
      res.status(400).json({ message: "Error al obtener la evaluación", error: error.message });
    }
  }

  static async updateEvaluation(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const updatedData = req.body;
      const result = await EvaluationsService.updateEvaluation(id, updatedData);
      res.json(result);
    } catch (error: any) {
      res.status(400).json({ message: "Error al obtener la evaluación", error: error.message });
    }
  }

  static async getEvaluationsByEmployeeId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await EvaluationsService.getEvaluationsByEmployeeId(id);
      res.json(result);
    } catch (error: any) {
      res.status(400).json({ message: "Error al obtener la evaluación", error: error.message });
    }
  }

  static getAllEvaluations(req: Request, res: Response) {
    const result = EvaluationsService.getAllEvaluations();
    res.json(result);
  }
}
