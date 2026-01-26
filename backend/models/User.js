import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  avatar: { type: String, default: "https://i.pravatar.cc/150" }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
