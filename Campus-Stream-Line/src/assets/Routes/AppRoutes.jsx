import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Auth/Login";
import Register from "../../Pages/Auth/Register";

import Home from "../../Pages/home/Home";
import Layout from "../../Layout/Layout";
import CollegeRanking from "../../Pages/CollegeRanking";
import CollegeDetails from "../../Pages/CollegeDetails";
import AllHappenings from "../../Pages/home/AllHappenings";

import CommunityHub from "../../components/community/CommunityHub";
import StudentDashboard from "../../Pages/student/StudentDashboard";
import CompareColleges from "../../Pages/student/CompareColleges";
import MyApplications from "../../Pages/student/MyApplications";
import RegisteredEvents from "../../Pages/student/RegisteredEvents";
import MyCommunity from "../../Pages/student/MyCommunity";

import Profile from "../../Pages/Profile";
import ProtectedRoute from "../../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/ranking" element={<CollegeRanking />} />
        <Route path="/college/:id" element={<CollegeDetails />} />
        <Route path="/happenings" element={<AllHappenings />} />

        {/* Auth */}
        <Route path="/login" element={<Login role="institute" />} />
        <Route path="/studentlogin" element={<Login role="student" />} />

        <Route path="/register" element={<Register role="student" />} />
        <Route
          path="/instituteregister"
          element={<Register role="institute" />}
        />

        {/* Protected */}
        <Route
          path="/communityhub"
          element={
            <ProtectedRoute>
              <CommunityHub />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Student Section */}
        <Route
          path="/studentdashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/student/compare" element={<CompareColleges />} />
        <Route path="/student/applications" element={<MyApplications />} />
        <Route path="/student/events" element={<RegisteredEvents />} />
        <Route path="/student/community" element={<MyCommunity />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
