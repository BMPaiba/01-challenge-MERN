import { Router } from "express";
import { EvaluationsController } from "./evaluations.controller";
import { createEvaluationsMiddleware } from "@/middlewares/create-evaluations.middleware";

const router = Router();

router.post("/", createEvaluationsMiddleware, EvaluationsController.createEvaluation);

router.get("/:id",  EvaluationsController.getEvaluationById);

router.put("/:id", EvaluationsController.updateEvaluation);

router.get("/employee/:id", EvaluationsController.getEvaluationsByEmployeeId);

export default router;
