import Post from "../models/Post.js";
import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.js";




export const createPost = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    console.log("REQ FILE:", req.file);
    console.log("REQ USER:", req.user);

    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const { content, tags } = req.body;

    let parsedTags = [];
    try {
      parsedTags = tags ? JSON.parse(tags) : [];
    } catch {
      parsedTags = [];
    }

    const post = await Post.create({
      user: {
        name: req.user.name,
        avatar: req.user.avatar,
        userId: req.user._id
      },
      content,
      tags: parsedTags,
      image: req.file ? req.file.path : ""
    });

    res.json({ success: true, post });

  } catch (err) {
    console.error("CREATE POST ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};


export const getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
};
export const likePost = async (req, res) => {
  try {
    const { userId } = req.body;
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    // Convert string to ObjectId safely
    const userObjectId = mongoose.Types.ObjectId.isValid(userId)
      ? new mongoose.Types.ObjectId(userId)
      : userId;

    // Toggle Like
    if (post.likes.includes(userObjectId)) {
      post.likes = post.likes.filter(id => id.toString() !== userObjectId.toString());
    } else {
      post.likes.push(userObjectId);
    }

    await post.save();
    res.json({ likes: post.likes });
  } catch (err) {
    console.error("Like Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
export const addComment = async (req, res) => {
  const post = await Post.findById(req.params.id);

  post.comments.push({
    user: req.body.user,
    text: req.body.text
  });

  await post.save();
  res.json(post);
};

export const trendingTopics = async (req, res) => {
  const topics = await Post.aggregate([
    { $unwind: "$tags" },
    { $group: { _id: "$tags", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 6 }
  ]);

  res.json(topics);
};



