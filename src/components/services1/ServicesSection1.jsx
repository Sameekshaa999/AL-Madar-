import React from "react";
import { Fade } from "react-reveal";
import services1_bg from "../Zimages/services1/services1_bg.jpg";

const ServicesSection1 = () => {
  return (
    <div className="overflow-x-hidden 2xl:max-w-[1440px] 2xl:mx-auto pt-24 relative w-full flex flex-col justify-center font-montserrat text-mpurple h-1/2 lg:h-auto">
      <img src={services1_bg} alt="services1_bg" className="top-6.5" />
      <Fade ><div className="services-bg absolute flex flex-col justify-between items-start space-y-2 md:space-y-4 lg:space-y-8 2xl:space-y-16 py-12 px-5 lg:py-20 2xl:py-40 lg:px-12 2xl:px-20 ml-20 lg:ml-32 ">
        <h1 className="font-semibold text-lg md:text-2xl lg:text-3xl border-b-2 border-mpurple">
          Our Services
        </h1>
        <h1 className="font-semibold text:xl md:text-3xl lg:text-5xl">
          People are <br /> our priority
        </h1>
        <button className="bg-mpurple py-1 px-2 md:py-3 md:px-4 text-white font-light text-xs lg:text-base">
          call : +974 44675405
        </button>
      </div></Fade>
    </div>
  );
};

export default ServicesSection1;
