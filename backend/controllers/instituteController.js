import Institute from "../models/Institute.js";

// Create Institute (Super Admin)
export const createInstitute = async (req, res) => {
  try {
    const institute = await Institute.create(req.body);
    res.json(institute);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Institutes (Public)
export const getInstitutes = async (req, res) => {
  const institutes = await Institute.find().sort({ ranking: 1 });
  res.json(institutes);
};
