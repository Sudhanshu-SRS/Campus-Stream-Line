import { Link } from "react-router-dom";
import { GraduationCap, Building2, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
            🎓 Simplifying Admissions Nationwide
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            One Platform for <br />
            <span className="text-indigo-600">Seamless Admissions</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            The Centralized Admission System connects students and institutes on
            a single transparent platform, making the admission process faster,
            simpler, and stress-free.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/studentlogin"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              <GraduationCap size={20} />
              Student Login
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold border border-indigo-200 hover:bg-indigo-50 transition"
            >
              <Building2 size={20} />
              Institute Login
            </Link>
          </div>
        </div>

        {/* Right Visual Card */}
        <div className="relative">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Why Choose CAS?
            </h3>

            <ul className="space-y-4">
              <Feature text="Centralized seat allocation system" />
              <Feature text="Transparent & real-time updates" />
              <Feature text="Easy application tracking" />
              <Feature text="Secure and scalable platform" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* =======================
   FEATURE ITEM
======================= */
const Feature = ({ text }) => {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 w-3 h-3 rounded-full bg-indigo-500"></span>
      <p className="text-gray-600">{text}</p>
    </li>
  );
};
