import { userLoginValidation } from "@/validations/user-login.validation";
import type { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validationUserLoginMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    userLoginValidation.parse(req.body);
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
