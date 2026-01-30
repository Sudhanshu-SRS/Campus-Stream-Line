import { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  BadgeCheck,
  XCircle,
  Search,
} from "lucide-react";
import { events as mockEvents } from "../../Data/mockEvents";

const AllHappenings = () => {
  const [search, setSearch] = useState("");

  // 🔍 Filter logic
  const filteredEvents = mockEvents.filter((event) => {
    const query = search.toLowerCase();

    return (
      event.title.toLowerCase().includes(query) ||
      event.college.toLowerCase().includes(query) ||
      event.type.toLowerCase().includes(query) ||
      event.tags.join(" ").toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          College Happenings & Events
        </h1>
        <p className="text-slate-600 mt-2">
          Search and explore workshops, fests, webinars, and campus activities
        </p>
      </div>

      {/* Search bar */}

      <div className="max-w-6xl mx-auto mb-10">
        <div className="relative max-w-md">
          {/* Search Icon */}
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          {/* Input */}
          <input
            type="text"
            placeholder="Search by event, college, type, or tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-12 py-3 rounded-full border border-slate-300
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          />

          {/* Clear Button */}
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2
                   text-slate-400 hover:text-red-600
                   transition"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition border border-slate-200 overflow-hidden"
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="h-44 w-full object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col h-full">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit">
                  {event.type}
                </span>

                <h2 className="text-lg font-semibold text-slate-800 mt-3">
                  {event.title}
                </h2>

                <p className="text-sm text-slate-600 mt-1">{event.college}</p>

                <div className="space-y-2 mt-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {event.location} ({event.mode})
                  </div>
                </div>

                <p className="text-sm text-slate-600 mt-4 line-clamp-3">
                  {event.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {event.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-slate-100 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-5 flex items-center justify-between">
                  {event.registrationOpen ? (
                    <span className="flex items-center gap-1 text-green-600 text-sm">
                      <BadgeCheck size={16} />
                      Registration Open
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-red-500 text-sm">
                      <XCircle size={16} />
                      Closed
                    </span>
                  )}

                  <button className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-slate-500 mt-20">
            No events found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default AllHappenings;


