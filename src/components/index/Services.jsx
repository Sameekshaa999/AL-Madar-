import React from "react";
import { Link } from "react-router-dom";
import map from "../Zimages/index/qatarmap.png";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row my-10 h-1/2 ">
      <div className="serviceSection-gradient flex flex-col justify-center items-left  h-1/2 w-1/2 py-40 px-2 pb-54 float-left">
        <div className="flex-col text-mpurple text-right space-y-12 relative font-montserrat ">
          <h2 className="lg:text-4xl font-semibold text-white">
            Worried about <br /> managing your property?
          </h2>
          <h2 className="lg:text-2xl font-semibold text-white">
            Al-Madar is here to help!
          </h2>
          <p className="lg:mt-4 lg:text-lg lg:leading-relaxed text-white">
            Al Madar Property Management Services encompass operation
            management, maintenance, and general monitoring of the properties,
            all while assuring quality and transparency in all that is done.
          </p>
          <button>
          <Link
            to="/services"
            className="mt-20 px-4 md:px-6 py-3 text-mpurple font-semibold rounded-full md:rounded-lg text-sm md:text-xl bg-mblue hover:bg-white hover:text-mblue transition duration-300 ease-in out "
          >
            Explore Now!
          </Link>
          </button>
        </div>
      </div>
      <div className="w-1/2 float-right flex justify-center items-center">
        <img src={map} alt="mv3" className="" />
      </div>
    </div> 
  );
};

export default Services;
