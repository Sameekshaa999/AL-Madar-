import React from "react";
import skyline from "../Zimages/doha-skyline.png";
import vector from "../Zimages/Vector.png";
import Vector from "../Zimages/WhiteVector.png";
import Arrow from "../Zimages/Arrow.png";

const PropertiesS1 = () => {
  return (
    <div className="pt-24 w-full flex flex-col justify-center items-center">
      <img src={skyline} alt="doha sky-line" className="h-full top-6.5" />
      <div className="absolute">
        <h1 className="font-Montserrat text-white text-5xl font-medium tracking-widest p-3">YOUR SEARCH STARTS HERE</h1>
        <div className="flex space-x-3 justify-center items-center">
          <input
            className="w-10/12 bg-white rounded-xl p-3"
            type="text"
            placeholder="Begin typing, your search will appear below.."
            name="search"
          />
          <button className="w-auto bg-white rounded-xl py-2 px-4 font-Montserrat text-mpurple text-2xl font-normal">Find</button>
        </div>
      </div>
      <div className="flex space-x-10 font-Montserrat text-mpurple font-semibold m-auto ">
        <ul className="flex justify-center space-x-10 ">
          <li className="flex space-x-2 bg-purple p-2 rounded-sm text-white">
            <img src={Vector} alt="vector" className="h-5" />
            <p>Al Rayyan</p>
          </li>
          <li className="flex space-x-2 py-2">
            <img src={vector} alt="vector" className="h-5" />
            <p>Al Wukair</p>
          </li>
          <li className="flex space-x-2 py-2">
            <img src={vector} alt="vector" className="h-5" />
            <p>Doha</p>
          </li>
          <li className="flex space-x-2 py-2">
            <img src={vector} alt="vector" className="h-5" />
            <p>Dukhan</p>
          </li>
          <li className="flex space-x-2 py-2">
            <img src={vector} alt="vector" className="h-5" />
            <p>Mesaieed</p>
          </li>
          <li className="flex space-x-2 py-2">
            <img src={vector} alt="vector" className="h-5" />
            <p>Al Wakrah</p>
          </li>
          <li className="flex space-x-2 py-2">
            <img src={vector} alt="vector" className="h-5" />
            <p>Lusail</p>
          </li>
          <li className="flex space-x-2 py-2">
            <img src={vector} alt="vector" className="h-5" />
            <p>Al Khor</p>
          </li>
          <li className="flex space-x-2 py-2">
          <img src={Arrow} alt="vector" className="h-5" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PropertiesS1;