import React from "react";
import office_building from "../Zimages/services1/office_building.jpg";
import telephone from "../Zimages/services1/telephone.jpg";
import email from "../Zimages/services1/email.jpg";
import { Zoom } from "react-reveal";

const ServicesExtra = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-32 md:justify-center font-montserrat text-mpurple font-normal m-auto my-7 md:my-20 bg-white">
      <Zoom>
      <div className="flex flex-col justify-center items-center">
        <img
          src={office_building}
          alt="whychooseus"
          className="w-10 m-3 lg:w-20 lg:m-7"
        />
        <h1 className="text-xs lg:text-base">Head Office</h1>
        <p className="font-semibold text-xs lg:text-base">
          Al Muntazah, Doha, Qatar
        </p>
      </div>
      </Zoom>
      <Zoom>
      <div className="flex flex-col justify-center items-center">
        <img
          src={telephone}
          alt="featuredprojects"
          className="w-10 m-3 lg:w-20 lg:m-7"
        />
        <h1 className="text-xs lg:text-base">Call us</h1>
        <p className="font-semibold text-xs lg:text-base">+974 44675405</p>
      </div>
      </Zoom>
      <Zoom>
      <div className="flex flex-col justify-center items-center">
        <img
          src={email}
          alt="findyourplace"
          className="w-10 m-3 lg:w-20 lg:m-7"
        />
        <h1 className="text-xs lg:text-base">Email us</h1>
        <p className="font-semibold text-xs lg:text-base">
          realestate@almadar-holding.com
        </p>
      </div>
      </Zoom>
    </div>
  );
};

export default ServicesExtra;
