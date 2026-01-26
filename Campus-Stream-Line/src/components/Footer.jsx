import { Link } from "react-router-dom";
import { GraduationCap, Building2, Home, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#0f0e47] via-[#272757] to-[#0f0e47] text-gray-300 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            CAS<span className="text-[#8686ac]">.Portal</span>
          </h2>
          <p className="text-sm mt-3 text-gray-400 leading-relaxed">
            A centralized platform simplifying the admission process for
            students and institutes with transparency and efficiency.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <FooterLink to="/" icon={<Home size={16} />} label="Home" />
            <FooterLink
              to="/studentlogin"
              icon={<GraduationCap size={16} />}
              label="Student Login"
            />
            <FooterLink
              to="/login"
              icon={<Building2 size={16} />}
              label="Institute Login"
            />
          </ul>
        </div>

        {/* Footer Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Built as a modern web application using React and Tailwind CSS.
            Designed to be scalable, secure, and user-friendly.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Centralized Admission System. All
            rights reserved.
          </p>

          <p className="text-xs text-gray-400 flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400" /> using React &
            Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* =======================
   REUSABLE FOOTER LINK
======================= */
const FooterLink = ({ to, icon, label }) => {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center gap-2 text-sm hover:text-white transition"
      >
        {icon}
        {label}
      </Link>
    </li>
  );
};
