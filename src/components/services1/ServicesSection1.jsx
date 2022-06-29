import React from "react";
import services1_bg from "../Zimages/services1_bg.svg";
const ServicesSection1 = () => {
  return (
    <div className="pt-24 w-full flex flex-col justify-center items-start">
      <img src={services1_bg} alt="services1_bg" className="h-full top-6.5" />
      <div className='flex-col justify-between services-bg ml-14 mt-3 py-20 px-8 absolute text-4xl font-Montserrat text-mpurple flex-col justify-center items-start'>
        <h2 className='font-semibold text-3xl'>
          Our Services
        </h2>
        <h1 className="font-semibold text-6xl">People are <br/> our priority </h1>
        <button className="px-4 py-4 bg-mpurple text-white font-Montserrat font-light text-lg">call : +974 44675405</button>
      </div>
    </div>
  );
};

export default ServicesSection1;
