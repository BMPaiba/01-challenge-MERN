import { Router } from "express";
import { FeedbackController } from "./feedback.controller";

const router = Router();

router.post("/login", FeedbackController.login);
router.post("/register", FeedbackController.register);

export default router;
