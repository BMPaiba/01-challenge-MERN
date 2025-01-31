import { Router } from "express";
import { EvaluationsController } from "./evaluations.controller";

const router = Router();

router.post("/", EvaluationsController.createEvaluation);

router.get("/:id", EvaluationsController.getEvaluationById);

router.put("/:id", EvaluationsController.updateEvaluation);

router.get("/employee/:id", EvaluationsController.getEvaluationsByEmployeeId);

router.get("/", EvaluationsController.getAllEvaluations);


export default router;
