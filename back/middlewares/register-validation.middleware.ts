import type { Request, Response, NextFunction } from "express";
import { userRegisterValidation } from "@/validations/user-register.validation";

import { z } from "zod";

export const validateUserRegisterMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    userRegisterValidation.parse(req.body);
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
