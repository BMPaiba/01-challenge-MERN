import { Router } from "express";
import { AuthController } from "./auth.controller";

// Creamos un router
const router = Router();

// Definimos las rutas para auth
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

// Exportamos las rutas directamente
export default router;
