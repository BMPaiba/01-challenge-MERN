import { Router } from "express";
import { EmployeesController } from "./employees.controller";
import { authenticateUserMiddleware } from "@/middlewares/auth.middleware";
import { authorizeRoleMiddleware } from "@/middlewares/role.middleware";
import { ROLE } from "@/constants/roles";

const router = Router(); 

router.get("/", authenticateUserMiddleware, authorizeRoleMiddleware(ROLE.Employee), EmployeesController.getAllEmployees);


export default router;