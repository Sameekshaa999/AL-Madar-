import React from "react";
import { Link } from "react-router-dom";
import team from "../Zimages/team.png";

const Team = () => {
  return (
    <div className="h-screen-less mx-auto flex flex-col font-montserrat relative">
      <div className="basis-2/3">
        <img
          src={team}
          alt="team"
          className="absolute -z-10 scale-75 bottom-90"
        />
        <div className="flex justify-center">
          <div className="max-w-[500px] pt-2 pb-6 px-4 flex flex-col absolute bottom-40 bg-white opacity-90">
            <span className="inline-flex mx-auto">
              <h2 className="my-4 text-center text-mpurple font-semibold text-4xl ">
                Meet The
              </h2>
              <div className="w-2"></div>
              <h2 className="my-4 text-center text-mblue font-bold text-4xl">
                Team
              </h2>
            </span>
            <p className="text-center z-20 text-lg text-mpurple">
              We have highly trained personnel who are carefully selected to
              assure the client's satisfaction. Our teamwork allows us to bring
              together the best thinking and advice from our professionals and
              deliver the best and highest solutions in the shortest time
              possible to our clients.
            </p>
          </div>
        </div>
      </div>
      <div className="basis-1/3 meet-team-gradient flex items-center justify-center h-full">
        <Link
          to="/services"
          className="mx-auto text-center mt-4 px-4 md:px-12 py-3 text-mpurple font-semibold rounded-full md:rounded-lg text-sm md:text-xl bg-mblue hover:bg-white hover:text-mblue transition duration-300 ease-in out "
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default Team;
