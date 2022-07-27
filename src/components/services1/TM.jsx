import React, { useState } from "react";
import services1_TM from "../Zimages/services1/services1_TM.jpg";
import TM_icon from "../Zimages/services1/TM_icon.jpg";
import check from "../Zimages/services1/check_icon.jpg";
import { Link } from "react-router-dom";
import PopUp from "../PopUp";

const TM = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row font-montserrat text-mpurple px-20 pt-10">
      <div className="flex-col lg:w-1/2">
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-x-6 items-center">
          <img src={TM_icon} alt="icon" className="h-20 lg:h-32" />
          <h1 className="mt-5 font-semibold text-xl md:text-3xl text-center">
            Tenancy Management
          </h1>
        </div>
        <div className="md:flex-col inline-block">
          <p className="mt-5 mb-0 font-light text-lg text-justify ">
            Years of expertise in real estate ensure landlords will have over a
            90% occupancy rate, excellent tenant satisfaction, monthly reports
            on the income and occupancy of the building to ensure the landlord
            is fully informed of the status of the property, and many more
            services.
          </p>
          <div className="flex justify-center items-center">
          <img
            src={services1_TM}
            alt="Tenancy Management"
            className="my-7  h-40 md:h-60 lg:h-80"
          />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-5 lg:space-y-12 items-center lg:w-1/2">
        <button onClick={() => setButtonPopup(true)} className="lg:ml-60 px-16 py-4 bg-mpurple lg:w-96 text-white font-montserrat font-light text-base lg:text-lg">
          Make An Appointment
        </button>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        </PopUp>
        <div className="flex flex-col justify-center lg:w-[30rem] my-1">
          <div className="flex space-x-2 py-7  border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-base lg:text-xl font-normal">Manager Representative</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-base lg:text-xl font-normal">Tenant Pooling</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-base lg:text-xl font-normal">Financial Services</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-base lg:text-xl font-normal">Lease Renewals</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-base lg:text-xl font-normal">Legal Procedures</p>
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

export default TM;
