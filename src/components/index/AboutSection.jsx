import React from "react";
import Group from "../Zimages/index/Group-78.svg";
import Headings from "../Headings";

const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center font-montserrat text-mpurple ">
      <div className="flex flex-col justify-center items-left space-y-2 lg:space-y-10 mx-20 my-10 lg:mx-0 lg:ml-20">
        <Headings first="About" second="Us" />
        <p className="lg:w-2/3 text-left lg:text-justify text-sm lg:text-lg leading-loose inline-block">
        Given Al Madar's dedication to providing quality and service in
           all aspects of the company's operations, it intends to bring its
           more than 30 years of expertise to Al Madar Property Management.
           Al Madar Property Management began with internal programs to
           manage Al Madar Holding's diverse portfolio of properties. This
           comprises all sorts of properties, including commercial,
           residential, and industrial. As a result of our expansion, we
           want to provide outstanding service to property owners in the
           local and regional markets.</p>
      </div>
      <img  src={Group} alt="Group" className="w-1/3"/>
      <div className=""></div>
      </div>
  );
};

export default AboutSection;