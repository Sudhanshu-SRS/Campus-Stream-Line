import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { loginUser } from "../../services/authAPI";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

/* =======================
   THEME CONFIG (SENIOR WAY)
======================= */
const themes = {
  institute: {
    pageBg: "bg-[#0f0e47]",
    cardBg: "bg-[#272757]",
    inputBg: "bg-[#505081]",
    text: "text-white",
    muted: "text-[#8686ac]",
    button: "bg-[#8686ac] hover:bg-[#505081]",
    badge: "bg-[#505081] text-[#e0e0ff]",
    title: "Centralized Admission System",
    subtitle: "Institute Login Portal",
  },
  student: {
    pageBg: "bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100",
    cardBg: "bg-white",
    inputBg: "bg-indigo-50",
    text: "text-gray-800",
    muted: "text-indigo-500",
    button: "bg-indigo-500 hover:bg-indigo-600",
    badge: "bg-indigo-100 text-indigo-600",
    title: "Welcome Student 🎓",
    subtitle: "Student Admission Portal",
  },
};

/* =======================
   LOGIN COMPONENT
======================= */
const Login = ({ role = "institute" }) => {
  const theme = themes[role] || themes.institute;

  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const res = await loginUser({
  //       email: formData.userId,
  //       password: formData.password,
  //       role,
  //     });

  //     login(res.data);

  //     alert("Login successful");

  //     if (role === "student") {
  //       navigate("/student/dashboard");
  //     } else {
  //       navigate("/");
  //     }
  //   } catch (err) {
  //     alert("Invalid credentials");
  //     console.error("Login Error:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginUser({
        email: formData.userId,
        password: formData.password,
        role,
      });

      login(res.data);
      alert("Login successful");

      if (role === "student") {
        navigate("/student/dashboard");
      } else if (role === "institute") {
        navigate("/institute");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert("Invalid credentials");
      console.error("Login Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 ${theme.pageBg}`}
    >
      <div
        className={`w-full max-w-md rounded-2xl shadow-2xl p-8 ${theme.cardBg}`}
      >
        {/* ===== Badge ===== */}
        <div className="flex justify-center mb-4">
          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold ${theme.badge}`}
          >
            {role === "student" ? "🎓 Student Login" : "🏫 Institute Login"}
          </span>
        </div>

        {/* ===== Header ===== */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold ${theme.text}`}>{theme.title}</h1>
          <p className={`mt-2 ${theme.muted}`}>{theme.subtitle}</p>
        </div>

        {/* ===== Form ===== */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User ID */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${theme.muted}`}>
              User ID
            </label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              placeholder="Enter your user ID"
              className={`w-full px-4 py-2 rounded-lg ${theme.inputBg} focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${theme.muted}`}>
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full px-4 py-2 pr-12 rounded-lg ${theme.inputBg} focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                aria-label="Toggle password"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-2 rounded-lg transition ${theme.button} ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {/* ===== Switch Role + Signup Links ===== */}
        <div className="text-center mt-6 text-sm space-y-2">
          {/* Signup */}
          <p className={theme.muted}>
            Don't have an account?{" "}
            <Link
              to={role === "student" ? "/register" : "/instituteregister"}
              className="font-semibold text-indigo-400 hover:underline"
            >
              Sign Up
            </Link>
          </p>

          {/* Switch Role */}
          {role === "student" ? (
            <p>
              Are you an institute?{" "}
              <Link
                to="/login"
                className="font-semibold text-indigo-500 hover:underline"
              >
                Login here
              </Link>
            </p>
          ) : (
            <p className={theme.muted}>
              Are you a student?{" "}
              <Link
                to="/studentlogin"
                className="font-semibold text-indigo-300 hover:underline"
              >
                Login here
              </Link>
            </p>
          )}
        </div>

        {/* ===== Footer ===== */}
        <p className="text-center text-xs mt-6 text-gray-400">
          © {new Date().getFullYear()} Centralized Admission System
        </p>
      </div>
    </div>
  );
};

export default Login;
