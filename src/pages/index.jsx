import React from "react";
import CustomerReview from "../components/index/CustomerReview";
import Properties from "../components/index/Properties";
import Team from "../components/index/Team";
import Services from "../components/index/Services";
import MV from "../components/index/test";
import AboutSection from "../components/index/test2";
import Hero from "../components/index/Hero";

const Home = () => {
  return (
    <div className="snap-y snap-mandatory h-screen scrolling">
      <Hero />
      <AboutSection />
      <MV />
      <Services />
      <Team />
      <Properties />
      <CustomerReview />
    </div>
  );
};

export default Home;
