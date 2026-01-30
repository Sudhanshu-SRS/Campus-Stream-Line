// import { Link } from "react-router-dom";
// import { GraduationCap, Building2, ArrowRight } from "lucide-react";
// import Notifications from "./Notification";

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100">
//       {/* Decorative Blobs */}
//       <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Left Content */}
//         <div>
//           <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
//             🎓 Simplifying Admissions Nationwide
//           </span>

//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
//             One Platform for <br />
//             <span className="text-indigo-600">Seamless Admissions</span>
//           </h1>

//           <p className="mt-6 text-lg text-gray-600 max-w-xl">
//             The Centralized Admission System connects students and institutes on
//             a single transparent platform, making the admission process faster,
//             simpler, and stress-free.
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-8 flex flex-wrap gap-4">
//             <Link
//               to="/studentlogin"
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
//             >
//               <GraduationCap size={20} />
//               Student Login
//               <ArrowRight size={18} />
//             </Link>

//             <Link
//               to="/login"
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold border border-indigo-200 hover:bg-indigo-50 transition"
//             >
//               <Building2 size={20} />
//               Institute Login
//             </Link>
//           </div>
//         </div>

//         {/* Right Visual Card */}
//         <div className="relative">
//           {/* <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8">
//             <h3 className="text-xl font-bold text-gray-800 mb-6">
//               Why Choose CAS?
//             </h3>

//             <ul className="space-y-4">
//               <Feature text="Centralized seat allocation system" />
//               <Feature text="Transparent & real-time updates" />
//               <Feature text="Easy application tracking" />
//               <Feature text="Secure and scalable platform" />
//             </ul>
//           </div> */}
//           <Notifications />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// /* =======================
//    FEATURE ITEM
// ======================= */
// const Feature = ({ text }) => {
//   return (
//     <li className="flex items-start gap-3">
//       <span className="mt-1 w-3 h-3 rounded-full bg-indigo-500"></span>
//       <p className="text-gray-600">{text}</p>
//     </li>
//   );
// };

import { Sparkles } from "lucide-react";
import Notifications from "./Notification";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[95vh] flex items-center">
      {/* 🎥 MOVING BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-bgSlowZoom"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=2000&q=90')",
        }}
      />

      {/* DARK PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-indigo-900/40 to-purple-900/60"></div>

      {/* FLOATING GLOW ORBS */}
      <div className="absolute top-16 left-16 w-72 h-72 bg-indigo-500/30 blur-3xl rounded-full animate-floatSlow"></div>
      <div className="absolute bottom-24 right-20 w-96 h-96 bg-pink-500/25 blur-3xl rounded-full animate-floatSlow delay-200"></div>

      {/* MAIN GRID */}
      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-7 animate-textReveal">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm font-semibold shadow hover:scale-105 transition">
            <Sparkles size={16} />
            Simplifying Admissions Nationwide
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg animate-headingGlow">
            One Platform for <br />
            <span className="text-indigo-300">Seamless Admissions</span>
          </h1>

          <p className="text-lg text-gray-200 max-w-xl leading-relaxed animate-fadeUp delay-150">
            The{" "}
            <span className="font-semibold text-indigo-300">
              Centralized Admission System
            </span>{" "}
            connects students and institutes on one transparent, secure, and
            efficient platform — making admissions faster, simpler, and
            stress-free.
          </p>
        </div>

        {/* RIGHT — NOTIFICATIONS */}
        <div className="relative w-full animate-cardFloat">
          <div className="absolute inset-0 bg-indigo-400/30 blur-3xl rounded-3xl"></div>

          <div className="relative w-full bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl p-6 hover:scale-[1.04] hover:rotate-[0.5deg] transition">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              🔔 Live Admission Alerts
            </h3>

            <Notifications />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
