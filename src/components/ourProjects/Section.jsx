import React from "react";
import projectsData from "./projectsData.tsx";
import Headings from "../Headings";
import defaultImage from "../Zimages/default.png";

function Projects(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-6 sm:px-6 md:px-10 lg:px-14 my-12">
      {projectsData.map((item) => (
        <div className="relative flex mx-auto fit-content font-montserrat">
          <div className="flex flex-col absolute inset-0 pl-4 pb-4 z-10 bg-black text-white justify-end opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
            <h3 className="font-semibold text-base sm:text-sm">
              {item.service ? item.service : props.service}
            </h3>
            <h4 className="font-light text-base sm:text-sm">
              {item.name ? item.name : props.name}
            </h4>
            <h4 className="mt-2 font-light text-base sm:text-sm">
              {item.location ? item.location : props.location}
            </h4>
          </div>
          <div className="relative">
            <div className="">
              <img
                src={item.image ? item.image : props.image}
                alt="project"
                className="max-h-72 sm:h-auto"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Projects.defaultProps = {
  service: "Service Type",
  name: "Project Name",
  location: "Location",
  image: defaultImage,
};

const Section = () => {
  return (
    <div className="max-w-[1200px] mx-auto font-montserrat pt-24 px-10">
      <div className="flex flex-col pt-8">
        <Headings first="Our" second="Projects" />
        <p className="text-sm md:text-sm lg:text-base text-justify md:text-left text-mpurple mt-6 sm:mx-6 md:mx-10 lg:mx-14">
          Al Madar Property Management currently manages the following assets,
          with great client satisfaction in the property management services
          offered and an occupancy rate of above 90%. As a result, we have a
          portfolio that includes villas, flats, offices, and industrial
          buildings, yet we are expanding.
        </p>
      </div>

      <Projects />
    </div>
  );
};

export default Section;
