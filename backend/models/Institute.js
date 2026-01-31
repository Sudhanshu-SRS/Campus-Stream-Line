import mongoose from "mongoose";

const instituteSchema = new mongoose.Schema({
  name: String,
  city: String,
  ranking: Number,
  description: String
}, { timestamps: true });

export default mongoose.model("Institute", instituteSchema);
