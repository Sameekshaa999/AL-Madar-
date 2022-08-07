import React, { useState } from "react";
import services1_TM from "../Zimages/services1/services1_TM.jpg";
import TM_icon from "../Zimages/services1/TM_icon.jpg";
import check from "../Zimages/services1/check_icon.png";
import { Link } from "react-router-dom";
import PopUp from "../PopUp";
import { Fade, Slide } from "react-reveal";

const TM = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="2xl:max-w-[1440px] 2xl:mx-auto flex flex-col lg:flex-row font-montserrat lg:space-x-32 text-mpurple mx-4 2xl:pl-40 2xl:pr-40 lg:mx-40 mt-10">
      <div className="flex-col">
        <Fade left>
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-x-6 items-center">
          <img src={TM_icon} alt="icon" className="h-20" />
          <h1 className="mt-5 font-semibold text-xl md:text-3xl text-center">
            Tenancy Management
          </h1>
        </div>
        </Fade>
        <div className="lg:flex-col inline-block">
          <Fade left>
          <p className="mt-5 mb-0 text-sm md:text-base text-justify ">
            Years of expertise in real estate ensure landlords will have over a
            90% occupancy rate, excellent tenant satisfaction, monthly reports
            on the income and occupancy of the building to ensure the landlord
            is fully informed of the status of the property, and many more
            services:
          </p>
          </Fade>
          <Fade bottom>
          <div className="flex justify-center items-center">
            <img
              src={services1_TM}
              alt="Tenancy Management"
              className="my-7 lg:w-full h-40 md:h-60 lg:h-80"
            />
          </div>
          </Fade>
        </div>
      </div>
      <div className="flex flex-col space-y-10 justify-center items-center lg:items-end lg:w-1/3">
        <button
          onClick={() => setButtonPopup(true)}
          className="px-10 py-3 bg-mpurple text-white font-montserrat font-light text-sm lg:text-base"
        >
          Make An Appointment
        </button>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp>
        <Slide right cascade>
        <div className="flex flex-col justify-center md:w-96">
          <div className="flex space-x-2 pb-5 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-sm lg:text-base font-normal">
            Manager Representative
            </p>
          </div>
          <div className="flex space-x-2 py-5 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-sm lg:text-base font-normal">
            Tenant Pooling
            </p>
          </div>
          <div className="flex space-x-2 py-5 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-sm lg:text-base font-normal">
            Financial Services
            </p>
          </div>
          <div className="flex space-x-2 py-5 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-sm lg:text-base font-normal">
            Lease Renewals
            </p>
          </div>
          <div className="flex space-x-2 py-5 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-sm lg:text-base font-normal">
            Legal Procedures
            </p>
          </div>
        </div>
        </Slide>
        <Link
          to="/services2"
          className="px-10 py-3 bg-mpurple lg:w-1/2  text-white font-montserrat font-light text-sm lg:text-base text-center"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default TM;
