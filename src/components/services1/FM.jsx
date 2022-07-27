import React, { useState } from "react";
import services1_FM from "../Zimages/services1/services1_FM.jpg";
import FM_icon from "../Zimages/services1/FM_icon.jpg";
import check from "../Zimages/services1/check_icon.png";
import { Link } from "react-router-dom";
import PopUp from "../PopUp";

const FM = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
<div className="flex flex-col lg:flex-row font-montserrat text-mpurple px-20 pt-10">
      <div className="flex-col lg:w-1/2">
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-x-6 items-center">
          <img src={FM_icon} alt="icon" className="h-20 lg:h-32" />
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
          <div className="flex justify-center items-center">
          <img
            src={services1_FM}
            alt="Facility Management"
            className="my-7  h-40 md:h-60 lg:h-80"
          />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-5 lg:space-y-12 justify-center items-left lg:w-1/2">
      <button onClick={() => setButtonPopup(true)} className="lg:ml-60 px-16 py-4 bg-mpurple lg:w-96 text-white font-montserrat font-light text-base lg:text-lg">
          Make An Appointment
        </button>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        </PopUp>
        <div className="flex flex-col justify-center lg:w-[30rem] my-1">
          <div className="flex space-x-2 py-7  border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-base lg:text-xl font-normal">Administrative Services</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-base lg:text-xl font-normal">Regular Maintenence</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-base lg:text-xl font-normal">Utility Bills</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-base lg:text-xl font-normal">Control of Maintence Costs</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-base lg:text-xl font-normal">Monthly Reports</p>
          </div>
        </div>
        <Link
          to="/services2"
          className=" lg:float-right px-10 py-4 bg-mpurple lg:w-1/3  text-white font-montserrat font-light text-base lg:text-lg text-center"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default FM;
