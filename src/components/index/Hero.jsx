import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import hero from "../Zimages/index/Hero.jpg";
import heroMobile from "../Zimages/index/Heromobile.jpg";

const Hero = () => {
  return (
    <div className="relative pt-24 h-screen w-full flex justify-center font-montserrat overflow-x-hidden">
      <img
        src={hero}
        alt="hero"
        className="hidden top-6.5 md:flex md:w-full md:h-full z-0"
      />
      <img
        src={heroMobile}
        alt="hero"
        className="md:hidden top-6.5 w-full z-0"
      />
      <Fade top >
      <div className="2xl:max-w-[1440px] mx-auto absolute mt-24 2xl:mt-40">
        <h1 className="text-center text-mpurple font-extrabold md:px-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-12 lg:mb-16">
          Exceeding Expectations <br></br>One Property at A Time
        </h1>
        <div className="flex justify-center items-center space-x-4 h-auto">

        <Link to="/contact">
              <button
                type="button"
                className="inline-flex items-center px-2 md:px-6 py-1 md:py-2 font-semibold text-mpurple border-2 md:border-[3px] border-mpurple rounded-md text-xs md:text-xl  hover:bg-mpurple hover:text-white transition duration-300 ease-in-out"
              >
                Contact Us
              </button>
            </Link>

            <Link to="/about">
              <button
                type="button"
                className="inline-flex items-center px-2 md:px-6 py-1 md:py-2 font-semibold text-mpurple border-2 md:border-[3px] border-mpurple rounded-md text-xs md:text-xl  hover:bg-mpurple hover:text-white transition duration-300 ease-in-out"
              >
                Know More
              </button>
            </Link>
          
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default Hero;
