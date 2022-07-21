import React, { useState } from "react";
import qatarPropertiesData from "./qatarPropertiesData.tsx";
import skyline2 from "../Zimages/properties/doha-skyline-hd.png";



const PropertiesS1 = () => {
  const locations = [
    ...new Set(qatarPropertiesData.map((item) => item.location)),
  ].sort();
  const unitTypes = [
    ...new Set(qatarPropertiesData.map((item) => item.type)),
  ].sort();
  const bedrooms = [
    ...new Set(qatarPropertiesData.map((item) => item.bedrooms)),
  ].sort();
  const furnishings = ["Full", "Semi", "None"];
  const pricings = [
    "< 2,000",
    "2,000 - 4,000",
    "4,000 - 7,000",
    "7,000 - 10,000",
    "> 10,000",
  ];

  var searchDict = {
    location: null,
    type: null,
    bedrooms: null,
    furnished: {
      full: false,
      semi: false,
      none: false,
    },
    price: null,
  };
  console.log(searchDict);

  function UpdateSearchQuery(input) {
    console.log(input);
    if (locations.includes(input)) {
      searchDict.location = input;
    } else if (unitTypes.includes(input)) {
      searchDict.type = input;
    } else if (bedrooms.includes(Number(input))) {
      searchDict.bedrooms = input;
    } else if (input === "Full") {
      searchDict.furnished.full = true;
      searchDict.furnished.semi = false;
      searchDict.furnished.none = false;
    } else if (input === "Semi") {
      searchDict.furnished.full = false;
      searchDict.furnished.semi = true;
      searchDict.furnished.none = false;
    } else if (input === "None") {
      searchDict.furnished.full = false;
      searchDict.furnished.semi = false;
      searchDict.furnished.none = true;
    } else if (input === "< 2,000") {
      searchDict.price = 2000;
    } else if (input === "2,000 - 4,000") {
      searchDict.price = 4000;
    } else if (input === "4,000 - 7,000") {
      searchDict.price = 7000;
    } else if (input === "7,000 - 10,000") {
      searchDict.price = 10000;
    } else if (input === "> 10,000") {
      searchDict.price = 10001;
    } else {
      console.log("search update error");
    }
    console.log("searchDict", searchDict);
    return searchDict;
  }

  function ResetSearchQuery(item) {
    searchDict = {
      location: null,
      type: null,
      bedrooms: null,
      furnished: {
        full: false,
        semi: false,
        none: false,
      },
      price: null,
    };
    console.log(searchDict);
    return searchDict;
  }

  function DropdownMenu(props) {
    return (
      <div className="relative justify-center block rounded-lg text-sm text-mgrey">
        <select
          id={props.category}
          onChange={(e) => UpdateSearchQuery(e.target.value)}
          className="rounded-lg bg-white border-8 border-white"
        >
          <option value={"none"}>--{props.category}--</option>
          {props.list.map((text) => (
            <option value={text}>{text}</option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="pt-24 w-screen h-[35rem] font-montserrat">
      <header
        className="w-full h-full bg-origin-border bg-left md:bg-center bg-cover"
        style={{ backgroundImage: `url(${skyline2})` }}
      >
        <div className="flex justify-center w-full h-full bg-gray-900 bg-opacity-20 py-20">
          <div className="text-center">
            <div className="flex px-4 justify-center">
              <div className="mx-auto text-center">
                <h2 className="mt-48 mb-20 text-2xl sm:text-4xl md:text-6xl font-bold text-gray-100 uppercase tracking-wide">
                  Your search starts here
                </h2>

                <div className=" flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center">
                  <DropdownMenu category="Location" list={locations} />

                  <DropdownMenu category="Type" list={unitTypes} />

                  <DropdownMenu category="Rooms" list={bedrooms} />

                  <DropdownMenu category="Furnishings" list={furnishings} />

                  <DropdownMenu category="Price Range" list={pricings} />
                  <button
                    className="relative justify-center block rounded-lg text-sm text-mgrey"
                    onClick={ResetSearchQuery}
                  >
                    <span className="rounded-lg bg-white border-8 border-white">
                      Clear
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <img src={skyline} alt="doha sky-line" className="object-cover top-6.5" />
      <div className="absolute">
        <h1 className="font-montserrat text-white text-5xl font-medium tracking-widest p-3">
          YOUR SEARCH STARTS HERE
        </h1>
        <div className="flex space-x-3 justify-center items-center">
          <input
            className="w-10/12 bg-white rounded-xl p-3"
            type="text"
            placeholder="Begin typing, your search will appear below.."
            name="search"
          />
          <button className="w-auto bg-white rounded-xl py-2 px-4 font-montserrat text-mpurple text-2xl font-normal">
            Find
          </button>
        </div>
      </div> */}
      {/* <div className="flex space-x-10 font-montserrat text-mpurple font-semibold m-auto ">
        <ul className="flex justify-center space-x-10 ">
          <li className="flex space-x-2 bg-mpurple p-2 rounded-sm text-white">
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
      </div> */}
    </div>
  );
};

export default PropertiesS1;
