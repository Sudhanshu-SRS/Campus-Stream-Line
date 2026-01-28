import React from "react";

const notifications = [
  "📢 Admissions open for 2026 batch",
  "🎓 Scholarship applications closing soon",
  "🏫 New colleges added to the platform",
  "📝 Entrance exam dates announced",
  "📊 College rankings updated",
  "🤝 Community discussion trending now",
];

const Notifications = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-indigo-600 text-white px-4 py-3 font-semibold">
        Notifications
      </div>

      {/* Scrolling Area */}
      <div className="relative h-48 overflow-hidden">
        <div className="vertical-scroll">
          {[...notifications, ...notifications].map((note, index) => (
            <div
              key={index}
              className="px-4 py-3 border-b text-sm text-gray-700 bg-white hover:bg-indigo-50 transition"
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
