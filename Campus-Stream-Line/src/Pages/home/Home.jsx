import React from "react";
import Hero from "./Hero";
import Happenings from "./Happenings";
import CollegeRanking from "./CollegeRanking";
import FloatingChatbot from "../../ChatBot/FloatingChatbot";

const Home = () => {
  return (
    <div>
      <Hero />
      <FloatingChatbot />
      <CollegeRanking />
      <Happenings />
    </div>
  );
};

export default Home;
