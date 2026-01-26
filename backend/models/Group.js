import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  name: String,
  description: String,
  membersCount: Number
});

export default mongoose.model("Group", groupSchema);
