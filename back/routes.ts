import { Router } from "express"; 
import authRoutes from "./api/auth/auth.routes";
import employeesRoutes from "./api/employees/employees.routes";
import evaluationsRoutes from "./api/evaluations/evaluations.routes";
import feedbackRoutes from "./api/feedback/feedback.routes";
import reportsRoutes from "./api/reports/reports.routes";
import conectdbRoutes from "./api/conection/conection.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/employees", employeesRoutes);
router.use("/evaluations", evaluationsRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/reports", reportsRoutes);
router.use("/conection", conectdbRoutes);

export default router;
