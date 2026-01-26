import {
  MapPin,
  Phone,
  Mail,
  CalendarDays,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* =======================
   MOCK DATA (API READY)
======================= */
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

// duplicate for infinite scroll illusion
const scrollingEvents = [...mockEvents, ...mockEvents];

const Happenings = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="
  inline-flex items-center gap-3 px-6 py-2 rounded-full
  bg-indigo-100 text-indigo-600 text-2xl font-semibold
  animate-pulse
  transform-gpu
  transition
  hover:scale-105
  shadow-md shadow-indigo-200/60
"
          >
            <Sparkles size={28} />
            Happening
          </span>

          <h2 className="text-xl md:text-3xl text-gray-800 mt-4">
            Stay updated with the latest{" "}
            <span className="text-blue-400">events and opportunities</span>
          </h2>
        </div>

        {/* Auto Scroll Container */}
        <div className="relative h-130 overflow-hidden">
          <div className="auto-vertical-scroll space-y-8">
            {scrollingEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              navigate("/happenings");
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
            <span>View All Happenings</span>

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
    </section>
  );
};

export default Happenings;

/* =======================
   EVENT CARD
======================= */
const EventCard = ({ event }) => {
  return (
    <div className="relative bg-linear-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
      <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-600 text-white text-sm font-semibold">
        {event.badge}
      </span>

      <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>

      <p className="mt-4 text-gray-600 leading-relaxed">{event.description}</p>

      <div className="mt-6 space-y-3 text-sm text-gray-700">
        <InfoItem icon={<MapPin size={16} />} text={event.location} />
        <InfoItem
          icon={<CalendarDays size={16} />}
          text={`Event Date: ${event.date}`}
        />
        <InfoItem icon={<Phone size={16} />} text={event.contact.phone} />
        <InfoItem icon={<Mail size={16} />} text={event.contact.email} />
      </div>
    </div>
  );
};

/* =======================
   INFO ITEM
======================= */
const InfoItem = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    <span className="text-indigo-600">{icon}</span>
    <span>{text}</span>
  </div>
);
