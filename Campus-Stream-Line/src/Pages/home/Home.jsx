import React from "react";
import Hero from "./Hero";
import Happenings from "./Happenings";
import CollegeRanking from "./CollegeRanking";
import Notifications from "./Notification";

const Home = () => {
  return (
    <div>
      <Hero />
      <CollegeRanking />
      <Happenings />
    </div>
  );
};

export default Home;
