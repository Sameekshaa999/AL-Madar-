import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import hero from "../Zimages/index/Hero.jpg";
import heroMobile from "../Zimages/index/Heromobile.jpg";

const Hero = () => {
  return (
    <div className="relative pt-24 h-screen w-full flex justify-center font-montserrat">
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
      <div className="mx-auto absolute mt-24 xl:mt-40">
        <h1 className="text-center text-mpurple font-extrabold md:px-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl mb-12 lg:mb-16">
          Exceeding Expectations <br></br>One Property at A Time
        </h1>
        <div className="flex justify-center items-center space-x-4">
        <button>
          <Link
            to="/contact"
            className="text-center px-2 md:px-6 py-2 md:py-3 text-mpurple font-semibold border-3 border-mpurple rounded-full md:rounded-lg text-sm md:text-2xl hover:bg-mpurple hover:text-white transition duration-300 ease-in out "
          >
            Contact Us
          </Link>
          </button>
          <button>
          <Link
            to="/contact"
            className="text-center px-2 md:px-6 py-2 md:py-3 text-mpurple font-semibold border-3 border-mpurple rounded-full md:rounded-lg text-sm md:text-2xl hover:bg-mpurple hover:text-white transition duration-300 ease-in out "
          >
            Know More
          </Link>
          </button>
          
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default Hero;
