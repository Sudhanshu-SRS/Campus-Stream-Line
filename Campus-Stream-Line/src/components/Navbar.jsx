import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  GraduationCap,
  Building2,
  Users,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="text-xl font-extrabold tracking-wide flex items-center gap-1">
          <span className="text-[#272757]">CAS</span>
          <span className="text-[#8686ac]">.Portal</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">

          <NavItem to="/" icon={<Home size={18} />} label="Home" />

          <NavItem
            to="/communityhub"
            icon={<Users size={18} />}
            label="Community Hub"
            institute
          />

          {!user && (
            <>
              <NavItem
                to="/studentlogin"
                icon={<GraduationCap size={18} />}
                label="Student Login"
                student
              />
              <NavItem
                to="/login"
                icon={<Building2 size={18} />}
                label="Institute Login"
                institute
              />
            </>
          )}

          {user && (
            <NavItem
              to="/student/dashboard"
              icon={<LayoutDashboard size={18} />}
              label="Dashboard"
              institute
            />
          )}

          {/* Profile Section */}
          {user && (
            <div className="flex items-center gap-3 ml-4 bg-gray-50 px-3 py-1.5 rounded-full border shadow-sm">

              <Link to="/profile" className="relative">
                <img
                  src={user.avatar}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-400 hover:ring-indigo-600 transition"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </Link>

              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-sm font-semibold text-gray-800">
                  {user.name}
                </span>
                <span className="text-xs text-gray-500">
                  Logged In
                </span>
              </div>

              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                className="flex items-center gap-1 text-red-500 hover:text-red-600 text-sm font-semibold transition"
              >
                <LogOut size={16} />
                <span className="hidden sm:block">Logout</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/* =======================
   PREMIUM NAV ITEM
======================= */

const NavItem = ({ to, icon, label, student, institute }) => {
  const base =
    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.05]";

  const defaultStyle = "text-gray-700 hover:bg-gray-100";

  const studentStyle =
    "text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700";

  const instituteStyle =
    "text-[#272757] hover:bg-[#505081]/10 hover:text-[#0f0e47]";

  const active =
    "bg-indigo-600 text-white shadow-md scale-[1.08]";

  const getStyle = () => {
    if (student) return studentStyle;
    if (institute) return instituteStyle;
    return defaultStyle;
  };

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${base} ${isActive ? active : getStyle()}`
      }
    >
      {icon}
      <span className="hidden sm:block">{label}</span>
    </NavLink>
  );
};
