import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const colleges = [
  {
    rank: 1,
    name: "IIT Bombay",
    score: 98.9,
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/IIT_Bombay_Logo.svg",
    photo: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80"
  },
  {
    rank: 2,
    name: "IIT Delhi",
    score: 97.4,
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4e/IIT_Delhi_Logo.svg",
    photo: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=900&q=80"
  },
  {
    rank: 3,
    name: "IIT Madras",
    score: 96.8,
    logo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg",
    photo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=900&q=80"
  },
  {
    rank: 4,
    name: "BITS Pilani",
    score: 95.2,
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg",
    photo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=900&q=80"
  },
  {
    rank: 5,
    name: "NIT Trichy",
    score: 94.6,
    logo: "https://upload.wikimedia.org/wikipedia/en/8/80/NIT_Trichy_Logo.svg",
    photo: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80"
  }
];

const infiniteColleges = [...colleges, ...colleges];
const stars = Array.from({ length: 120 });

export default function CollegeRanking() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f9fbff] via-[#eef4ff] to-[#fff1f8] text-gray-900 px-6 py-16 overflow-hidden">

      {/* ⭐ STARFIELD BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-[3px] h-[3px] bg-indigo-400/70 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random()
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.6, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 14,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* 🌈 GIANT GRADIENT GLOW WAVES */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-indigo-300/40 blur-[140px] rounded-full top-[-250px] left-[-250px]"
        animate={{ x: [0, 150, 0], y: [0, 120, 0] }}
        transition={{ duration: 24, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[700px] h-[700px] bg-pink-300/40 blur-[140px] rounded-full bottom-[-250px] right-[-250px]"
        animate={{ x: [0, -150, 0], y: [0, -120, 0] }}
        transition={{ duration: 26, repeat: Infinity }}
      />

      {/* 🏆 HEADER WITH FLOAT + SHIMMER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14 relative z-10"
      >
        <motion.h1
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl"
        >
          Top College Rankings 2026 🏆
        </motion.h1>

        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-gray-600 mt-3 text-lg"
        >
          India's most premium ranked colleges based on academics, placements & campus life.
        </motion.p>
      </motion.div>

      {/* 🎠 AUTO SCROLL STRIP */}
      <div className="relative z-10 overflow-hidden">
        <motion.div
          className="flex gap-7 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {infiniteColleges.map((college, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4 + index, repeat: Infinity }}
              whileHover={{
                scale: 1.1,
                rotate: 0.6,
                boxShadow: "0 40px 100px rgba(99,102,241,0.35)"
              }}
              className="min-w-[340px] bg-white/95 backdrop-blur-xl border border-indigo-200 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* 📸 IMAGE WITH PARALLAX */}
              <div className="h-44 overflow-hidden">
                <motion.img
                  src={college.photo}
                  alt={college.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* 🏫 INFO */}
              <div className="p-5 flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="w-14 h-14 bg-white rounded-full p-2 flex items-center justify-center shadow-xl"
                >
                  <img src={college.logo} alt="" className="object-contain w-full h-full" />
                </motion.div>

                <div>
                  <h3 className="text-lg font-bold text-indigo-700">
                    {college.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Rank #{college.rank} • Score {college.score}
                  </p>
                </div>
              </div>

              {/* 📊 ANIMATED SCORE BAR */}
              <div className="px-5 pb-5">
                <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${college.score}%` }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* 👉 VIEW ALL CTA */}
          <motion.div
            whileHover={{ scale: 1.18, rotate: 1 }}
            animate={{
              scale: [1, 1.15, 1],
              boxShadow: [
                "0 0 0 rgba(99,102,241,0.3)",
                "0 0 50px rgba(99,102,241,0.9)",
                "0 0 0 rgba(99,102,241,0.3)"
              ]
            }}
            transition={{ duration: 2.3, repeat: Infinity }}
            onClick={() => navigate("/college")}
            className="min-w-[280px] flex items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-extrabold text-xl shadow-2xl cursor-pointer"
          >
            View All Colleges →
          </motion.div>

        </motion.div>
      </div>

    </div>
  );
}
