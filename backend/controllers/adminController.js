import User from "../models/User.js";


export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields required" });
    }

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed,
      role,
    });

    res.json({ success: true, user });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Promote User Role
export const updateUserRole = async (req, res) => {
  try {
    const { userId, role, instituteId, departmentId } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.role = role;

    if (instituteId) user.instituteId = instituteId;
    if (departmentId) user.departmentId = departmentId;

    await user.save();

    res.json({ success: true, user });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Users
export const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};
