import React from "react";
import download from "../Zimages/services2/brochure.png";

const Download = () => {
  return (
    <div className="relative flex flex-col lg:flex-row space-y-6 space-x-6 justify-center items-center  m-auto mx-24 my-7">
      <div className="relative flex justify-center items-center">
      <img
        src={download}
        alt="img"
        className="h-24 md:h-28 lg:w-[30rem]"
      />
      <div
        typeof="button"
        className="absolute py-1 px-2 lg:py-2 lg:px-5 font-montserrat text-sm lg:text-base font-semibold flex justify-center items-center rounded-3xl bg-white-800 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download
      </div>
      </div>
      
      <div className="">
        <p className="font-montserrat text-center lg:text-left text-mpurple text-sm md:text-base font-normal mb-3">
          Integrated facilities management unifies the delivery of all our
          facility management expertise and enables us to provide all the
          benefits of outsourcing – such as efficiency savings and improved
          performance – whilst ensuring you the same degree of control,
          commitment and accountability you’d have if you delivered it all
          in-house
          <span className="font-bold">
            . For more details please download our brochure.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Download;
