import React from "react";

const AboutMV = () => {
  return (
    <div className="h-screen-less flex justify-center px-4 py-4 font-montserrat relative">
      <div className="my-16 md:my-0 md:items-center md:inline-flex">
        <div className="h-[17rem] md:h-[35rem] w-[17rem] md:w-[35rem] mx-auto md:mx-0 bg-mpurple rounded-full z-0">
          <h2 className="text-mblue text-xl md:text-6xl font-bold text-center md:text-left pt-8 md:pt-0 md:mt-32 md:ml-28">
            vision
          </h2>
          <span className="flex mx-auto md:mx-0 w-[14rem] md:w-[25rem]">
            <p className="text-white text-center md:text-left text-[12px] md:text-xl leading-relaxed mt-2 md:mt-4 md:ml-24">
              Our Vision is to achieve our future goals by closely adhering to
              high standards and technicalities that sustain the company's
              advanced position in local and regional markets.
            </p>
          </span>
        </div>

        <div className="h-[22rem] md:h-[40rem] w-[22rem] md:w-[40rem] -mt-20 md:mt-0 md:-ml-20 mx-auto bg-mblue rounded-full z-10">
          <h2 className="text-mpurple text-3xl md:text-6xl font-bold text-center md:text-left pt-16 md:pt-0 md:mt-[10.5rem] md:ml-60">
            & Mission
          </h2>
          <span className="flex mx-auto w-[15rem] md:w-[35rem]">
            <p className="text-mpurple text-center md:text-right text-[12px] md:text-xl md:leading-relaxed mt-2 md:mt-4 md:mx-12">
              Our Mission is to maintain the credibility and vigorously protect
              the reputation we have already gained through diligence,
              dedication and our total commitment to our Clients using the most
              advance technologies in pursuit of continued client satisfaction
              and excellence in the management of properties
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMV;
