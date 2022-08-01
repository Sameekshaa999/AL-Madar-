import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FM from "../components/services1/FM";
import ServicesExtra from "../components/services1/ServicesExtra";
import ServicesSection1 from "../components/services1/ServicesSection1";
import TM from "../components/services1/TM";

const Services = () => {
  return (
    <div className="snap-y snap-mandatory h-screen scrolling">
      <Navbar />
      <ServicesSection1 />
      <TM />
      <FM />
      <ServicesExtra/>
      <Footer />
      
    </div>
  );
};

export default Services;
