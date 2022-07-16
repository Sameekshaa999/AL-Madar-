import React from "react";
import stripes from "../Zimages/heading_stripes.svg";
import project1 from "../Zimages/project1.svg";
import project2 from "../Zimages/project2.svg";
import project3 from "../Zimages/project3.svg";
import project4 from "../Zimages/project4.svg";
import project5 from "../Zimages/project5.svg";
import project6 from "../Zimages/project6.svg";

const Section = () => {
  return (
    <div className="">
      <div className="pt-24 flex-col m-auto justify-evenly items-center text-center font-Montserrat text-mpurple">
        <div className="flex justify-start items-center mx-20 mb-7">
          <img src={stripes} alt="" className="h-10 md:h-20" />
          <h2 className="text-2xl md:text-4xl text-center font-bold md:text-left mt-2 md:mt-7">
            Our <span className="text-mblue"> Team</span>
          </h2>
        </div>
        <p className="text-sm md:text-base font-Montserrat font-normal text-mpurple mx-20">
          Al Madar Property Management currently manages the following assets,
          with great client satisfaction in the property management services
          offered and an occupancy rate of above 90%. As a result, we have a
          portfolio that includes villas, flats, offices, and industrial
          buildings, yet we are expanding.
        </p>
      </div>
      <div className="flex-col space-y-10 py-10">
        <div className=" md:flex md:justify-evenly ">
          <img src={project1} alt="project1" className="md:w-56 lg:w-80 " />
          <img src={project2} alt="project2" className="md:w-56 lg:w-80 " />
          <img src={project3} alt="project3" className="md:w-56 lg:w-80 " />
        </div>
        <div className="md:flex md:justify-evenly">
          <img src={project4} alt="project4" className="md:w-56 lg:w-80 " />
          <img src={project5} alt="project5" className="md:w-56 lg:w-80 " />
          <img src={project6} alt="project6" className="md:w-56 lg:w-80 " />
        </div>
      </div>
    </div>
  );
};

export default Section;
