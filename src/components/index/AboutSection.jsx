import React from "react";
import Group from "../Zimages/index/Group-78.svg";
import stripes from "../Zimages/index/heading_stripes.svg";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center font-montserrat text-mpurple h-fit">
      <div className="flex flex-col justify-center items-left space-y-2 md:space-y-10 mx-20 my-10 md:mx-0 md:ml-20">
        <div className="inline-flex">
        <img src={stripes} alt="" className="h-10 md:h-20" />
        <h1 className="text-2xl md:text-4xl text-center font-bold md:text-left mt-2 md:mt-7">About Us</h1>
        </div>
        <p className="text-left md:text-justify text-sm md:text-lg leading-loose inline-block">
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
      <img className="w-[45%] float-right" src={Group} alt="Group" />
      </div>
  );
};

export default AboutSection;