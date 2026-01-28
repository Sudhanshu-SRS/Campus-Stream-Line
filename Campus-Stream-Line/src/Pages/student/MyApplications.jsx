import { useState } from "react";
import { Search, MapPin, BookOpen } from "lucide-react";

const MyApplications = () => {
  // 🔹 Mock data (replace with API later)
  const colleges = [
    { id: 1, name: "IIT Delhi", city: "Delhi", course: "B.Tech" },
    { id: 2, name: "NIT Trichy", city: "Trichy", course: "B.Tech" },
    { id: 3, name: "BITS Pilani", city: "Pilani", course: "B.Tech" },
    { id: 4, name: "DU North Campus", city: "Delhi", course: "B.Sc" },
  ];

  const ongoingApplications = [
    { college: "IIT Delhi", status: "Under Review" },
    { college: "BITS Pilani", status: "Payment Pending" },
  ];

  const rejectedApplications = [{ college: "NIT Trichy", status: "Rejected" }];

  // 🔹 Filters
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");

  const filteredColleges = colleges.filter((c) => {
    return (
      c.name.toLowerCase().includes(search.toLowerCase()) &&
      (city === "" || c.city === city) &&
      (course === "" || c.course === course)
    );
  });

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      {/* 🔷 Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">My Applications</h1>
        <p className="text-gray-500 mt-1">
          Apply, track, and manage your college applications
        </p>
      </div>

      {/* 🔷 Search & Filters */}
      <div className="bg-white rounded-xl p-4 shadow flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 border rounded-lg px-3 w-full">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search colleges..."
            className="w-full py-2 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* City Filter */}
        <div className="flex items-center gap-2 border rounded-lg px-3">
          <MapPin size={18} className="text-gray-400" />
          <select
            className="py-2 outline-none bg-transparent"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">All Cities</option>
            <option value="Delhi">Delhi</option>
            <option value="Trichy">Trichy</option>
            <option value="Pilani">Pilani</option>
          </select>
        </div>

        {/* Course Filter */}
        <div className="flex items-center gap-2 border rounded-lg px-3">
          <BookOpen size={18} className="text-gray-400" />
          <select
            className="py-2 outline-none bg-transparent"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">All Courses</option>
            <option value="B.Tech">B.Tech</option>
            <option value="B.Sc">B.Sc</option>
          </select>
        </div>
      </div>

      {/* 🔷 Available Colleges */}
      {/* <section>
        <h2 className="text-xl font-semibold mb-4">Available Colleges</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map((college) => (
            <div
              key={college.id}
              className="bg-white rounded-xl p-5 shadow hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg text-gray-800">
                {college.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {college.city} • {college.course}
              </p>

              <button
                className="
                  mt-4 w-full py-2 rounded-lg
                  bg-indigo-600 text-white font-medium
                  hover:bg-indigo-700 transition
                "
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section> */}

      {/* 🔷 Ongoing Applications */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Ongoing Applications</h2>

        <div className="space-y-3">
          {ongoingApplications.map((app, i) => (
            <div
              key={i}
              className="
                flex justify-between items-center
                bg-white p-4 rounded-xl shadow
              "
            >
              <span className="font-medium">{app.college}</span>
              <span className="text-sm px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 Rejected Applications */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-red-600">
          Rejected Applications
        </h2>

        <div className="space-y-3">
          {rejectedApplications.map((app, i) => (
            <div
              key={i}
              className="
                flex justify-between items-center
                bg-white p-4 rounded-xl shadow
                border-l-4 border-red-500
              "
            >
              <span className="font-medium">{app.college}</span>
              <span className="text-sm text-red-600 font-semibold">
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyApplications;
