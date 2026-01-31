import express from "express";
import {
  applyAdmission,
  myApplications,
  instituteApplications,
  generateMerit
} from "../controllers/applicationController.js";

import protect from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Student
router.post("/apply", protect, authorize(["student"]), applyAdmission);
router.get("/my", protect, authorize(["student"]), myApplications);

// Institute Admin / HOD
router.get("/institute", protect, authorize(["institute_admin", "hod"]), instituteApplications);
router.post("/merit/:id", protect, authorize(["hod"]), generateMerit);

export default router;
