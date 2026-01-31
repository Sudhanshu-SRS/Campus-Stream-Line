import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

import Home from "../Pages/home/Home";
import Layout from "../Layout/Layout";
import CollegeRanking from "../Pages/CollegeRanking";
import CollegeDetails from "../Pages/CollegeDetails";
import AllHappenings from "../Pages/home/AllHappenings";

import CommunityHub from "../components/community/CommunityHub";
import StudentDashboard from "../Pages/student/StudentDashboard";
import CompareColleges from "../Pages/student/CompareColleges";
import MyApplications from "../Pages/student/MyApplications";
import RegisteredEvents from "../Pages/student/RegisteredEvents";
import MyCommunity from "../Pages/student/MyCommunity";

import Profile from "../Pages/Profile";
import ProtectedRoute from "../components/ProtectedRoute";
import SavedColleges from "../Pages/student/SavedColleges";
import ApplyColleges from "../Pages/student/ApplyColleges";
import InstituteRoutes from "./InsituteRoute";

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
       <Route path="/login" element={<Login role="institute_admin" />} />

        <Route path="/studentlogin" element={<Login role="student" />} />

        <Route path="/register" element={<Register role="student" />} />
        <Route
          path="/instituteregister"
          element={<Register role="institute_admin" />}
        />

        <Route path="/communityhub" element={<CommunityHub />} />
        {/* Protected */}
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
  path="/student/dashboard"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <StudentDashboard />
    </ProtectedRoute>
  }
/>


        <Route path="/student/compare" element={<CompareColleges />} />
        <Route path="/student/applications" element={<MyApplications />} />
        <Route path="/student/events" element={<RegisteredEvents />} />
        <Route path="/student/community" element={<MyCommunity />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/savedcolleges" element={<SavedColleges />} />
        <Route path="/student/apply" element={<ApplyColleges />} />

        {/*Insitute */}
       <Route
  path="/institute/*"
  element={
    <ProtectedRoute allowedRoles={["institute_admin"]}>
      <InstituteRoutes />
    </ProtectedRoute>
  }
/>

      </Route>
    </Routes>
  );
};

export default AppRoutes;
