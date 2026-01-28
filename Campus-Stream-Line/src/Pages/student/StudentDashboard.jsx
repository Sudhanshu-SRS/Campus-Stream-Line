import StatCard from "../../components/student/StatCard";
import ApplicationStatus from "../../components/student/ApplicationStatus";
import UpcomingEvents from "../../components/student/UpcomingEvents";
import {
  GraduationCap,
  Heart,
  FileText,
  Bell,
  ArrowRight,
  Send,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const stats = [
    {
      title: "My Profile",
      value: "",
      icon: <GraduationCap />,
      path: "/student/profile",
    },
    {
      title: "Apply Now",
      value: "",
      icon: <Send />,
      path: "/student/apply",
    },
    {
      title: "Applied Colleges",
      value: 4,
      icon: <FileText />,
      path: "/student/applications",
    },
    {
      title: "Saved Colleges",
      value: 7,
      icon: <Heart />,
      path: "/student/savedcolleges",
    },
  ];
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Welcome back, Student 👋
          </h1>
          <p className="text-slate-600 mt-1">
            Track your applications and explore opportunities
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              onClick={() => navigate(stat.path)}
              className="
            group relative cursor-pointer
            rounded-xl bg-white p-6
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:shadow-xl
            hover:bg-indigo-50
          "
            >
              {/* Arrow */}
              <div
                className="
              absolute top-4 right-4
              h-8 w-8 rounded-full
              flex items-center justify-center
              bg-indigo-100 text-indigo-600
              opacity-0 translate-x-2
              transition-all duration-300
              group-hover:opacity-100
              group-hover:translate-x-0
            "
              >
                <ArrowRight size={16} />
              </div>

              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="text-indigo-600 text-2xl">{stat.icon}</div>

                {/* Title + Value */}
                <div className="flex flex-row gap-3">
                  <span className="text-sm text-gray-700">{stat.title}</span>
                  <span className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ApplicationStatus />
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
