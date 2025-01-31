import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validateUserRegisterMiddleware } from "@/middlewares/register-validation.middleware";
import { validationUserLoginMiddleware } from "@/middlewares/login-validation.middleware";

const router = Router();

router.post("/login", validationUserLoginMiddleware, AuthController.login);
router.post("/register", validateUserRegisterMiddleware, AuthController.register);

export default router;
