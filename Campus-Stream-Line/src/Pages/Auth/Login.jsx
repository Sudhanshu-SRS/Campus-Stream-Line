import { useState, useContext, useRef } from "react";
import { Eye, EyeOff, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authAPI";
import { AuthContext } from "../../context/AuthContext";

const themes = {
  institute: {
    pageBg: "bg-[#070b2a]",
    cardBg: "bg-white/10 backdrop-blur-2xl",
    inputBg: "bg-white/10",
    text: "text-white",
    muted: "text-indigo-300",
    button: "bg-indigo-600 hover:bg-indigo-700",
    badge: "bg-indigo-500/20 text-indigo-300",
    title: "Centralized Admission System",
    subtitle: "Institute Login Portal",
  },
  student: {
    pageBg: "bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100",
    cardBg: "bg-white/80 backdrop-blur-xl",
    inputBg: "bg-indigo-50",
    text: "text-gray-900",
    muted: "text-indigo-500",
    button: "bg-indigo-600 hover:bg-indigo-700",
    badge: "bg-indigo-100 text-indigo-600",
    title: "Welcome Student 🎓",
    subtitle: "Student Admission Portal",
  },
};

const Login = ({ role = "institute" }) => {
  const theme = themes[role];
  const [formData, setFormData] = useState({ userId: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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
      navigate(role === "student" ? "/student/dashboard" : "/");
    } catch {
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  // 🎥 3D Tilt Effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };

  const resetTilt = () => {
    if (cardRef.current) cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden px-4 ${theme.pageBg}`}>

      {/* 🌠 STARFIELD BACKGROUND */}
      <div className="absolute inset-0 starfield"></div>

      {/* ✨ SHOOTING STARS */}
      <div className="shooting-star"></div>
      <div className="shooting-star delay-2"></div>
      <div className="shooting-star delay-4"></div>

      {/* 🌈 FLOATING NEON ORBS */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-indigo-500/30 blur-[140px] rounded-full animate-floatSlow"></div>
      <div className="absolute bottom-[-180px] right-[-180px] w-[600px] h-[600px] bg-pink-500/30 blur-[160px] rounded-full animate-floatSlow delay-[3s]"></div>

      {/* 🧊 LOGIN CARD */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className={`relative z-10 w-full max-w-md rounded-3xl shadow-[0_30px_80px_rgba(99,102,241,0.4)] p-10 border border-white/20 animate-fadeInUp transition-transform duration-300 ${theme.cardBg}`}
      >

        {/* ✨ GLOW BORDER */}
        <div className="absolute inset-0 rounded-3xl border border-indigo-500/30 animate-borderGlow pointer-events-none"></div>

        {/* BADGE */}
        <div className="flex justify-center mb-4">
          <span className={`px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow ${theme.badge}`}>
            <Sparkles size={16} />
            {role === "student" ? "Student Login" : "Institute Login"}
          </span>
        </div>

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-extrabold ${theme.text} animate-textGlow`}>
            {theme.title}
          </h1>
          <p className={`mt-2 ${theme.muted}`}>
            {theme.subtitle}
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* USER ID */}
          <div className="group">
            <label className={`block text-sm mb-1 ${theme.muted}`}>User ID</label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              placeholder="Enter your user ID"
              className={`w-full px-4 py-3 rounded-xl ${theme.inputBg} focus:ring-2 focus:ring-indigo-400 transition shadow-lg`}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="group">
            <label className={`block text-sm mb-1 ${theme.muted}`}>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full px-4 py-3 pr-12 rounded-xl ${theme.inputBg} focus:ring-2 focus:ring-indigo-400 transition shadow-lg`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-400 hover:text-indigo-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl text-white font-bold tracking-wide shadow-[0_0_25px_rgba(99,102,241,0.6)] transition transform hover:scale-[1.06] ${theme.button}`}
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {/* LINKS */}
        <div className="text-center mt-6 text-sm space-y-2">
          <p className={theme.muted}>
            Don't have an account?{" "}
            <Link to={role === "student" ? "/register" : "/instituteregister"} className="text-indigo-400 hover:underline">
              Sign Up
            </Link>
          </p>

          {role === "student" ? (
            <p className={theme.muted}>
              Are you an institute? <Link to="/login" className="text-indigo-400 hover:underline">Login here</Link>
            </p>
          ) : (
            <p className={theme.muted}>
              Are you a student? <Link to="/studentlogin" className="text-indigo-400 hover:underline">Login here</Link>
            </p>
          )}
        </div>

        <p className="text-center text-xs mt-6 text-indigo-400">
          © {new Date().getFullYear()} Centralized Admission System
        </p>
      </div>
    </div>
  );
};

export default Login;
