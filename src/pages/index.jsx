import React from "react";
import CustomerReview from "../components/index/CustomerReview";
import Properties from "../components/index/Properties";
import Team from "../components/index/Team";
import Services from "../components/index/Services";
import MV from "../components/index/MV";
import AboutSection from "../components/index/AboutSection";
import Hero from "../components/index/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <MV />
      <Services />
      <Team />
      <Properties />
      <CustomerReview />
    </>
  );
};

export default Home;
