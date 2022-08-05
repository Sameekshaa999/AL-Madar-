import React from "react";
import Group from "../Zimages/index/Group-83.png";
import Headings from "../Headings";
import { Fade } from "react-reveal";

const AboutSection = () => {
  return (
    <div className="snap-align-none pt-0 lg:pt-24 lg:snap-start flex flex-col md:flex-row md:justify-center font-montserrat lg:space-x-12 text-mpurple">
      <div className="flex flex-col justify-start lg:justify-center items-left my-4 mr-10 lg:mr-0 ml-10 lg:ml-40">
        <Fade left>
          <div className="inline-block">
            <Headings first="About" second="us" />
          </div>
        </Fade>
        <Fade bottom>
          <p className="text-justify text-base lg:text-lg mt-4 lg:mt-8 lg:leading-loose">
            Given Al Madar's dedication to providing quality and service in all
            aspects of the company's operations, it intends to bring its more
            than 30 years of expertise to Al Madar Property Management. Al Madar
            Property Management began with internal programs to manage Al Madar
            Holding's diverse portfolio of properties. This comprises all sorts
            of properties, including commercial, residential, and industrial. As
            a result of our expansion, we want to provide outstanding service to
            property owners in the local and regional markets.
          </p>
        </Fade>
      </div>

      <img
        src={Group}
        alt="Group"
        className="md:w-1/2 lg:w-1/2 h-[27rem] md:h-1/2 lg:h-[43.5rem]"
      />
    </div>
  );
};

export default AboutSection;
