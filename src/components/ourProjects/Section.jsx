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
    <div className="px-20">
      <div className="pt-24 flex-col w-full flex ">
        <span className="inline-flex ">
            <img src={stripes} alt="" className="h-16 -z-10" />
            <h2 className="text-3xl font-Montserrat font-semibold text-mpurple mt-7 -ml-5 lg:text-5xl lg:text-left ">
              Our
            </h2>
            <h2 className="lg:mx-0 text-3xl font-Montserrat font-semibold text-mblue mt-7 -ml-5 lg:text-5xl  lg:text-left ">
              Projects
            </h2>
          </span>
          <p className="text-lg font-Montserrat font-normal text-mpurple">
          Al Madar Property Management currently manages the following assets,
          with great client satisfaction in the property management services
          offered and an occupancy rate of above 90%. As a result, we have a
          portfolio that includes villas, flats, offices, and industrial
          buildings, yet we are expanding.
        </p>
      </div>
      <div>
        <div className="flex justify-between">
          <img src={project1} alt="project1" className="h-80 px-5 py-5" />
          <img src={project2} alt="project2" className="h-80 px-5 py-5" />
          <img src={project3} alt="project3" className="h-80 px-5 py-5" />
        </div>
        <div className="flex justify-between">
          <img src={project4} alt="project4" className="h-80 px-5 py-5" />
          <img src={project5} alt="project5" className="h-80 px-5 py-5" />
          <img src={project6} alt="project6" className="h-80 px-5 py-5" />
        </div>
      </div>
    </div>
  );
};

export default Section;
