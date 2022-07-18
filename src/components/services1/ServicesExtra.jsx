import React from "react";
import office_building from "../Zimages/office_building.png";
import telephone from "../Zimages/telephone.png";
import email from "../Zimages/email.png";

const ServicesExtra = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-32 md:justify-center font-montserrat text-mpurple font-normal m-auto my-7 md:my-20 bg-white">
      <div className="flex flex-col justify-center items-center">
        <img
          src={office_building}
          alt="whychooseus"
          className="w-10 m-3 md:w-20 md:m-7"
        />
        <h1 className="text-xs md:text-base">Head Office</h1>
        <p className="font-semibold text-xs md:text-base">
          Al Muntazah, Doha, Qatar
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={telephone}
          alt="featuredprojects"
          className="w-10 m-3 md:w-20 md:m-7"
        />
        <h1 className="text-xs md:text-base">Call us</h1>
        <p className="font-semibold text-xs md:text-base">+974 44675405</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={email}
          alt="findyourplace"
          className="w-10 m-3 md:w-20 md:m-7"
        />
        <h1 className="text-xs md:text-base">Email us</h1>
        <p className="font-semibold text-xs md:text-base">
          realestate@almadar-holding.com
        </p>
      </div>
    </div>
  );
};

export default ServicesExtra;
