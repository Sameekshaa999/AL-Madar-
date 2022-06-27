import React from "react";
import hexagons from "../Zimages/hexagons.svg";

const About = () => {
  return (
    <>
      <div className="about-gradient lg:h-screen">
        <div className="max-w-[1240px] mx-auto text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-16 px-4 pt-16 md:pt-40 lg:pt-32 font-montserrat">
            <div className="mx-auto lg:hidden">
              <img
                className="mt-16 pb-4 h-35vh lg:h-50vh lg:pl-8"
                src={hexagons}
                alt="/"
              />
            </div>
            <div>
              <h2 className="text-3xl text-center font-bold lg:text-6xl lg:pt-28 lg:text-left ">
                About Us
              </h2>
              <div className="w-10/12 h-0.5 bg-white my-2 mx-auto lg:mx-0 lg:w-3/12 lg:h-1"></div>

              <p className="mx-4 py-2 text-sm text-white text-justify lg:mx-0 lg:py-24 lg:text-lg">
                Al Madar Property Management is a Qatari-based real estate and
                contracting firm that has been in business since 1992 and has a
                strong reputation for quality and service. <br /> <br />
                The Company employs cutting-edge architectural design and
                continues to construct a number of large projects in the region,
                including commercial office towers, residential apartment
                towers, hotels, residential compounds, and master plan land
                developments.
              </p>
            </div>

            <div className="hidden lg:flex lg:pt-10 lg:pl-12">
              <img className="" src={hexagons} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
