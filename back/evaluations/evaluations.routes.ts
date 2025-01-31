import { Router } from "express";
import { EvaluationsController } from "./evaluations.controller";

const router = Router();

router.post("/login", EvaluationsController.login);
router.post("/register", EvaluationsController.register);

export default router;
