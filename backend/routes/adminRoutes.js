import express from "express";
import protect from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import { updateUserRole, getAllUsers, createUser } from "../controllers/adminController.js";

const router = express.Router();

// Only Super Admin can manage roles
router.put("/update-role", protect, authorize(["superadmin"]), updateUserRole);

// View all users
router.get("/users", protect, authorize(["superadmin"]), getAllUsers);
router.post("/create-user", createUser);


export default router;
