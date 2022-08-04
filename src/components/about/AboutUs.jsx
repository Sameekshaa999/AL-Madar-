import React from "react";
import 'animate.css';
import hexagons from "../Zimages/about/hexagons.svg";

const About = () => {

  return (
    <div className="snap-align-none lg:snap-start flex flex-col-reverse lg:flex-row justify-center items-center px-10 py-10 lg:space-x-40 pt-24 about-gradient">
      <div className="lg:ml-20 text-white font-montserrat animate__animated animate__fadeInLeft">
        <div className="flex justify-center items-center lg:w-fit border-b-2 border-mwhite py-2 my-5">
          <h1 className="text-lg md:text-4xl font-bold transition">About us</h1>
        </div>
        <p className="text-center md:text-justify text-sm md:text-lg leading-loose inline-block">
          Al Madar Property Management is a Qatari-based real estate and
          contracting firm that has been in business since 1992 and has a strong
          reputation for quality and service. The Company employs cutting-edge
          architectural design and continues to construct a number of large
          projects in the region, including commercial office towers,
          residential apartment towers, hotels, residential compounds, and
          master plan land developments.
        </p>
      </div>
      <img src={hexagons} alt="hexagons" className="md:w-2/5 mt-10 animate__animated animate__fadeInRight"/>
    </div>
    
  );
};

export default About;
