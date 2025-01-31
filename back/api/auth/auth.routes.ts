import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validateUserMiddleware } from "@/middlewares/validate-user.middleware";

const router = Router();

router.post("/login", AuthController.login);
router.post("/register", validateUserMiddleware, AuthController.register);

export default router;
