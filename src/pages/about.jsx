import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/about/AboutUs";
import OurTeam from "../components/about/OurTeam";
import AboutMV from "../components/about/AboutMV";


const About = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <OurTeam />
      <AboutMV />
      <Footer />
    </div>
  );
};

export default About;
