import React from "react";
import download from "../Zimages/brochure.png";

const Download = () => {
  return (
    <div className="relative flex flex-col md:flex-row space-y-6 sm:space-x-6 justify-center items-center  m-auto mx-24 my-7">
      <img
        src={download}
        alt="img"
        className="h-1/2 w-1/2 md:h-1/4 md:w-1/4 m-auto"
      />
      <div
        typeof="button"
        className=" absolute mx-20 my-20 py-2 px-5 font-montserrat font-semibold flex justify-center items-center rounded-3xl bg-white-800 animate-bounce"
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
      <div className="m-10 mr-0">
        <p className="font-montserrat text-mpurple  text-sm md:text-base font-normal mb-3">
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
