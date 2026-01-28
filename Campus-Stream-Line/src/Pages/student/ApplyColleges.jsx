import { MapPin, Star, GraduationCap, CheckCircle } from "lucide-react";
import { useState } from "react";

const ApplyColleges = () => {
  const [colleges, setColleges] = useState([
    {
      id: 1,
      name: "Indian Institute of Technology, Bhubaneswar",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200",
      location: "Bhubaneswar, Odisha",
      rating: 4.8,
      courses: ["B.Tech", "M.Tech", "PhD"],
      applied: false,
    },
    {
      id: 2,
      name: "National Institute of Technology, Rourkela",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200",
      location: "Rourkela, Odisha",
      rating: 4.6,
      courses: ["B.Tech", "MBA", "M.Tech"],
      applied: false,
    },
    {
      id: 3,
      name: "KIIT University",
      image:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1200",
      location: "Bhubaneswar, Odisha",
      rating: 4.3,
      courses: ["B.Tech", "BCA", "MBA"],
      applied: false,
    },
  ]);

  const handleApply = (id) => {
    setColleges((prev) =>
      prev.map((college) =>
        college.id === id ? { ...college, applied: true } : college,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Apply to Colleges</h1>
        <p className="text-slate-600 mt-2">
          Apply to multiple colleges with a single profile
        </p>
      </div>

      {/* College Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
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

              {/* Courses */}
              <div className="flex flex-wrap gap-2">
                {college.courses.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>

              {/* Apply Button */}
              <div className="pt-4">
                {college.applied ? (
                  <button
                    disabled
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium cursor-not-allowed"
                  >
                    <CheckCircle size={18} />
                    Applied
                  </button>
                ) : (
                  <button
                    onClick={() => handleApply(college.id)}
                    className="w-full px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                  >
                    Apply Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplyColleges;
