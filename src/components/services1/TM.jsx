import React from "react";
import services1_TM from "../Zimages/services1_TM.svg";
import TM_icon from "../Zimages/TM_icon.svg";
import check from '../Zimages/check_icon.svg';

const TM = () => {
  return (
    <div className="flex font-Montserrat text-mpurple px-20 pt-10">
      <div className=" flex-col">
        <div className=" flex">
          <img src={TM_icon} alt="icon" className="h-32"/>
          <h1 className="font-semibold text-3xl align-middle">
            Tenancy <br /> Management
          </h1>
        </div>
        <div className=" flex-col">
          <p className="font-light text-lg text-justify ">
            Years of expertise in real estate ensure landlords will have <br/> over a
            90% occupancy rate, excellent tenant satisfaction, <br/> monthly reports
            on the income and occupancy of the <br/> building to ensure the landlord
            is fully informed of the <br/> status of the property, and many more
            services:
          </p>
          <img src={services1_TM} alt="tenancy Management" className="h-50vh"/>
        </div>
      </div>
      <div className="grid grid-row-3 ">
          <button className="px-4 py-4 bg-purple text-white font-Montserrat font-light text-lg">Make An Appointment</button>
          <div className="flex py-10 ">
              <img src={check} alt="check" className="h-7"/>
              <p className="text-xl font-normal">Manager Representative</p>
          </div>
          <div className="flex py-10">
              <img src={check} alt="check" className="h-7"/>
              <p className="text-xl font-normal">Manager Representative</p>
          </div>
          <div className="flex py-10">
              <img src={check} alt="check" className="h-7"/>
              <p className="text-xl font-normal">Manager Representative</p>
          </div>
          <div className="flex py-10">
              <img src={check} alt="check" className="h-7"/>
              <p className="text-xl font-normal">Manager Representative</p>
          </div>
          <div className="flex py-10">
              <img src={check} alt="check" className="h-7"/>
              <p className="text-xl font-normal">Manager Representative</p>
          </div>
          <button className=" px-4 py-4 bg-purple text-white font-Montserrat font-light text-lg">More Info</button>
      </div>
    </div>
  );
};

export default TM;
