import React from "react";
import { Link } from "react-router-dom";
import team from "../Zimages/team.jpg";

const Team = () => {
  return (
    <div className="font-montserrat text-mpurple">
      <div className="flex flex-col justify-center items-center">
        <img src={team} alt="team" className="h-1/2 w-1/2 "/>
      </div>
      <div className=" team-gradient h-60 flex flex-col justify-center items-center space-y-10">
        <div className="absolute mb-96 team-bg p-7 flex flex-col justify-center items-center max-w-[500px]">
          <h1 className="lg:text-4xl font-semibold"> Meet the <span className="text-mblue">team</span> </h1>
          <p className="text-center inline-flex lg:mt-4 lg:text-lg lg:leading-relaxed">We have highly trained personnel who are 
            carefully selected to assure the client's satisfaction.
            Our teamwork allows us to bring together the best
            thinking and advice from our professionals and
             deliver the best and highest solutions in the 
             shortest timepossible to our clients.</p>
        </div>
        <button>
          <Link
            to="/services"
            className=" px-4 md:px-6 py-3 text-mpurple font-semibold rounded-full md:rounded-lg text-sm md:text-xl bg-mblue hover:bg-white hover:text-mblue transition duration-300 ease-in out "
          >
            More Info
          </Link>
          </button>
      </div>
    </div>
  );
};

export default Team;
