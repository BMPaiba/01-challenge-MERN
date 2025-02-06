import { Router } from "express";
import { ReportsController } from "./reports.controller";

const router = Router();

router.get("/employee/:id", ReportsController.reportByEmployeeId);

export default router;
