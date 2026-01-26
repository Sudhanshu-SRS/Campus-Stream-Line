import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Auth/Login";
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

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        {/* Institute Login */}
        <Route path="/login" element={<Login role="institute" />} />

        {/* Student Login */}
        <Route path="/studentlogin" element={<Login role="student" />} />

        {/* College Ranking  */}
        <Route path="/ranking" element={<CollegeRanking />} />
        <Route path="/college/:id" element={<CollegeDetails />} />

        {/* Happenigs Page  */}
        <Route path="/happenings" element={<AllHappenings />} />

        {/* Community Hub */}
        <Route path="/communityhub" element={<CommunityHub />} />

        {/*Student Section */}
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/student/compare" element={<CompareColleges />} />
        <Route path="/student/applications" element={<MyApplications />} />
        <Route path="/student/events" element={<RegisteredEvents />} />
        <Route path="/student/community" element={<MyCommunity />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
