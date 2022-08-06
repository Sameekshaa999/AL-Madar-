import React, { useState } from "react";
import services1_FM from "../Zimages/services1/services1_FM.jpg";
import FM_icon from "../Zimages/services1/FM_icon.jpg";
import check from "../Zimages/services1/check_icon.png";
import { Link } from "react-router-dom";
import PopUp from "../PopUp";
import { Fade, Slide } from "react-reveal";

const FM = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row font-montserrat lg:space-x-32 text-mpurple mx-20 lg:mx-40">
      <div className="flex-col">
        <Fade left><div className="flex flex-col sm:flex-row space-y-6 sm:space-x-6 items-center">
          <img src={FM_icon} alt="icon" className="h-20" />
          <h1 className="mt-5 font-semibold text-xl md:text-3xl  text-center">
            Facility Management
          </h1>
        </div></Fade>
        <div className="md:flex-col inline-block">
         <Fade left> <p className="mt-5 mb-0 font-light text-sm lg:text-base text-justify ">
            Our service guarantees that the property is in top shape at all
            times. The in-house buying department will guarantee that the best
            rates and businesses are used for the work, while also maximising
            the speed with which the work is finished in order to maximise
            rental income, outstanding property condition, and tenant happiness.
            Among the services provided include, but are not limited to:
          </p></Fade>
          <Fade bottom><div className="flex justify-center items-center">
            <img
              src={services1_FM}
              alt="Facility Management"
              className="my-7 lg:w-full h-40 md:h-60 lg:h-72"
            />
          </div></Fade>
        </div>
      </div>
      <div className="flex flex-col space-y-10 justify-center items-center lg:w-1/3">
        <button
          onClick={() => setButtonPopup(true)}
          className="px-10 py-3 bg-mpurple text-white font-montserrat font-light text-sm lg:text-base"
        >
          Make An Appointment
        </button>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp>
        <Slide right cascade>
        <div className="flex flex-col justify-center w-96 ">
          <div className="flex space-x-2 pb-5  border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-sm lg:text-base font-normal">
              Administrative Services
            </p>
          </div>
          <div className="flex space-x-2 py-5 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-sm lg:text-base font-normal">
              Regular Maintenence
            </p>
          </div>
          <div className="flex space-x-2 py-5 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-sm lg:text-base font-normal">Utility Bills</p>
          </div>
          <div className="flex space-x-2 py-5 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-sm lg:text-base font-normal">
              Control of Maintence Costs
            </p>
          </div>
          <div className="flex space-x-2 py-5 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-sm lg:text-base font-normal">Monthly Reports</p>
          </div>
        </div>
        </Slide>
        <Link
          to="/services2"
          className="px-10 py-3 bg-mpurple lg:w-1/2  text-white font-montserrat font-light text-base lg:text-lg text-center"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default FM;