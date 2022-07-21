import React from "react";
import services1_FM from "../Zimages/services1/services1_FM.jpg";
import FM_icon from "../Zimages/services1/FM_icon.jpg";
import check from "../Zimages/services1/check_icon.jpg";
import { Link } from "react-router-dom";

const FM = () => {
  return (
    <div className="flex flex-col lg:flex-row font-montserrat text-mpurple px-20 pt-10 lg:space-x-20">
      <div className="flex-col lg:w-1/2 ">
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-x-6 items-center">
          <img src={FM_icon} alt="icon" className="h-20 md:h-32" />
          <h1 className="mt-5 font-semibold text-xl md:text-3xl text-center">
            Facility Management
          </h1>
        </div>
        <div className="md:flex-col inline-block">
          <p className="mt-5 mb-0 font-light text-lg text-justify ">
            Our service guarantees that the property is in top shape at all
            times. The in-house buying department will guarantee that the best
            rates and businesses are used for the work, while also maximising
            the speed with which the work is finished in order to maximise
            rental income, outstanding property condition, and tenant happiness.
            Among the services provided include, but are not limited to:
          </p>
          <img
            src={services1_FM}
            alt="tenancy Management"
            className="my-7 h-42 md:78"
          />
        </div>
      </div>
      <div className="flex flex-col  space-y-6 sm:space-x-6 items-center lg:w-1/2">
        <button className="lg:ml-60 px-16 py-4 bg-mpurple lg:w-96 text-white font-montserrat font-light text-lg">
          Make An Appointment
        </button>
        <div className="flex flex-col justify-center lg:ml-20 my-10">
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-xl font-normal">Administrative Services</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-xl font-normal">Regular Maintenence</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-xl font-normal">Utility Bills</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-xl font-normal">Control of Maintence Costs</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-xl font-normal">Monthly Reports</p>
          </div>
        </div>
        <Link
          to="/services2"
          className=" lg:float-right px-10 py-4 bg-mpurple lg:w-1/3  text-white font-montserrat font-light text-lg text-center"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default FM;
