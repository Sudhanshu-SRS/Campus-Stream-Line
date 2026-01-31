import express from "express";
import { createDepartment, getDepartmentsByInstitute } from "../controllers/departmentController.js";
import protect from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, authorize(["institute_admin"]), createDepartment);
router.get("/institute/:id", getDepartmentsByInstitute);

export default router;
