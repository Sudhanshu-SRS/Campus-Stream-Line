import { motion } from "framer-motion";

const events = [
  {
    title: "Centralized Admission Drive 2026",
    tag: "Admissions Open",
    desc: "The centralized admission process for the academic year 2026 has officially begun.",
    location: "Bhubaneswar, Odisha",
    date: "2026-03-15",
    phone: "+91 98765 43210",
    email: "admissions@casportal.in",
  },
  {
    title: "Phase-1 Counselling Schedule Released",
    tag: "Counselling Update",
    desc: "Students are requested to check their counselling slots and prepare required documents.",
    location: "Online",
    date: "2026-03-22",
    phone: "+91 91234 56789",
    email: "support@casportal.in",
  },
  {
    title: "National Scholarship Program",
    tag: "Scholarships",
    desc: "Merit-based scholarships open for engineering and medical students.",
    location: "India",
    date: "2026-04-10",
    phone: "+91 99876 54321",
    email: "scholarships@casportal.in",
  },
];

const infiniteEvents = [...events, ...events];
const stars = Array.from({ length: 80 });

export default function AllHappenings() {
  return (
    <div
      className="relative min-h-screen px-6 py-20 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" />

      {/* 🌠 FLOATING STARS */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-[2px] h-[2px] bg-indigo-400/60 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0.2, 1, 0.2],
              scale: [0.6, 1.3, 0.6],
            }}
            transition={{
              duration: 10 + Math.random() * 14,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* 🌸 GLOW BLOBS */}
      <motion.div
        className="absolute w-[520px] h-[520px] bg-indigo-300/40 blur-3xl rounded-full top-[-140px] left-[-140px]"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[520px] h-[520px] bg-pink-300/40 blur-3xl rounded-full bottom-[-140px] right-[-140px]"
        animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* 🌊 HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <span className="inline-flex px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold shadow-lg">
          ✨ Latest Happenings
        </span>

        <motion.h1
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Stay Updated with{" "}
          <span className="text-indigo-600">Live Events</span> &{" "}
          <span className="text-purple-600">Opportunities</span>
        </motion.h1>

        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-4 text-gray-700"
        >
          Admissions, counselling updates, scholarships, and campus events.
        </motion.p>
      </motion.div>

      {/* 🎠 AUTO VERTICAL SCROLL */}
      <div className="relative z-10 max-w-5xl mx-auto h-[560px] overflow-hidden">
        <motion.div
          className="flex flex-col gap-8"
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {infiniteEvents.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.04,
                rotate: 0.3,
                boxShadow: "0 30px 80px rgba(99,102,241,0.35)",
              }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4 + index, repeat: Infinity }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-7 shadow-xl border border-indigo-100"
            >
              <span className="inline-block px-4 py-1 mb-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold">
                {event.tag}
              </span>

              <h2 className="text-xl font-bold text-indigo-700">
                {event.title}
              </h2>

              <p className="mt-2 text-gray-700">
                {event.desc}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>📍 {event.location}</div>
                <div>📅 {event.date}</div>
                <div>📞 {event.phone}</div>
                <div>✉️ {event.email}</div>
              </div>

              <motion.button
                whileHover={{ scale: 1.12 }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(99,102,241,0.3)",
                    "0 0 30px rgba(99,102,241,0.7)",
                    "0 0 0 rgba(99,102,241,0.3)",
                  ],
                }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="mt-5 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold shadow"
              >
                View Details →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
