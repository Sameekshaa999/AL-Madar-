import React from "react";
import stripes from "../components/Zimages/index/heading_stripes.svg";

function Headings(props) {
  return (
    <span className="inline-flex mx-auto sm:mx-0">
      <img src={stripes} alt="" className="h-8 sm:h-10 md:h-12 lg:h-16 -z-10" />
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-mpurple mt-1 sm:mt-1.5 md:mt-2 lg:mt-3 -ml-2.5 sm:-ml-3 md:-ml-3.5 lg:-ml-5">
        {props.first}
      </h2>

      <div className="w-2"></div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-mblue mt-1 sm:mt-1.5 md:mt-2 lg:mt-3">
        {props.second}
      </h2>
    </span>
  );
}

export default Headings;
