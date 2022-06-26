import React from "react";
import Group from "../Zimages/Group-78.png";
import stripes from "../Zimages/heading_stripes.svg";

const AboutSection = () => {
  return (
    <>
      <div className="pl-24 mx-auto h-screen-less ">
        <div className="mx-auto text-mpurple">
          <div className="grid grid-cols-1 md:grid-cols-2 relative gap-x-16 font-montserrat">
            <div className="mt-16">
              <span className="inline-flex">
                <img src={stripes} alt="" className="h-10 md:h-20" />
                <h2 className="text-3xl text-center font-bold md:text-6xl md:pt-4 md:-ml-6 md:text-left ">
                  About Us
                </h2>
              </span>

              <p className="mx-4 py-2 text-sm text-mpurple text-justify md:leading-loose lg:leading-loose md:pt-12 md:mx-0 md:text-lg lg:text-xl">
                Given Al Madar's dedication to providing quality and service in
                all aspects of the company's operations, it intends to bring its
                more than 30 years of expertise to Al Madar Property Management.
                Al Madar Property Management began with internal programs to
                manage Al Madar Holding's diverse portfolio of properties. This
                comprises all sorts of properties, including commercial,
                residential, and industrial. As a result of our expansion, we
                want to provide outstanding service to property owners in the
                local and regional markets.
              </p>
            </div>

            <div className="overflow-clip h-screen-less -z-10">
              <img className="lg:scale-y-110" src={Group} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
