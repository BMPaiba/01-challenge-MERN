import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validateUserRegisterMiddleware } from "@/middlewares/register-validation.middleware";

const router = Router();

router.post("/login", AuthController.login);
router.post("/register", validateUserRegisterMiddleware, AuthController.register);

export default router;
