import { Router } from "express";
import { ReportsController } from "./reports.controller";

const router = Router();

router.post("/login", ReportsController.login);
router.post("/register", ReportsController.register);

export default router;
