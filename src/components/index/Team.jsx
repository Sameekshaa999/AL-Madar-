import React from "react";
import { Link } from "react-router-dom";
import team from "../Zimages/index/team.png";

const Team = () => {
  return (
    <div className="relative flex flex-col justify-center items-center font-montserrat text-mpurple">
      <div className="flex justify-center items-center px-10"><img src={team} alt="team" className="md:h-1/2 md:w-1/2 "/></div>
      <div className="lg:absolute lg:mt-28 team-bg flex flex-col justify-center items-center px-5 md:px-10 md:py-5 space-y-3 md:space-y-0 md:max-w-[500px]" >
      <h1 className="text-2xl lg:text-4xl font-semibold"> Meet the <span className="text-mblue">team</span> </h1>
        <p className="text-center inline-flex lg:mt-4 text-sm lg:text-lg lg:leading-relaxed">
            We have highly trained personnel who are 
            carefully selected to assure the client's satisfaction.
            Our teamwork allows us to bring together the best
            thinking and advice from our professionals and
             deliver the best and highest solutions in the 
             shortest timepossible to our clients
        </p>
      </div>
      <div className="team-gradient w-full h-10 md:h-60 flex flex-col justify-center items-center">
      <button>
          <Link
            to="/services"
            className=" px-4 md:px-6 py-2 md:py-3 text-mpurple font-semibold rounded-full md:rounded-lg text-sm md:text-xl bg-mblue hover:bg-white hover:text-mblue transition duration-300 ease-in out "
          >
            More Info
          </Link>
          </button>
      </div>
    </div>
    // <div className="flex flex-col font-montserrat text-mpurple">
    //   <div className="flex flex-col justify-center items-center">
    //     <img src={team} alt="team" className="h-1/2 w-1/2 "/>
    //   </div>
    //   <div className="team-gradient h-60 flex flex-col justify-center items-center space-y-10">
    //     <div className="absolute mb-96 team-bg p-7 flex flex-col justify-center items-center max-w-[500px]">
    //       <h1 className="lg:text-4xl font-semibold"> Meet the <span className="text-mblue">team</span> </h1>
    //       <p className="text-center inline-flex lg:mt-4 lg:text-lg lg:leading-relaxed">We have highly trained personnel who are 
    //         carefully selected to assure the client's satisfaction.
    //         Our teamwork allows us to bring together the best
    //         thinking and advice from our professionals and
    //          deliver the best and highest solutions in the 
    //          shortest timepossible to our clients.</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Team;
