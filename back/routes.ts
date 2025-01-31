import { Router } from "express";
import authRoutes from "./auth/auth.routes";
import employeesRoutes from "./employees/employees.routes";
import evaluationsRoutes from "./evaluations/evaluations.routes";
import feedbackRoutes from "./feedback/feedback.routes";
import reportsRoutes from "./reports/reports.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/employees", employeesRoutes);
router.use("/evaluations", evaluationsRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/reports", reportsRoutes);

export default router;
