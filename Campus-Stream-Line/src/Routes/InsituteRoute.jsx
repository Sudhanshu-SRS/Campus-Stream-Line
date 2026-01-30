import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "../institute/components/layout/DashboardLayout";

import Dashboard from "../institute/pages/Dashboard";
import InstituteProfile from "../institute/pages/InstituteProfile";
import Courses from "../institute/pages/Courses";
import CourseForm from "../institute/pages/CourseForm";
import Applications from "../institute/pages/Applications";
import ApplicationDetail from "../institute/pages/ApplicationDetail";
import Documents from "../institute/pages/Documents";
import Announcements from "../institute/pages/Announcements";
import AnnouncementForm from "../institute/pages/AnnouncementForm";
import Interviews from "../institute/pages/Interviews";
import ScheduleInterview from "../institute/pages/ScheduleInterview";
import Reports from "../institute/pages/Reports";
import Settings from "../institute/pages/Settings";
import NotFound from "../institute/pages/NotFound";

const InstituteRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<InstituteProfile />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/new" element={<CourseForm />} />
        <Route path="courses/edit/:id" element={<CourseForm />} />
        <Route path="applications" element={<Applications />} />
        <Route path="applications/:id" element={<ApplicationDetail />} />
        <Route path="documents" element={<Documents />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="announcements/new" element={<AnnouncementForm />} />
        <Route path="announcements/edit/:id" element={<AnnouncementForm />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="interviews/schedule" element={<ScheduleInterview />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default InstituteRoutes;
