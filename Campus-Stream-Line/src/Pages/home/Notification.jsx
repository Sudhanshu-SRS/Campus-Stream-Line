// import React from "react";

// const notifications = [
//   "📢 Admissions open for 2026 batch",
//   "🎓 Scholarship applications closing soon",
//   "🏫 New colleges added to the platform",
//   "📝 Entrance exam dates announced",
//   "📊 College rankings updated",
//   "🤝 Community discussion trending now",
// ];

// const Notifications = () => {
//   return (
//     <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
//       {/* Header */}
//       <div className="bg-indigo-600 text-white px-4 py-3 font-semibold">
//         Notifications
//       </div>

//       {/* Scrolling Area */}
//       <div className="relative h-48 overflow-hidden">
//         <div className="vertical-scroll">
//           {[...notifications, ...notifications].map((note, index) => (
//             <div
//               key={index}
//               className="px-4 py-3 border-b text-sm text-gray-700 bg-white hover:bg-indigo-50 transition"
//             >
//               {note}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Notifications;

import React, { useEffect, useState } from "react";

const notifications = [
  "🏫 New colleges added to the platform",
  "📝 Entrance exam dates announced",
  "📊 College rankings updated",
  "🔥 Community discussion trending now",
  "📣 Admissions open for 2026 batch",
  "🎓 Scholarship applications closing soon",
];

const scrollingNotifications = [...notifications, ...notifications];

const Notifications = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        id: Math.random(),
        top: Math.random() * 90,
        left: Math.random() * 90,
        size: Math.random() * 18 + 10,
      };

      setStars((prev) => [...prev.slice(-25), newStar]);
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border shadow-2xl bg-white/90 backdrop-blur-xl animate-panelEnter">
      {/* ⭐ REAL STAR PARTICLES */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="real-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            fontSize: `${star.size}px`,
          }}
        >
          ⭐
        </span>
      ))}

      {/* HEADER */}
      <div className="relative bg-indigo-600 text-white px-5 py-3 font-semibold text-sm flex items-center gap-2 animate-headerGlow">
        🔔 Live Notifications
        <span className="ml-auto w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
      </div>

      {/* SCROLL AREA */}
      <div className="relative h-60 overflow-hidden px-3 py-2">
        <div className="auto-scroll space-y-2">
          {scrollingNotifications.map((note, index) => (
            <div
              key={index}
              className="bg-white rounded-xl px-4 py-3 text-sm text-gray-800 shadow hover:shadow-md hover:bg-indigo-50 transition-all flex items-center gap-2 animate-itemFade"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              {note}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
