import { MapPin, Star, Award, GraduationCap } from "lucide-react";
import { colleges } from "../Data/mockColleges";
import { useNavigate } from "react-router-dom";

const CollegeRanking = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-slate-800">
          Top Colleges in India 2026
        </h1>
        <p className="text-slate-600 mt-2">
          Ranked by academics, placements, facilities & student reviews
        </p>
      </div>

      {/* College Cards */}
      <div className="max-w-6xl mx-auto space-y-6">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-200"
          >
            <div className="p-6 flex flex-col md:flex-row gap-6">
              {/* Rank */}
              <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-indigo-600 text-white text-2xl font-bold">
                #{college.rank}
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-slate-800">
                  {college.name}
                </h2>

                <div className="flex flex-wrap items-center gap-4 mt-2 text-slate-600">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {college.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-500" />
                    {college.rating}
                  </span>
                </div>

                {/* Streams */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {college.streams.map((stream, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full"
                    >
                      {stream}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 text-sm">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    Fees: {college.fees}
                  </div>

                  <div className="flex items-center gap-2">
                    <Award size={16} />
                    Avg Package: {college.avgPackage}
                  </div>
                </div>

                {/* Facilities */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {college.facilities.map((facility, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-slate-100 rounded-md"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 justify-center">
                <button
                  onClick={() =>
                    navigate(`/college/${college.id}`, {
                      state: college,
                    })
                  }
                  className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  View Details
                </button>

                <button className="px-5 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
                  Compare
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeRanking;
