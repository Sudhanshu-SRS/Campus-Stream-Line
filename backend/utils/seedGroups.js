import mongoose from "mongoose";
import Group from "../models/Group.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

await Group.insertMany([
  {
    name: "Web Developers",
    description: "Frontend & Backend Devs",
    membersCount: 1200
  },
  {
    name: "AI & ML",
    description: "AI Students & Builders",
    membersCount: 980
  },
  {
    name: "MERN Community",
    description: "MERN Stack Developers",
    membersCount: 2000
  }
]);

console.log("Groups Seeded");
process.exit();
