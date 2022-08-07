import React from "react";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import team from "../Zimages/index/team.png";

const Team = () => {
  return (
    <div className="overflow-x-hidden flex flex-col justify-center items-center font-montserrat text-mpurple">
      <div className="2xl:max-w-[1440px] mx-auto relative flex flex-col justify-center items-center">
      <h1 className="flex lg:hidden text-2xl lg:text-4xl font-semibold"> Meet the <span className="text-mblue">team</span> </h1>
      <div className="flex justify-center items-center mt-5 px-10"><img src={team} alt="team" className="lg:h-1/2 lg:w-1/2 2xl:h-auto 2xl:w-auto"/></div>
      <Zoom>
      <div className="lg:absolute lg:mt-72 2xl:mt-[30rem] team-bg flex flex-col justify-center items-center px-5 lg:px-10 2xl:px-20 2xl:py-12 lg:py-6 space-y-3 lg:space-y-0 lg:max-w-[500px]" >
      <h1 className="hidden lg:flex text-sm lg:text-4xl font-semibold"> Meet the <span className="text-mblue">team</span> </h1>
        <p className="text-center inline-flex mt-0 lg:mt-4 text-sm lg:text-lg lg:leading-relaxed">
            We have highly trained personnel who are 
            carefully selected to assure the client's satisfaction.
            Our teamwork allows us to bring together the best
            thinking and advice from our professionals and
             deliver the best and highest solutions in the 
             shortest timepossible to our clients
        </p>
      </div>
      </Zoom>
      </div>
      <div className="lg:hidden mt-10 w-full h-10 lg:h-60 flex flex-col justify-center items-center">
      <button>
          <Link
            to="/services"
            className=" px-4 lg:px-6 py-2 lg:py-3 text-mpurple font-semibold rounded-full lg:rounded-lg text-sm lg:text-xl bg-mblue hover:bg-white hover:text-mblue transition duration-300 ease-in out "
          >
            More Info
          </Link>
          </button>
      </div>
      <div className="hidden team-gradient w-full h-10 lg:h-60 lg:flex flex-col justify-center items-center">
      <button>
          <Link
            to="/services"
            className=" px-4 lg:px-6 py-2 lg:py-3 text-mpurple font-semibold rounded-full lg:rounded-lg text-sm lg:text-xl bg-mblue hover:bg-white hover:text-mblue transition duration-300 ease-in out "
          >
            More Info
          </Link>
          </button>
      </div>
    </div>
  );
};

export default Team;
