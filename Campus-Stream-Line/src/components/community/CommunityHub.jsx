import { motion } from "framer-motion";

const stars = Array.from({ length: 120 });

export default function CommunityHub() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#050816] via-[#020617] to-black text-white px-6 py-10 overflow-hidden">

      {/* 🌌 MOVING STARFIELD */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/70 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
              scale: Math.random() * 1.4
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.3, 0.5]
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* 🌈 GIANT GLOW WAVES */}
      <motion.div
        className="absolute w-[650px] h-[650px] bg-indigo-500/15 blur-[140px] rounded-full top-[-250px] left-[-200px]"
        animate={{ x: [0, 150, 0], y: [0, 120, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[650px] h-[650px] bg-purple-500/15 blur-[140px] rounded-full bottom-[-250px] right-[-200px]"
        animate={{ x: [0, -150, 0], y: [0, -120, 0] }}
        transition={{ duration: 28, repeat: Infinity }}
      />

      {/* MAIN GRID */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10"
      >

        {/* LEFT PANEL */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          whileHover={{ scale: 1.04, boxShadow: "0 30px 90px rgba(99,102,241,0.35)" }}
          className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/10"
        >
          <h2 className="text-lg font-semibold mb-4 text-indigo-400">
            🔥 Trending Topics
          </h2>

          <ul className="space-y-3 text-sm text-gray-300">
            {["#MERNStack", "#Placements", "#AI", "#Hackathons"].map((tag, i) => (
              <motion.li
                key={i}
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity }}
                whileHover={{ scale: 1.2, color: "#fff" }}
                className="cursor-pointer"
              >
                {tag}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CENTER FEED */}
        <div className="md:col-span-2 space-y-6">

          {/* CREATE POST BUTTON */}
          <motion.button
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 rgba(99,102,241,0.3)",
                "0 0 40px rgba(99,102,241,0.9)",
                "0 0 0 rgba(99,102,241,0.3)"
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 rounded-2xl bg-indigo-600 font-semibold shadow-lg"
          >
            ➕ Create Post
          </motion.button>

          {/* POSTS */}
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity }}
              whileHover={{
                scale: 1.03,
                rotate: 0.2,
                boxShadow: "0 35px 100px rgba(99,102,241,0.35)"
              }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white/10"
            >
              <motion.h3
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-semibold text-indigo-400"
              >
                🚀 Student shared a project
              </motion.h3>

              <p className="text-gray-300 mt-2 text-sm">
                Built an AI chatbot using MERN + OpenAI API. Thoughts?
              </p>

              <div className="flex gap-4 mt-4 text-sm text-gray-400">
                {["❤️ Like", "💬 Comment", "🔗 Share"].map((item, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.3, color: "#fff" }}
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 3 + idx, repeat: Infinity }}
                    className="cursor-pointer"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          whileHover={{ scale: 1.04, boxShadow: "0 30px 90px rgba(99,102,241,0.35)" }}
          className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/10"
        >
          <h2 className="text-lg font-semibold mb-4 text-indigo-400">
            💬 Suggested Groups
          </h2>

          <ul className="space-y-3 text-sm text-gray-300">
            {["Web Dev Club", "AI Community", "Placement Help"].map((group, i) => (
              <motion.li
                key={i}
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity }}
                whileHover={{ scale: 1.2, color: "#fff" }}
                className="cursor-pointer"
              >
                {group}
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </motion.div>
    </div>
  );
}
