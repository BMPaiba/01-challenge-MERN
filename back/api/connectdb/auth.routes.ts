import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

router.get("/testing", AuthController.testingConection);

export default router;
