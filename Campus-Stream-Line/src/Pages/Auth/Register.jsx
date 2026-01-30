import { useState, useContext } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authAPI";
import { AuthContext } from "../../context/AuthContext";
import { motion } from "framer-motion";

const Register = ({ role = "student" }) => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await registerUser({ ...formData, role });
      login(res.data);
      navigate(role === "student" ? "/student/dashboard" : "/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 px-4 relative overflow-hidden">

      {/* Floating glowing blobs */}
      <div className="absolute w-72 h-72 bg-pink-400/40 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-indigo-400/40 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/15 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/30"
      >

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl font-bold text-white tracking-wide">
            Create Account 🚀
          </h1>
          <p className="text-indigo-200 mt-1">Register as {role}</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <motion.input
            whileFocus={{ scale: 1.04 }}
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/80 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            required
          />

          {/* Email */}
          <motion.input
            whileFocus={{ scale: 1.04 }}
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/80 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            required
          />

          {/* Password */}
          <div className="relative">
            <motion.input
              whileFocus={{ scale: 1.04 }}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 pr-12 rounded-xl bg-white/80 focus:ring-2 focus:ring-indigo-400 outline-none transition"
              required
            />
            <motion.button
              type="button"
              whileTap={{ scale: 0.85 }}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </motion.button>
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg hover:shadow-xl transition"
          >
            {loading ? "Creating Account..." : "Register"}
          </motion.button>
        </form>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-5 text-sm text-white/80"
        >
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-300 font-semibold hover:underline">
            Login
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Register;
