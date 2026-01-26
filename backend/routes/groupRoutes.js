import express from "express";
import { getGroups } from "../controllers/groupController.js";

const router = express.Router();

router.get("/", getGroups);

export default router;
