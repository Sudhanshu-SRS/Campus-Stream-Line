import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  name: String,
  instituteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institute"
  },
  cutoffMarks: Number,
  totalSeats: Number
});

export default mongoose.model("Department", departmentSchema);
