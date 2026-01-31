import mongoose from "mongoose";

const studentProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dob: String,
  marks: Number,
  category: String
});

export default mongoose.model("StudentProfile", studentProfileSchema);
