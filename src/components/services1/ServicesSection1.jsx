import React from "react";
import services1_bg from "../Zimages/services1/services1_bg.jpg";

const ServicesSection1 = () => {
  return (
    <div className="pt-24 w-full flex flex-col justify-center font-montserrat text-mpurple">
      <img src={services1_bg} alt="services1_bg" className="h-full top-6.5" />
      <div className="services-bg absolute flex flex-col justify-between items-start space-y-2 md:space-y-4 lg:space-y-8  py-10 px-5 lg:py-20 lg:px-12 ml-32 ">
        <h1 className="font-semibold text-lg md:text-2xl lg:text-3xl border-b-2 border-mpurple">
          Our Services
        </h1>
        <h1 className="font-semibold text:xl md:text-3xl lg:text-5xl">
          People are <br /> our priority
        </h1>
        <button className="bg-mpurple md:py-3 md:px-4 text-white font-light text-sm lg:text-base">
          call : +974 44675405
        </button>
      </div>
    </div>
  );
};

export default ServicesSection1;
