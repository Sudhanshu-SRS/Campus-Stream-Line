import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  user: {
    name: String,
    avatar: String,
    userId: mongoose.Schema.Types.ObjectId
  },
  content: String,
  image: String,

  likes: [{ type: mongoose.Schema.Types.ObjectId }],
  
  comments: [
    {
      user: String,
      text: String,
      createdAt: { type: Date, default: Date.now }
    }
  ],

  tags: [String],
}, { timestamps: true });

export default mongoose.model("Post", postSchema);
