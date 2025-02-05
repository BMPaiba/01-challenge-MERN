import { createEvaluationValidationSchema } from "@/validations/evaluations.validation";
import type { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const createEvaluationsMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    createEvaluationValidationSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        message: "Validation failed",
        errors: error.errors,
      });
      return;
    }
    next(error);
  }
};
