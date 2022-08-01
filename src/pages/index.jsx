import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
      <Navbar />
      <Hero />
      <AboutSection />
      <MV />
      <Services />
      <Team />
      <Properties />
      <CustomerReview />
      <Footer />
    </div>
  );
};

export default Home;
