import React from "react";
import AboutUs from "../components/about/AboutUs";
import OurTeam from "../components/about/OurTeam";
import AboutMV from "../components/about/AboutMV";

const About = () => {
  return (
    <div className="snap-y snap-mandatory h-screen scrolling">
      <AboutUs />
      <OurTeam />
      <AboutMV />
    </div>
  );
};

export default About;
