import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: {
  type: String,
  required: true,
  select: false
}
,
  avatar: { type: String, default: "https://i.pravatar.cc/150" },

  role: {
    type: String,
    enum: ["student", "institute_admin", "hod", "staff", "superadmin"],
    default: "student"
  },

  instituteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institute",
    default: null
  },

  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    default: null
  }

}, { timestamps: true });

export default mongoose.model("User", userSchema);