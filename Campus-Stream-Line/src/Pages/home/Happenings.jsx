import {
  MapPin,
  Phone,
  Mail,
  CalendarDays,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ===================== MOCK EVENTS ===================== */

const mockEvents = [
  {
    id: 1,
    badge: "Admissions Open",
    title: "Centralized Admission Drive 2026",
    description:
      "The centralized admission process for the academic year 2026 has officially begun. Students can now apply to multiple institutes through a single platform.",
    location: "Bhubaneswar, Odisha",
    contact: {
      phone: "+91 98765 43210",
      email: "admissions@casportal.in",
    },
    date: "2026-03-15",
  },
  {
    id: 2,
    badge: "Counselling Update",
    title: "Phase-1 Counselling Schedule Released",
    description:
      "Students are requested to check their counselling slots and prepare required documents.",
    location: "Online",
    contact: {
      phone: "+91 91234 56789",
      email: "support@casportal.in",
    },
    date: "2026-03-22",
  },
];

// Duplicate list for smooth scroll effect
const scrollingEvents = [...mockEvents, ...mockEvents];

const Happenings = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 blur-3xl rounded-full animate-floatSlow"></div>

      <div
        className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-pink-300/30 blur-3xl rounded-full animate-floatSlow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-100 text-indigo-600 font-semibold shadow-sm">
            <Sparkles size={18} />
            Latest Happenings
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-6 tracking-tight">
            Stay Updated with{" "}
            <span className="text-indigo-600">Live Events & Opportunities</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Admissions, counselling updates, scholarships, and campus events — all in one place.
          </p>
        </div>

        {/* EVENTS LIST */}
        <div className="space-y-10">
          {scrollingEvents.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => navigate("/happenings")}
            className="group inline-flex items-center gap-3 px-10 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-xl hover:bg-indigo-700 hover:scale-105 transition"
          >
            View All Happenings
            <ArrowRight className="group-hover:translate-x-2 transition" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Happenings;

/* ===================== EVENT CARD ===================== */

const EventCard = ({ event, index }) => {
  return (
    <div
      className="relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition hover:-translate-y-2 animate-fadeInUp"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Badge */}
      <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold shadow">
        {event.badge}
      </span>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
        {event.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-gray-600 leading-relaxed">
        {event.description}
      </p>

      {/* Info Grid */}
      <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
        <InfoItem icon={<MapPin size={16} />} text={event.location} />
        <InfoItem icon={<CalendarDays size={16} />} text={`Event Date: ${event.date}`} />
        <InfoItem icon={<Phone size={16} />} text={event.contact.phone} />
        <InfoItem icon={<Mail size={16} />} text={event.contact.email} />
      </div>
    </div>
  );
};

/* ===================== INFO ITEM ===================== */

const InfoItem = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    <span className="text-indigo-600">{icon}</span>
    <span>{text}</span>
  </div>
);
