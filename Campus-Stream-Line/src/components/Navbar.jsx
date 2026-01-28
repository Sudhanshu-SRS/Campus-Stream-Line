import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  GraduationCap,
  Building2,
  Users,
  LayoutDashboard,
} from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold text-[#272757] tracking-wide">
          CAS
          <span className="text-[#8686ac]">.Portal</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-3">
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

          {user && (
            <div className="flex items-center gap-3 ml-3">
              <Link to="/profile">
                <img
                  src={user.avatar}
                  className="w-9 h-9 rounded-full object-cover border hover:ring-2 hover:ring-indigo-400"
                />
              </Link>

              <span className="text-sm font-medium text-gray-700 hidden sm:block">
                {user.name}
              </span>

              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                className="text-red-500 text-sm hover:text-red-600 font-semibold"
              >
                Logout
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
   REUSABLE NAV ITEM
======================= */
const NavItem = ({ to, icon, label, student, institute }) => {
  const baseStyle =
    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200";

  const defaultStyle = "text-gray-700 hover:bg-gray-100";

  const studentStyle =
    "text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700";

  const instituteStyle =
    "text-[#272757] hover:bg-[#505081]/10 hover:text-[#0f0e47]";

  const getColorStyle = () => {
    if (student) return studentStyle;
    if (institute) return instituteStyle;
    return defaultStyle;
  };

  const activeStyle = "bg-indigo-600 text-white shadow-md scale-[1.03]";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${baseStyle} ${isActive ? activeStyle : getColorStyle()}`
      }
    >
      {icon}
      <span className="hidden sm:block">{label}</span>
    </NavLink>
  );
};
