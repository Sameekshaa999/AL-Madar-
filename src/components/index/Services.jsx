import React from "react";
import { Link } from "react-router-dom";
import map from "../Zimages/qatar_map.png";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row my-10 ">
      <div className="serviceSection-gradient flex flex-col justify-center items-left space-y-1 md:space-y-20 w-1/2 float-right">
        <div className="flex-col text-mpurple text-right justify-center md:space-y-10 relative font-montserrat h-fit">
          <h2 className="lg:text-4xl font-semibold text-white">
            Worried about <br /> managing your property?
          </h2>
          <h2 className="lg:text-2xl font-semibold text-white">
            Al-Madar is here to help!
          </h2>
          <p className="lg:mt-4 lg:text-lg lg:leading-relaxed text-white">
            Al Madar Property Management Services encompass operation
            management, maintenance, and general monitoring of the properties,
            all while assuring quality and transparency in all that is done.
          </p>
          <Link
            to="/services"
            className="absolute mx-auto md:right-4 text-center px-4 md:px-6 py-3 text-mpurple font-semibold rounded-full md:rounded-lg text-sm md:text-xl bg-mblue hover:bg-white hover:text-mblue transition duration-300 ease-in out "
          >
            Explore Now!
          </Link>
        </div>
      </div>
      <div className=" w-1/2 float-left">
        <img src={map} alt="mv3" className="h-1/2 lg:h-3/4" />
      </div>
    </div>

    /* <div className="h-screen mx-auto font-montserrat">
      <div className="flex flex-col md:flex-row justify-end">
        <div className="order-2 md:order-1 basis-1/2 relative serviceSection-gradient h-screen text-white">
          <h2 className="mt-8 lg:mt-24 mr-4 font-bold text-lg lg:text-5xl text-center md:text-right">
            Worried about <br /> managing your property?
          </h2>
          <h3 className="my-6 lg:my-12 mr-4 font-semibold text-base lg:text-3xl text-center lg:text-right">
            Al-Madar is here to help!
          </h3>
          <p className="text-center lg:text-right lg:m-4 lg:text-xl lg:leading-relaxed">
            Al Madar Property Management Services encompass <br />
            operation management , maintenance, and general monitoring <br /> of
            the properties, all while assuring quality <br />
            and transparency in all that is done.
          </p>

          <Link
            to="/services"
            className="absolute mx-auto md:right-4 text-center mt-4 px-4 md:px-6 py-3 text-mpurple font-semibold rounded-full md:rounded-lg text-sm md:text-xl bg-mblue hover:bg-white hover:text-mblue transition duration-300 ease-in out "
          >
            Explore Now!
          </Link>
        </div>
        <div className="order-1 md:order-2 basis-1/2 flex">
          <img
            className="mx-auto h-1/2 lg:h-3/4"
            src={map}
            alt="qatar map illustration"
          />
        </div>
      </div>
    </div> */
  );
};

export default Services;
