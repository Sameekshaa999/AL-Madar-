import React from "react";
import { Fade } from "react-reveal";
import hexagons from "../Zimages/about/hexagons.svg";

const About = () => {
  return (
    <div className="flex justify-center items-center about-gradient text-white font-montserrat pt-24 py-10 lg:h-screen 2xl:h-auto">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row justify-center items-center lg:space-x-40 px-4">
      <Fade left>
      <div className="flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-lg md:text-4xl font-bold lg:w-fit border-b-2 border-mwhite py-2 my-5" >About us</h1>
        <p className="text-center lg:text-justify text-sm md:text-lg leading-loose inline-block">
          Al Madar Property Management is a Qatari-based real estate and
          contracting firm that has been in business since 1992 and has a strong
          reputation for quality and service. The Company employs cutting-edge
          architectural design and continues to construct a number of large
          projects in the region, including commercial office towers,
          residential apartment towers, hotels, residential compounds, and
          master plan land developments.
        </p>
      </div>
      </Fade>
      <Fade right>
      <img src={hexagons} alt="hexagons" className="w-3/5 lg:w-2/5 lg:mt-16 "/>
      </Fade>
      </div>
    </div>
  );
};

export default About;
