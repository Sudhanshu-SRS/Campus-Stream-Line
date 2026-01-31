import Department from "../models/Department.js";

// Create Department (Institute Admin)
export const createDepartment = async (req, res) => {
  try {
    const department = await Department.create({
      ...req.body,
      instituteId: req.user.instituteId
    });

    res.json(department);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Departments by Institute
export const getDepartmentsByInstitute = async (req, res) => {
  const departments = await Department.find({ instituteId: req.params.id });
  res.json(departments);
};
