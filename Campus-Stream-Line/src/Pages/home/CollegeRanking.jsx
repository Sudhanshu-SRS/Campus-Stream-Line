// import { useEffect, useRef, useState } from "react";
// import {
//   Phone,
//   MapPin,
//   Star,
//   ChevronLeft,
//   ChevronRight,
//   ArrowRight,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// /* =======================
//    MOCK DATA (API READY)
// ======================= */
// const colleges = [
//   {
//     id: 1,
//     name: "National Institute of Technology, Rourkela",
//     image:
//       "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200",
//     contact: "+91 661 246 2020",
//     address: "Rourkela, Odisha, India",
//     rating: 4.6,
//   },
//   {
//     id: 2,
//     name: "Indian Institute of Technology, Bhubaneswar",
//     image:
//       "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200",
//     contact: "+91 674 713 4567",
//     address: "Argul, Bhubaneswar, Odisha",
//     rating: 4.8,
//   },
//   {
//     id: 3,
//     name: "KIIT University",
//     image:
//       "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1200",
//     contact: "+91 674 272 5113",
//     address: "Bhubaneswar, Odisha, India",
//     rating: 4.3,
//   },
// ];

// const AUTO_INTERVAL = 4000;
// const TRANSITION_TIME = 300;

// const CollegeRanking = () => {
//   const [index, setIndex] = useState(0);
//   const [direction, setDirection] = useState("right"); // left | right
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const startX = useRef(null);

//   /* =======================
//      SIMULATE API LOADING
//   ======================= */
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   /* =======================
//      AUTO SLIDE
//   ======================= */
//   useEffect(() => {
//     if (isPaused || loading) return;

//     const interval = setInterval(() => {
//       slide("right");
//     }, AUTO_INTERVAL);

//     return () => clearInterval(interval);
//   }, [index, isPaused, loading]);

//   const slide = (dir) => {
//     if (isAnimating) return;

//     setDirection(dir);
//     setIsAnimating(true);

//     setTimeout(() => {
//       setIndex((prev) =>
//         dir === "right"
//           ? (prev + 1) % colleges.length
//           : (prev - 1 + colleges.length) % colleges.length,
//       );
//       setIsAnimating(false);
//     }, TRANSITION_TIME);
//   };

//   /* =======================
//      SWIPE HANDLERS
//   ======================= */
//   const handleTouchStart = (e) => {
//     startX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     if (!startX.current) return;
//     const diff = startX.current - e.changedTouches[0].clientX;

//     if (diff > 50) slide("right");
//     if (diff < -50) slide("left");

//     startX.current = null;
//   };

//   if (loading) {
//     return <Skeleton />;
//   }

//   const college = colleges[index];

//   return (
//     <section className="py-20 bg-linear-to-br from-indigo-50 to-purple-50">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
//             Top Ranked Colleges
//           </h2>
//           <p className="mt-3 text-gray-600">
//             Discover institutions trusted by students nationwide
//           </p>
//         </div>

//         {/* Carousel */}
//         <div
//           className="relative bg-white rounded-3xl shadow-xl overflow-hidden"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           {/* Arrows */}
//           <Arrow direction="left" onClick={() => slide("left")} />
//           <Arrow direction="right" onClick={() => slide("right")} />

//           {/* Slide */}
//           <div
//             className={`grid md:grid-cols-2 transition-all duration-300 ease-in-out
//               ${
//                 isAnimating
//                   ? direction === "right"
//                     ? "opacity-0 translate-x-6"
//                     : "opacity-0 -translate-x-6"
//                   : "opacity-100 translate-x-0"
//               }`}
//           >
//             {/* Image */}
//             <img
//               src={college.image}
//               alt={college.name}
//               className="w-full h-72 md:h-full object-cover"
//             />

//             {/* Content */}
//             <div className="p-8 flex flex-col justify-center">
//               {/* Rank */}
//               <span className="mt-6 inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold w-fit">
//                 Rank #{index + 1}
//               </span>
//               <h3 className="text-2xl font-bold text-gray-800">
//                 {college.name}
//               </h3>

