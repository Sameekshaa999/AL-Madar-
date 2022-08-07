import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import map from "../Zimages/index/qatarmap.png";

const Services = () => {
  return (
    <div className="2xl:max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-center items-center space-x-10 my-3 lg:my-10">
      <div className="serviceSection-gradient flex flex-col justify-center items-left h-1/2 lg:w-1/2 py-20 lg:py-40 px-2 pb-54 ">
        <Fade left cascade>
        <div className="flex-col text-mpurple text-center lg:text-right space-y-5 lg:space-y-12 relative font-montserrat ">
          <h2 className="text-2xl lg:text-4xl font-semibold text-white">
            Worried about <br /> managing your property?
          </h2>
          <h2 className="lg:text-2xl font-semibold text-white">
            Al-Madar is here to help!
          </h2>
          <p className="lg:mt-4 text-sm font-light lg:text-lg lg:leading-relaxed inline-block lg:ml-40 ml-0 2xl:ml-0 text-white">
            Al Madar Property Management Services encompass operation 
            management, maintenance, and general monitoring of the properties,
            all while assuring quality and transparency in all that is done.
          </p>
          <button >
          <Link
            to="/services"
            className="lg:mt-20 px-4 lg:px-6 py-3 text-mpurple font-semibold rounded-full lg:rounded-lg text-sm lg:text-xl bg-mblue hover:bg-white hover:text-mblue transition duration-300 ease-in out "
          >
            Explore Now!
          </Link>
          </button>
        </div></Fade>
       
      </div> 
      <div className="lg:w-1/2 flex justify-center items-center">
        <Zoom>
        <img src={map} alt="mv3" className="h-96 lg:h-auto" />
        </Zoom>
      </div>
    </div> 
  );
};

export default Services;
