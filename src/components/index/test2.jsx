import React from "react";
import Group from "../Zimages/index/Group-83.png";
import Headings from "../Headings";
import { Slide } from "react-reveal";


const AboutSection = () =>  {

    return (
      <div className="2xl:max-w-[1440px] 2xl:mx-auto flex flex-col md:flex-row md:justify-center font-montserrat lg:space-x-12 text-mpurple">
         <Slide left cascade>
         <div className="flex flex-col justify-start lg:justify-center items-left my-4 mr-10 lg:mr-0 ml-10 lg:ml-40 ">
          <div className="">
            <Headings first="About" second="us" />
          </div>
          <p className="text-justify text-base lg:text-lg mt-4 lg:mt-8 lg:leading-loose ">
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
         </Slide>
  
        <Slide right>
        <img
          src={Group}
          alt="Group"
          className="md:w-1/2 lg:w-1/2 h-[27rem] md:h-1/2 lg:h-[43.5rem]"
        />
        </Slide>
      </div>
    );  
};

export default AboutSection;
