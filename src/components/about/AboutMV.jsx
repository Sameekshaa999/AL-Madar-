import React from "react";

const AboutMV = () => {
  return (
    <div className="flex justify-center items-center font-montserrat text-mpurple">
      <div className=" pl-16 pr-24 py-28 w-96 h-96 flex flex-col justify-center items-left space-y-5 bg-mpurple rounded-full z-0">
        <h1 className="text-mblue lg:text-4xl font-semibold"> Vision</h1>
        <p className="text-white">
          Our Vision is to achieve our future goals by closely adhering to high
          standards and technicalities that sustain the company's advanced
          position in local and regional markets.
        </p>
      </div>
      <div className="pl-16 pr-2  w-[30rem] h-[30rem] flex flex-col justify-center items-left space-y-5 bg-mblue rounded-full -mt-20 md:mt-0 md:-ml-20 z-10">
        <h1 className="lg:text-4xl font-semibold text-left"> Mission</h1>
        <p>
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
