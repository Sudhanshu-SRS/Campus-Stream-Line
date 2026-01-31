import Application from "../models/Application.js";

// Student Apply
export const applyAdmission = async (req, res) => {
  try {
    const application = await Application.create({
      studentId: req.user._id,
      ...req.body
    });

    res.json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Student View Their Applications
export const myApplications = async (req, res) => {
  const apps = await Application.find({ studentId: req.user._id })
    .populate("instituteId departmentId");

  res.json(apps);
};

// Institute View Applications
export const instituteApplications = async (req, res) => {
  const apps = await Application.find({ instituteId: req.user.instituteId })
    .populate("studentId departmentId");

  res.json(apps);
};

// Generate Merit Ranking
export const generateMerit = async (req, res) => {
  const apps = await Application.find({ departmentId: req.params.id })
    .sort({ marks: -1 });

  let rank = 1;
  for (let app of apps) {
    app.rank = rank++;
    await app.save();
  }

  res.json({ success: true, message: "Merit generated" });
};

