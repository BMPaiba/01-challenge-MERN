import { Router } from "express"; 
import authRoutes from "./api/auth/auth.routes";
import employeesRoutes from "./api/employees/employees.routes";
import evaluationsRoutes from "./api/evaluations/evaluations.routes";
import feedbackRoutes from "./api/feedback/feedback.routes";
import reportsRoutes from "./api/reports/reports.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/employees", employeesRoutes);
router.use("/evaluations", evaluationsRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/reports", reportsRoutes);

export default router;
