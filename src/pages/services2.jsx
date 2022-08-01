import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AllServices from "../components/services2/allservices";

const Services2 = () => {
  return (
    <div className="snap-y snap-mandatory h-screen scrolling">
      <Navbar />
      <AllServices />
      <Footer />
    </div>
  );
};

export default Services2;
