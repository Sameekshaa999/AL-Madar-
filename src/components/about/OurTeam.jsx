import React from "react";
import stripes from "../Zimages/index/heading_stripes.svg";
import managers from "../Zimages/about/property_managers.jpg";
import legal from "../Zimages/about/legal_team.jpg";
import marketing from "../Zimages/about/marketing_team.jpg";
import analysts from "../Zimages/about/property_analyst.jpg";
import guards from "../Zimages/about/security_guards.jpg";
import cleaners from "../Zimages/about/cleaners.jpg";
import safety from "../Zimages/about/safety_managers.jpg";
import other from "../Zimages/about/other_staff.jpg";

const OurTeam = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 font-montserrat text-mpurple">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-start items-center mx-20 mb-7">
          <img src={stripes} alt="" className="h-10 md:h-20" />
          <h2 className="text-2xl md:text-4xl text-center font-bold md:text-left mt-2 md:mt-7">
            Our <span className="text-mblue"> Team</span>
          </h2>
        </div>
        <p className="font-montserrat font-normal text-mpurple text-justify text-sm md:text-lg leading-loose inline-block w-3/5">
          Al Madar is completely devoted to providing quality in all aspects of
          the Company's activities because of qualities such as clear vision and
          dedication to excellence. The company has a large staff that includes
          Engineers, Consultants, Technical and Managerial Specialties, as well
          as a number of Senior Engineers and Supervisors with extensive
          expertise.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-40 my-5">
        <div className="flex justify-between items-center ourTeam-bg w-3/5 drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
          <img src={managers} alt="p" className="w-60" />
          <div className="mx-10">
            <h1 className="border-t-2 border-mpurple font-montserrat text-mpurple font-semibold text-xl py-2 mx-7 ml-0 lg:text-left  ">
              Property <br /> Managers{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-row-reverse md:flex-row justify-between items-center ourTeam-bg w-3/5 drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
          <img src={legal} alt="p" className="w-60" />
          <div className="mx-10">
            <h1 className="border-t-2 border-mpurple font-montserrat text-mpurple font-semibold text-xl py-2 mx-7 ml-0 lg:text-left  ">
              Legal <br /> Team{" "}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-40 my-5">
        <div className="flex flex-row md:flex-row-reverse justify-between items-center ourTeam-bg w-3/5 drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
          <img src={marketing} alt="p" className="w-60" />
          <div className="mx-10">
            <h1 className="border-t-2 border-mpurple font-montserrat text-mpurple font-semibold text-xl py-2 mx-7 ml-0 lg:text-left  ">
              Marketing <br /> Team{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between items-center ourTeam-bg w-3/5 drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
          <img src={analysts} alt="p" className="w-60" />
          <div className="mx-10">
            <h1 className="border-t-2 border-mpurple font-montserrat text-mpurple font-semibold text-xl py-2 mx-7 ml-0 lg:text-left  ">
              Property <br /> Analysts{" "}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-40 my-5">
        <div className="flex justify-between items-center ourTeam-bg w-3/5 drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
          <img src={guards} alt="p" className="w-60" />
          <div className="mx-10">
            <h1 className="border-t-2 border-mpurple font-montserrat text-mpurple font-semibold text-xl py-2 mx-7 ml-0 lg:text-left  ">
              Security <br /> Guards{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-row-reverse md:flex-row justify-between items-center ourTeam-bg w-3/5 drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
          <img src={cleaners} alt="p" className="w-60" />
          <div className="mx-10">
            <h1 className="border-t-2 border-mpurple font-montserrat text-mpurple font-semibold text-xl py-2 mx-7 ml-0 lg:text-left  ">
              Repairers And <br /> Cleaners{" "}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-40 my-5 ">
        <div className="flex flex-row md:flex-row-reverse justify-between items-center ourTeam-bg w-3/5 drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
          <img src={safety} alt="p" className="w-60" />
          <div className="mx-10">
            <h1 className="border-t-2 border-mpurple font-montserrat text-mpurple font-semibold text-xl py-2 mx-7 ml-0 lg:text-left  ">
              Safety <br /> Managers
            </h1>
          </div>
        </div>
        <div className="flex flex-row-reverse  justify-between items-center ourTeam-bg w-3/5 drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
          <img src={other} alt="p" className="w-60" />
          <div className="mx-10">
            <h1 className="border-t-2 border-mpurple font-montserrat text-mpurple font-semibold text-xl py-2 mx-7 ml-0 lg:text-left  ">
              And Many <br /> More
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;