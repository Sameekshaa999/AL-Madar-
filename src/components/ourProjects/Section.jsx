import React from "react";
import Headings from "../Headings";
import defaultImage from "../Zimages/default.jpeg";
import project1 from "../Zimages/project1.png";
import project2 from "../Zimages/project2.png";
import project3 from "../Zimages/project3.png";
import project4 from "../Zimages/project4.png";
import project5 from "../Zimages/project5.png";
import project6 from "../Zimages/project6.png";

function Projects(props) {
  return (
    <div class="relative flex mx-auto fit-content font-montserrat">
      <div class="flex flex-col absolute inset-0 pl-4 pb-4 z-10 bg-black text-white justify-end opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
        <h3 class="font-semibold text-base sm:text-sm">{props.service}</h3>
        <h4 class="font-light text-base sm:text-sm">{props.name}</h4>
        <h4 class="mt-2 font-light text-base sm:text-sm">{props.location}</h4>
      </div>
      <div class="relative">
        <div class="">
          <img src={props.image} alt="project" className="max-h-72 sm:h-auto" />
        </div>
      </div>
    </div>
  );
}

Projects.defaultProps = {
  service: "Facilities Management",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-6 sm:px-6 md:px-10 lg:px-14 my-12">
        <Projects
          service="Facilities Management"
          name="Qatar National Bank"
          location="Doha - Qatar"
          image={project1}
        />
        <Projects image={project2} />
        <Projects image={project3} />
        <Projects image={project4} />
        <Projects image={project5} />
        <Projects image={project6} />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </div>
    </div>
  );
};

export default Section;
