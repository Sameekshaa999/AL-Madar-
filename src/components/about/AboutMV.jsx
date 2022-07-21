import React from "react";

const AboutMV = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center font-montserrat text-mpurple">
      <div className=" md:pl-16 md:pr-24 md:py-28 w-60 h-60 md:w-96 md:h-96 flex flex-col justify-center items-left space-y-2 md:space-y-5 bg-mpurple rounded-full z-0">
        <h1 className="text-mblue text-sm md:text-2xl lg:text-4xl font-semibold text-center md:text-left"> Vision</h1>
        <p className="text-xs md:text-sm text-white">
          Our Vision is to achieve our future goals by closely adhering to high
          standards and technicalities that sustain the company's advanced
          position in local and regional markets.
        </p>
      </div>
      <div className="md:pl-16 md:pr-2 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] flex flex-col justify-center items-left space-y-5 bg-mblue rounded-full -mt-20 md:mt-0 md:-ml-20 z-10">
        <h1 className="text-base md:text-2xl lg:text-4xl font-semibold text-center md:text-left"> Mission</h1>
        <p className="text-xs md:text-sm">
          Our Mission is to maintain the credibility and vigorously protect the
          reputation we have already gained through diligence, dedication and
          our total commitment to our Clients using the most advance
          technologies in pursuit of continued client satisfaction and
          excellence in the management of properties
        </p>
      </div>
    </div>
  );
};

export default AboutMV;
