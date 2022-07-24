import React, { useState, useEffect } from "react";
import Select from "react-select";
//data file
import qatarPropertiesData from "./qatarPropertiesData";
import {
  dropdownLocations,
  dropdownBedrooms,
  dropdownFurnishings,
  dropdownPricings,
  dropdownTypes,
} from "./dropdownData";

//images and icons
import skyline from "../Zimages/properties/doha-skyline-hd.png";
import { FaBed, FaBath } from "react-icons/fa";

import { BsGridFill } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";

// Import Swiper components
import { Autoplay, Pagination, EffectCoverflow, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const dropdownStyles = {
  control: (base) => ({
    ...base,
    // background: "#ffffff95",
    fontSize: 14,
    fontWeight: 500,
    borderRadius: 2,
  }),
  menu: (base) => ({
    ...base,
    // borderRadius: 5,
    fontSize: 14,
    fontWeight: 500,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
    marginTop: 2,
    fontSize: 14,
    fontWeight: 500,
    borderRadius: "3px 3px 5px 5px",
  }),
};

const PropertiesS2 = () => {
  //dropdown selection data collectors
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedFurnishings, setSelectedFurnishings] = useState([]);
  const [selectedPricings, setSelectedPricings] = useState([]);
  const [searchArray, setSearchArray] = useState([]);

  function UpdateSearchArray() {
    if (
      selectedLocations.length !== 0 ||
      selectedBedrooms.length !== 0 ||
      selectedTypes.length !== 0 ||
      selectedFurnishings.length !== 0 ||
      selectedPricings.length !== 0
    )
      setSearchArray([
        selectedLocations,
        selectedTypes,
        selectedBedrooms,
        selectedFurnishings,
        selectedPricings,
      ]);
  }

  // function clearSearch() {
  //   setSelectedLocations(null);
  //   setSelectedTypes(null);
  //   setSelectedBedrooms(null);
  //   setSelectedFurnishings(null);
  //   setSelectedPricings(null);
  // }
  function PropertyPage() {
    console.log("default user search\n", searchArray);
    const [galleryid, setGalleryid] = useState(null);
    const [render, setRender] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setRender(0);
      }, 1000);
    });

    function Search(property) {
      var result = true;

      console.log("property data", property);

      for (let x in searchArray) {
        console.log("x", x);
        console.log("searchArray[x]", searchArray[x]);
        console.log("search result BEFORE  " + x + result);
        if (searchArray[x].length === 0) {
          console.log("EMPTY PARAMETER");
          continue;
        }
        var comparisonArray = searchArray[x].map((item) => item.value);
        console.log("COMP ARRAY", comparisonArray);
        if (x === "0" && !comparisonArray.includes(property.location)) {
          console.log("false at location");
          return null;
        } else if (x === "1" && !comparisonArray.includes(property.type)) {
          console.log("false at type");
          return null;
        } else if (x === "2" && !comparisonArray.includes(property.bedrooms)) {
          console.log("false at rooms");
          return null;
        } else if (x === "3" && !comparisonArray.includes(property.furnished)) {
          console.log("false at furnished");
          return null;
        } else if (x === "4") {
          console.log("OOPS");
          var temp = false;
          for (let y in comparisonArray) {
            if (
              comparisonArray[y][0] < property.price &&
              property.price <= comparisonArray[y][1]
            ) {
              temp = true;
            }
          }
          if (!temp) {
            return null;
          }
        } else {
          console.log(x + " is clear");
        }
      }
      console.log("search result after FINAL", result);

      return property;
    }

    function RenderProperties() {
      console.log("render properties called", typeof searchArray);

      if (searchArray.length === 0) {
        console.log("default search ON");

        return qatarPropertiesData;
      }

      console.log("searching array", searchArray);
      var searchData = qatarPropertiesData
        .map((item) => Search(item))
        .filter(Boolean);

      console.log("searchData refined\n", searchData);
      return searchData;
    }

    function GalleryModal() {
      console.log(galleryid);
      return (
        <div className="font-montserrat">
          <div className="relative z-50" role="dialog" aria-modal="true">
            {/* dark overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

            {/* gallery */}
            <div className="fixed z-10 inset-0 bg-black bg-opacity-70 transition-opacity">
              {/* <div className="flex justify-center h-screen"> */}
              <div className="flex flex-col space-y-8 overflow-hidden sm:w-full sm:h-screen">
                <div className="basis-5/6">
                  <div className="h-2/3 md:h-full w-full text-white">
                    <Swiper
                      loop={true}
                      slidesPerView={1}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                        },

                        768: {
                          slidesPerView: 3,
                        },
                      }}
                      navigation={true}
                      effect={"coverflow"}
                      coverflowEffect={{
                        rotate: 60,
                        stretch: 0,
                        depth: 100,
                        scale: 0.7,
                        modifier: 1,
                        slideShadows: false,
                      }}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                      }}
                      pagination={{
                        clickable: true,
                        type: "fraction",
                      }}
                      modules={[
                        EffectCoverflow,
                        Autoplay,
                        Pagination,
                        Navigation,
                      ]}
                      className="top-[20%] md:top-[5%]"
                    >
                      {qatarPropertiesData[galleryid - 1].gallery.map(
                        (item) => (
                          <SwiperSlide key={item}>
                            <div className="property-gallery-item">
                              <img
                                src={item}
                                className="h-2/3 md:h-auto object-cover"
                                alt=""
                              />
                            </div>
                          </SwiperSlide>
                        )
                      )}
                    </Swiper>
                  </div>
                </div>

                <div className="basis-1/6 flex items-center justify-center md:my-8">
                  <button
                    onClick={() => setGalleryid(null)}
                    type="button"
                    className="inline-flex justify-center rounded px-6 py-2 bg-mpurple font-semibold text-white hover:scale-110 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        <div className="pt-24 w-screen h-[35rem] font-montserrat">
          <header
            className="w-full h-full bg-origin-border bg-left md:bg-center bg-cover"
            style={{ backgroundImage: `url(${skyline})` }}
          >
            <div className="flex justify-center w-full h-full bg-gray-900 bg-opacity-20 py-20">
              <div className="text-center">
                <div className="flex px-4 justify-center">
                  <div className="mx-auto text-center">
                    <h2 className="mt-48 mb-20 text-2xl sm:text-4xl md:text-6xl font-bold text-gray-100 uppercase tracking-wide">
                      Your search starts here
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="w-screen font-montserrat max-w-[1000px] mx-auto ">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center -mt-16">
            <div
              id="locations dropdown"
              className="search-dropdown-container text-mgrey"
            >
              <Select
                options={dropdownLocations}
                placeholder="Location"
                value={selectedLocations}
                onChange={(data) => setSelectedLocations(data)}
                styles={dropdownStyles}
                isSearchable={true}
                isClearable={true}
                isLoading={render}
                blurInputOnSelect={true}
                isMulti
              />
            </div>

            <div
              id="types dropdown"
              className="search-dropdown-container text-mgrey"
            >
              <Select
                options={dropdownTypes}
                placeholder="Unit Type"
                value={selectedTypes}
                onChange={(data) => setSelectedTypes(data)}
                styles={dropdownStyles}
                isSearchable={false}
                isClearable={true}
                isLoading={render}
                blurInputOnSelect={true}
                isMulti
              />
            </div>

            <div
              id="bedrooms dropdown"
              className="search-dropdown-container text-mgrey"
            >
              <Select
                options={dropdownBedrooms}
                placeholder="Rooms"
                value={selectedBedrooms}
                onChange={(data) => setSelectedBedrooms(data)}
                styles={dropdownStyles}
                isSearchable={false}
                isClearable={true}
                isLoading={render}
                blurInputOnSelect={true}
                isMulti
              />
            </div>

            <div
              id="furnishings dropdown"
              className="search-dropdown-container text-mgrey"
            >
              <Select
                options={dropdownFurnishings}
                placeholder="Furnishings"
                value={selectedFurnishings}
                onChange={(data) => setSelectedFurnishings(data)}
                styles={dropdownStyles}
                isSearchable={false}
                isClearable={true}
                isLoading={render}
                blurInputOnSelect={true}
                isMulti
              />
            </div>

            <div
              id="pricings dropdown"
              className="search-dropdown-container text-mgrey"
            >
              <Select
                options={dropdownPricings}
                placeholder="Rate"
                value={selectedPricings}
                onChange={(data) => setSelectedPricings(data)}
                styles={dropdownStyles}
                isSearchable={false}
                isClearable={true}
                isLoading={render}
                blurInputOnSelect={true}
                isMulti
              />
            </div>

            <button
              onClick={() => {
                setRender(render + 1);
                UpdateSearchArray();
              }}
              type="button"
              className="hover:animate-pulse py-2 px-4 mr-2 text-sm font-medium text-gray-900 bg-white bg-opacity-70 rounded-lg hover:bg-gray-100 hover:text-mpurple inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 mr-2 text-gray-900 "
                fill="none"
                stroke="#25215c"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Search
            </button>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto font-montserrat text-mpurple my-4 px-4 md:px-10">
          <h1 className="uppercase text-md sm:text-lg md:text-xl lg:text-2xl p-4 md:p-8 pl-0 md:pl-0 font-bold">
            Qatar Properties
          </h1>

          <div className="h-[42rem] sm:h-[50rem] md:h-[36rem] lg:h-[31rem] font-montserrat">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 70,
                },
              }}
              centeredSlides={false}
              autoplay={{
                disableOnInteraction: true,
                delay: 4000,
              }}
              pagination={{
                type: "bullets",
              }}
              modules={[Autoplay, Pagination]}
              className=""
            >
              {console.log("render works", render)}
              {console.log("to be rendered", RenderProperties())}

              {RenderProperties().map((item) => (
                <SwiperSlide id={item.id}>
                  <div className="group relative">
                    <div className="relative w-full min-h-80 bg-gray-200 sm:aspect-w-1 sm:aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={item.image}
                        alt=""
                        className="object-center object-cover lg:w-full lg:h-full shadow-lg"
                      />
                    </div>

                    <div className="flex flex-col w-full mt-4">
                      <h3 className="text-xl font-extrabold text-mgrey">
                        QAR {item.price}
                      </h3>
                      <div className="flex flex-row p-1 text-mpurple text-base font-mono font-semibold relative">
                        <div className="flex flex-row items-center">
                          <span className="mr-2 text-black">
                            {item.bedrooms}
                          </span>
                          <span className="scale-125">
                            <FaBed />
                          </span>
                          <span className="mx-2 text-xl text-black">|</span>
                        </div>

                        <div className="flex flex-row items-center">
                          <span className="mr-2 text-black">
                            {item.bathrooms}
                          </span>
                          <span className="scale-125">
                            <FaBath />
                          </span>
                          <span className="mx-2 text-xl text-black">|</span>
                        </div>

                        <div className="flex flex-row items-center">
                          <span className="mr-2 text-black">
                            {item.area} sqm.
                          </span>
                          <span className="scale-125">
                            <BsGridFill />
                          </span>
                        </div>

                        <div className="absolute inline-flex right-1 top-0">
                          <div
                            onClick={() => setGalleryid(item.itemNumber)}
                            className="flex flex-row items-center hover:cursor-pointer"
                          >
                            {/* Gallery */}
                            <span className="mr-2">{item.gallery.length}</span>
                            <span className="animate-pulse scale-[1.8] hover:scale-[1.6] transition">
                              <IoMdPhotos />
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-mgrey">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {galleryid ? <GalleryModal /> : <div></div>}
        </div>
      </>
    );
  }
  return <PropertyPage />;
};

export default PropertiesS2;