//               {/* Info */}
//               <div className="mt-6 space-y-3 text-gray-700">
//                 <Info icon={<Phone size={18} />} text={college.contact} />
//                 <Info icon={<MapPin size={18} />} text={college.address} />
//               </div>
//               {/* Rating */}
//               <div className="flex items-center gap-2 mt-3">
//                 <Stars rating={college.rating} />
//                 <span className="text-sm text-gray-600">
//                   {college.rating} / 5
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-6">
//           {colleges.map((_, i) => (
//             <span
//               key={i}
//               className={`w-3 h-3 rounded-full transition ${
//                 i === index ? "bg-indigo-600 scale-110" : "bg-indigo-300"
//               }`}
//             />
//           ))}
//         </div>
//         {/* View All Button */}
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={() => {
//               navigate("/ranking");
//             }}
//             className="
//       group
//       inline-flex items-center gap-3
//       px-8 py-3
//       rounded-full
//       bg-indigo-600
//       text-white
//       font-semibold
//       transition-all duration-300
//       hover:bg-indigo-700
//       hover:scale-105
//       shadow-lg shadow-indigo-300/40
//     "
//           >
//             <span>View All Colleges</span>

//             {/* Arrow */}
//             <span
//               className="
//         flex items-center justify-center
//         w-8 h-8
//         rounded-full
//         transition-all duration-300
//         group-hover:bg-white/20
//         group-hover:translate-x-1
//               "
//             >
//               <ArrowRight size={18} />
//             </span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CollegeRanking;

// /* =======================
//    SUB COMPONENTS
// ======================= */

// const Arrow = ({ direction, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`absolute top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-md hover:bg-indigo-50 transition
//       ${direction === "left" ? "left-4" : "right-4"}`}
//   >
//     {direction === "left" ? <ChevronLeft /> : <ChevronRight />}
//   </button>
// );

// const Info = ({ icon, text }) => (
//   <div className="flex items-center gap-3">
//     <span className="text-indigo-600">{icon}</span>
//     <span>{text}</span>
//   </div>
// );

// const Stars = ({ rating }) => {
//   const full = Math.floor(rating);
//   return (
//     <div className="flex gap-1">
//       {[...Array(5)].map((_, i) => (
//         <Star
//           key={i}
//           size={18}
//           className={
//             i < full ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
//           }
//         />
//       ))}
//     </div>
//   );
// };

// /* =======================
//    SKELETON LOADER
// ======================= */
// const Skeleton = () => (
//   <section className="py-20">
//     <div className="max-w-6xl mx-auto px-6">
//       <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-pulse">
//         <div className="grid md:grid-cols-2">
//           <div className="h-72 bg-gray-200" />
//           <div className="p-8 space-y-4">
//             <div className="h-6 bg-gray-200 rounded w-3/4" />
//             <div className="h-4 bg-gray-200 rounded w-1/2" />
//             <div className="h-4 bg-gray-200 rounded w-full" />
//             <div className="h-4 bg-gray-200 rounded w-2/3" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const colleges = [
  {
    rank: 1,
    name: "IIT Bombay",
    score: 98.9,
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/IIT_Bombay_Logo.svg",
    photo:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80",
  },
  {
    rank: 2,
    name: "IIT Delhi",
    score: 97.4,
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4e/IIT_Delhi_Logo.svg",
    photo:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=900&q=80",
  },
  {
    rank: 3,
    name: "IIT Madras",
    score: 96.8,
    logo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg",
    photo:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    rank: 4,
    name: "BITS Pilani",
    score: 95.2,
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg",
    photo:
      "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=900&q=80",
  },
  {
    rank: 5,
    name: "NIT Trichy",
    score: 94.6,
    logo: "https://upload.wikimedia.org/wikipedia/en/8/80/NIT_Trichy_Logo.svg",
    photo:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
  },
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
              opacity: Math.random(),
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.6, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 14,
              repeat: Infinity,
              ease: "linear",
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
          India's most premium ranked colleges based on academics, placements &
          campus life.
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
                boxShadow: "0 40px 100px rgba(99,102,241,0.35)",
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
                  <img
                    src={college.logo}
                    alt=""
                    className="object-contain w-full h-full"
                  />
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

          {/* 👉 VIEW ALL CTA
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
          </motion.div> */}
        </motion.div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              navigate("/ranking");
            }}
            className="
      group
      inline-flex items-center gap-3
      px-8 py-3
      rounded-full
      bg-indigo-600
      text-white
      font-semibold
      transition-all duration-300
      hover:bg-indigo-700
      hover:scale-105
      shadow-lg shadow-indigo-300/40
    "
          >
            <span>View All Colleges</span>

            {/* Arrow */}
            <span
              className="
        flex items-center justify-center
        w-8 h-8
        rounded-full
        transition-all duration-300
        group-hover:bg-white/20
        group-hover:translate-x-1
              "
            >
              <ArrowRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
