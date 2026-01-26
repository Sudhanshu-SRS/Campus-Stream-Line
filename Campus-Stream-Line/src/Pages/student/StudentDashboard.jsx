import StatCard from "../../components/student/StatCard";
import ApplicationStatus from "../../components/student/ApplicationStatus";
import SavedColleges from "../../components/student/SavedColleges";
import UpcomingEvents from "../../components/student/UpcomingEvents";
import { GraduationCap, Heart, FileText, Bell } from "lucide-react";

const StudentDashboard = () => {
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
          <StatCard icon={<FileText />} title="Applied Colleges" value="4" />
          <StatCard icon={<Heart />} title="Saved Colleges" value="7" />
          <StatCard
            icon={<GraduationCap />}
            title="Ongoing Applications"
            value="2"
          />
          <StatCard icon={<Bell />} title="Notifications" value="3" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ApplicationStatus />
          <SavedColleges />
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
