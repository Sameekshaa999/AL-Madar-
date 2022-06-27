import React from "react";
import services1_FM from "../Zimages/services1_FM.svg";
import FM_icon from "../Zimages/FM_icon.svg";
import check from "../Zimages/check_icon.svg";

const FM = () => {
  return (
    <div className="flex font-Montserrat text-mpurple px-20 pt-10">
      <div className=" flex-col">
        <div className=" flex">
          <img src={FM_icon} alt="icon" className="h-32" />
          <h1 className="font-semibold text-3xl align-middle">
            Facility <br /> Management
          </h1>
        </div>
        <div className="flex-col">
          <p className="font-light text-lg text-justify ">
            Our service guarantees that the property is in top shape <br /> at
            all times. The in-house buying department will <br /> guarantee that
            the best rates and businesses are used for <br /> the work, while
            also maximising the speed with which <br /> the work is finished in
            order to maximise rental income, <br /> outstanding property
            condition, and tenant happiness. <br />
            Among the services provided include, but are not limited to:
          </p>
          <img
            src={services1_FM}
            alt="Facility Management"
            className="h-50vh"
          />
        </div>
      </div>
      <div className=" flex flex-col flex items-center">
        <button className="px-4 py-4 bg-purple text-white font-Montserrat font-light text-lg">
          Make An Appointment
        </button>
        <div className="flex py-10 divide-y-2 divide-black ">
          <img src={check} alt="check" className="h-7" />
          <p className="text-xl font-normal ">Manager Representative</p>
        </div>
        <div className="flex py-10">
          <img src={check} alt="check" className="h-7" />
          <p className="text-xl font-normal">Manager Representative</p>
        </div>
        <div className="flex py-10">
          <img src={check} alt="check" className="h-7" />
          <p className="text-xl font-normal">Manager Representative</p>
        </div>
        <div className="flex py-10">
          <img src={check} alt="check" className="h-7" />
          <p className="text-xl font-normal">Manager Representative</p>
        </div>
        <div className="flex py-10">
          <img src={check} alt="check" className="h-7" />
          <p className="text-xl font-normal">Manager Representative</p>
        </div>
        <button className=" px-4 py-4 bg-purple text-white font-Montserrat font-light text-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default FM;
