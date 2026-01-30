import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
        }}
      />

      {/* Floating Glow Orbs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-indigo-500/30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-500/30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-purple-500/30 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-4">

        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight flex items-center gap-2">
            CAS<span className="text-indigo-400">.Portal</span>
            <Sparkles size={20} className="text-yellow-400 animate-pulse" />
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Centralized Admission System — simplifying admissions, empowering students, and connecting institutions nationwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-indigo-300">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            {["Home", "Admissions", "Colleges", "Happenings", "Community"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-white hover:translate-x-2 transition-all cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-indigo-300">
            Support
          </h3>
          <ul className="space-y-2 text-gray-300">
            {["Help Center", "FAQs", "Privacy Policy", "Terms & Conditions"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-white hover:translate-x-2 transition-all cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-2 text-indigo-300">
            Contact Us
          </h3>

          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition">
            <Phone size={18} /> +91 98765 43210
          </div>

          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition">
            <Mail size={18} /> support@casportal.in
          </div>

          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition">
            <MapPin size={18} /> India
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                className="p-3 bg-white/10 rounded-full hover:bg-indigo-500 hover:scale-110 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/20 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} CAS Portal — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
