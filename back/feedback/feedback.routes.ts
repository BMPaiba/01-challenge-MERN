import { Router } from "express";
import { FeedbackController } from "./feedback.controller";

const router = Router();

router.post("/", FeedbackController.createFeedback);

export default router;
