import Group from "../models/Group.js";

export const getGroups = async (req, res) => {
  const groups = await Group.find().limit(5);
  res.json(groups);
};
