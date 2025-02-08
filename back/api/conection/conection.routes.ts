import { Router } from "express";
import { AuthController } from "./conection.controller";

const router = Router();

router.get("/testing", AuthController.testingConection);

export default router;
