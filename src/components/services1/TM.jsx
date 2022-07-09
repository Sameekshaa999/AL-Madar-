import React from "react";
import services1_TM from "../Zimages/services1_TM.svg";
import TM_icon from "../Zimages/TM_icon.svg";
import check from "../Zimages/check_icon.svg";
import { Link } from "react-router-dom";

const TM = () => {
  return (
    <div className="md:flex font-Montserrat text-mpurple px-20 pt-10 md:space-x-20">
      <div className="flex-col md:w-1/2 ">
        <div className="sm:flex-col md:flex items-center space-x-7">
          <img src={TM_icon} alt="icon" className="h-32" />
          <h1 className="mt-5 font-semibold text-3xl text-center">
            Tenancy Management
          </h1>
        </div>
        <div className="md:flex-col inline-block">
          <p className="mt-7 font-light text-lg text-justify ">
            Years of expertise in real estate ensure landlords will have
            over a 90% occupancy rate, excellent tenant satisfaction,
            monthly reports on the income and occupancy of the building
            to ensure the landlord is fully informed of the status of the
            property, and many more services:
          </p>
          <img src={services1_TM} alt="tenancy Management" className="h-50vh" />
        </div>
      </div>
      <div className="md:w-1/2">
        <button className="ml-60 px-4 py-4 bg-mpurple w-96 text-white font-Montserrat font-light text-lg">
          Make An Appointment
        </button>
        <div className="flex flex-col justify-center ml-20 my-10">
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-xl font-normal">Manager Representative</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-xl font-normal">Tenant Pooling</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-xl font-normal">Financial Services</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-xl font-normal">Lease Renewals</p>
          </div>
          <div className="flex space-x-2 py-7 border-b-2 border-mpurple">
            <img src={check} alt="check" className="h-7" />
            <p className="text-xl font-normal">Legal Procedures</p>
          </div>
        </div>
        <Link
          to="/services2"
          className=" float-right py-4 bg-mpurple w-1/3 justify-end text-white font-Montserrat font-light text-lg text-center"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default TM;
