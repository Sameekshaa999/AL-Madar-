import React from "react";
import services1_FM from "../Zimages/services1_FM.svg";
import FM_icon from "../Zimages/FM_icon.svg";
import check from "../Zimages/check_icon.svg";
import { Link } from "react-router-dom";

const FM = () => {
  return (
    <div className="flex font-Montserrat text-mpurple px-20 pt-10 space-x-20">
      <div className="flex-col w-1/2 ">
        <div className=" flex">
          <img src={FM_icon} alt="icon" className="h-32" />
          <h1 className="pt-10 pl-5 font-semibold text-3xl align-middle">
            Facility <br /> Management
          </h1>
        </div>
        <div className="flex-col inline-block">
          <p className="mt-5 font-light text-lg text-justify ">
            Our service guarantees that the property is in top shape at
            all times. The in-house buying department will guarantee that
            the best rates and businesses are used for the work, while
            also maximising the speed with which the work is finished in
            order to maximise rental income, outstanding property
            condition, and tenant happiness.
            Among the services provided include, but are not limited to:
          </p>
          <img
            src={services1_FM}
            alt="Facility Management"
            className="h-50vh"
          />
        </div>
      </div>
      <div className="w-1/2">
        <button className="ml-60 px-4 py-4 bg-mpurple text-white w-96 font-Montserrat font-light text-lg">
          Make An Appointment
        </button>
        <div className="flex flex-col justify-center ml-20 my-16 ">
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-xl font-normal ">Administrative Services</p>
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
        <div className="">
        <Link
          to="/services2"
          className="float-right px-4 py-4 bg-mpurple w-1/3 justify-end text-white font-Montserrat font-light text-lg text-center"
        >
          More Info
        </Link>
        </div>
      </div>
    </div>
  );
};

export default FM;
