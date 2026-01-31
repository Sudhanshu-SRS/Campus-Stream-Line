import express from "express";
import { createInstitute, getInstitutes } from "../controllers/instituteController.js";
import protect from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, authorize(["superadmin"]), createInstitute);
router.get("/", getInstitutes);

export default router;
