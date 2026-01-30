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
            <span className="text-indigo-300">
              Seamless Admissions
            </span>
          </h1>

          <p className="text-lg text-gray-200 max-w-xl leading-relaxed animate-fadeUp delay-150">
            The <span className="font-semibold text-indigo-300">Centralized Admission System</span> connects students and institutes on one transparent, secure, and efficient platform — making admissions faster, simpler, and stress-free.
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
