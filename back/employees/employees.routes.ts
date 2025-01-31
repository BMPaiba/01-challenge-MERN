import { Router } from "express";
import { EmployeesController } from "./employees.controller";

const router = Router(); 

router.get("/", EmployeesController.getAllEmployees);


export default router;
