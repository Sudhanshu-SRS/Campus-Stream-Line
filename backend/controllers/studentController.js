import StudentProfile from "../models/StudentProfile.js";

export const saveProfile = async (req, res) => {
  const profile = await StudentProfile.create({
    userId: req.user._id,
    ...req.body
  });
  res.json(profile);
};
