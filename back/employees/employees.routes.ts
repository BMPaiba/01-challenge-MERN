import { Router } from "express";
import { EmployeesController } from "./employees.controller";

const router = Router();

router.post("/login", EmployeesController.login);
router.post("/register", EmployeesController.register);

export default router;
