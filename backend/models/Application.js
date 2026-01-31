import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  instituteId: { type: mongoose.Schema.Types.ObjectId, ref: "Institute" },
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
  marks: Number,
  status: { type: String, default: "pending" },
  rank: Number
}, { timestamps: true });

export default mongoose.model("Application", applicationSchema);
