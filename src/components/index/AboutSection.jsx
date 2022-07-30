import React from "react";
import Group from "../Zimages/index/Group-78.png";
import Headings from "../Headings";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row lg:justify-center font-montserrat lg:space-x-12 text-mpurple min-h-[88vh]">
      <div className="flex flex-col pl-20 lg:pl-36 md:mt-12 lg:mt-24 z-10">
        <div className="">
          <Headings first="About" second="Us" />
        </div>
        <p className="text-justify text-base lg:text-lg mt-8 ">
          Given Al Madar's dedication to providing quality and service in all
          aspects of the company's operations, it intends to bring its more than
          30 years of expertise to Al Madar Property Management. Al Madar
          Property Management began with internal programs to manage Al Madar
          Holding's diverse portfolio of properties. This comprises all sorts of
          properties, including commercial, residential, and industrial. As a
          result of our expansion, we want to provide outstanding service to
          property owners in the local and regional markets.
        </p>
      </div>

      {/* <img
        src={Group}
        alt="Group"
        className="scale-125 scale-y-150 -translate-x-10 translate-y-40 lg:transform-none max-w-[50vw] max-h-[88vh]"
      /> */}
    </div>
  );
};

export default AboutSection;
