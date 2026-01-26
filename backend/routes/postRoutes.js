import express from "express";
import {
  createPost,
  getPosts,
  likePost,
  addComment,
  trendingTopics
} from "../controllers/postController.js";

import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", protect, upload.single("image"), createPost);
router.get("/", getPosts);
router.put("/:id/like", likePost);
router.post("/:id/comment", addComment);
router.get("/trending/topics", trendingTopics);

export default router;
