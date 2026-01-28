import { MapPin, Star, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SavedColleges = () => {
  const navigate = useNavigate();

  // 🔹 Mock saved colleges (replace with API later)
  const [savedColleges, setSavedColleges] = useState([
    {
      id: 1,
      name: "Indian Institute of Technology, Bhubaneswar",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200",
      location: "Bhubaneswar, Odisha",
      rating: 4.8,
      streams: ["B.Tech", "M.Tech", "PhD"],
    },
    {
      id: 2,
      name: "National Institute of Technology, Rourkela",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200",
      location: "Rourkela, Odisha",
      rating: 4.6,
      streams: ["B.Tech", "MBA", "M.Tech"],
    },
  ]);

  const removeCollege = (id) => {
    setSavedColleges((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Saved Colleges</h1>
        <p className="text-slate-600 mt-2">
          Colleges you bookmarked for future reference
        </p>
      </div>

      {/* Empty State */}
      {savedColleges.length === 0 && (
        <div className="text-center text-slate-500 mt-20">
          No colleges saved yet
        </div>
      )}

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedColleges.map((college) => (
          <div
            key={college.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            {/* Image */}
            <img
              src={college.image}
              alt={college.name}
              className="h-44 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5 space-y-3">
              <h2 className="text-lg font-semibold text-slate-800 line-clamp-2">
                {college.name}
              </h2>

              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <MapPin size={14} />
                {college.location}
              </div>

              <div className="flex items-center gap-2">
                <Star size={16} className="text-yellow-500" />
                <span className="text-sm text-slate-700">
                  {college.rating} / 5
                </span>
              </div>

              {/* Streams */}
              <div className="flex flex-wrap gap-2">
                {college.streams.map((stream, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-full"
                  >
                    {stream}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-3">
                <button
                  onClick={() =>
                    navigate(`/college/${college.id}`, {
                      state: college,
                    })
                  }
                  className="text-indigo-600 text-sm font-medium hover:underline"
                >
                  View Details
                </button>

                <button
                  onClick={() => removeCollege(college.id)}
                  className="text-red-500 hover:text-red-600"
                  title="Remove from saved"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedColleges;
