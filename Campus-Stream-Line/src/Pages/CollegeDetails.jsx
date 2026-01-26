import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Star, GraduationCap, Award, ArrowLeft } from "lucide-react";

const CollegeDetails = () => {
  const { state: college } = useLocation();
  const navigate = useNavigate();

  if (!college) {
    return (
      <div className="p-10 text-center">
        <p className="text-lg">College data not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-indigo-600 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 mb-6"
        >
          <ArrowLeft size={18} />
          Back to Rankings
        </button>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-800">
                {college.name}
              </h1>

              <div className="flex flex-wrap gap-4 mt-2 text-slate-600">
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  {college.location}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-500" />
                  {college.rating}
                </span>
                <span className="font-semibold text-indigo-600">
                  Rank #{college.rank}
                </span>
              </div>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {college.description}
              </p>
            </div>
          </div>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {college.photos.map((photo, idx) => (
            <img
              key={idx}
              src={photo}
              alt="College"
              className="h-56 w-full object-cover rounded-xl hover:scale-105 transition"
            />
          ))}
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Academics */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-3">Academics</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <GraduationCap size={16} />
                Streams: {college.streams.join(", ")}
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} />
                Avg Package: {college.avgPackage}
              </div>
            </div>
          </div>

          {/* Fees */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-3">Fees</h3>
            <p className="text-slate-600">{college.fees} per year</p>
          </div>

          {/* Facilities */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-3">Facilities</h3>
            <div className="flex flex-wrap gap-2">
              {college.facilities.map((f, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-full"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-lg">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
