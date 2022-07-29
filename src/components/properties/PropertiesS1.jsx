import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Select from "react-select";
import emailjs from "@emailjs/browser";
import MessageButton from "../MessageButton";

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

import skyline2 from "../Zimages/properties/doha-skyline-hd2.png";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { IoMdPhotos, IoMdPricetag, IoMdClose } from "react-icons/io";
import { IoChevronBack, IoLocationSharp, IoCall } from "react-icons/io5";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { MdEmail, MdOutlineFullscreen } from "react-icons/md";

// Import Swiper components
import { Autoplay, Pagination, EffectCoverflow, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// some dropdown styles need to be addressed with the styles API
const dropdownStyles = {
  control: (base) => ({
    ...base,
    background: "rgba(255, 255, 255, 0.70)",
    fontSize: 12,
    // minHeight: "20px",
    // height: "30px",
    fontWeight: 600,
    borderRadius: 2,
    textTranform: "capitalize",
  }),
  menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
  // indicatorsContainer: (base) => ({
  //   ...base,
  //   height: "30px",
  // }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
    fontSize: 12,
    fontWeight: 500,
    textTranform: "capitalize",
  }),
  menuList: (base) => ({
    ...base,
    zIndex: 30,
    padding: 0,
    marginTop: 2,
    fontSize: 12,
    fontWeight: 500,
    borderRadius: "3px 3px 5px 5px",
    textTranform: "capitalize",
  }),
};

function Search(property, searchArray) {
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

const PropertiesS1 = () => {
  // const [searchArray, setSearchArray] = useState([]);
  // console.log("initial user search\n", searchArray);
  // dropdown selection data collectors
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedFurnishings, setSelectedFurnishings] = useState([]);
  const [selectedPricings, setSelectedPricings] = useState([]);

  // gallery modal on/off
  const [galleryid, setGalleryid] = useState(null);
  function GalleryModal() {
    console.log(galleryid);
    return (
      <div className="font-montserrat">
        <div className="relative z-50" role="dialog" aria-modal="true">
          <div className="fixed z-10 inset-0 bg-black bg-opacity-90 transition-opacity">
            <div className="flex w-screen justify-end">
              <button
                onClick={() => setGalleryid(null)}
                type="button"
                className="justify-center text-white hover:scale-110 transition"
              >
                <IoMdClose className="my-4 md:my-8 md:mr-12 h-8 w-8" />
              </button>
            </div>
            <div className="mx-auto w-11/12 sm:h-2/3 md:h-full md:w-full text-white">
              <Swiper
                loop={true}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },

                  768: {
                    slidesPerView: 3,
                    coverflowEffect: {
                      rotate: 0,
                      stretch: -30,
                      depth: 100,
                      scale: 0.3,
                      modifier: 1,
                      slideShadows: false,
                    },
                  },
                }}
                navigation={true}
                effect={"coverflow"}
                coverflowEffect={{
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
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                className=""
              >
                {qatarPropertiesData[galleryid - 1].gallery.map((item) => (
                  <SwiperSlide key={item}>
                    <div className="property-gallery-item">
                      <img
                        src={item}
                        className="w-2/3 md:w-auto object-cover md:scale-150"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // property modal on/off
  const [propertyid, setPropertyid] = useState(null);
  const [propertyEmail, setPropertyEmail] = useState(null);
  function EmailModal() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_9gsoihm",
          "template_rmasnn8",
          form.current,
          "dkUcOspLFMfktkd7D"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    console.log(propertyEmail);
    return (
      <div className="flex flex-col fixed z-50 w-screen min-h-screen top-0 left-0 bg-black bg-opacity-80 font-montserrat overflow-y-auto">
        <div className="hidden md:flex justify-end">
          <button
            onClick={() => setPropertyEmail(null)}
            type="button"
            className="text-white hover:scale-110 transition"
          >
            <IoMdClose className="my-4 md:mt-12 mr-4 md:mr-12 h-8 w-8" />
          </button>
        </div>
        <div className="flex h-full items-center p-2 sm:px-10">
          <div className="relative w-auto mx-auto bg-white max-w-[800px] rounded-xl p-5 ">
            <button
              onClick={() => setPropertyEmail(null)}
              className="flex md:hidden justify-end w-full"
            >
              <IoMdClose className="h-8 w-8" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0 md:gap-x-12 p-4 py-6 overflow-y-auto">
              <div className="flex flex-col text-mgrey space-y-1 md:space-y-4">
                <div className="flex w-full justify-center">
                  <img
                    src={propertyEmail.image}
                    alt=""
                    className="h-32 w-11/12 sm:h-48 sm:w-full md:h-auto md:w-96"
                  />
                </div>
                <div className="mt-4 text-xl inline-flex items-center font-bold text-mpurple">
                  <span className="md:scale-125">
                    <IoMdPricetag />
                  </span>
                  <span className="text-sm md:text-base ml-2 ">
                    Reference: {propertyEmail.refID}
                  </span>
                </div>
                <h3 className="md:mt-2 ml-7 text-sm md:text-lg font-extrabold ">
                  QAR {propertyEmail.price}
                </h3>
                <div className="grid grid-cols-2 md:gap-y-2 md:mt-8 ml-7 text-sm text-mpurple font-mono font-semibold relative">
                  <div className="inline-flex items-center">
                    <span className="md:scale-125">
                      <IoLocationSharp />
                    </span>
                    <span className="ml-2 capitalize">
                      {propertyEmail.location}
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <span className="md:scale-125">
                      <FaBed />
                    </span>
                    <span className="ml-2">
                      {propertyEmail.bedrooms} Bedrooms
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <span className="md:scale-125">
                      <TbBuildingSkyscraper />
                    </span>
                    <span className="ml-2 capitalize">
                      {propertyEmail.type}
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <span className="md:scale-125">
                      <FaBath />
                    </span>
                    <span className="ml-2 mt-1 capitalize">
                      {propertyEmail.bathrooms} Bathrooms
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <span className="md:scale-125">
                      <BsGridFill />
                    </span>
                    <span className="ml-2 mt-1">{propertyEmail.area} sqm.</span>
                  </div>
                </div>
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col space-y-2 md:space-y-4 -mt-4 md:-mt-6"
              >
                <span className="text-sm md:text-base font-medium text-black">
                  Reference ID
                </span>
                <input
                  className="shadow appearance-none border rounded py-0.5 sm:py-1 md:py-2 px-3 text-gray-700 text-xs md:text-base leading-tight focus:outline-none focus:shadow-outline"
                  id="referenceID"
                  readOnly
                  name="referenceID"
                  type="text"
                  value={propertyEmail.refID}
                />
                <input
                  className="shadow appearance-none border rounded py-0.5 sm:py-1 md:py-2 px-3 text-gray-700 text-xs md:text-base leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  required
                  name="Name"
                  type="text"
                  placeholder="Name *"
                />
                <input
                  className="shadow appearance-none border rounded py-0.5 sm:py-1 md:py-2 px-3 text-gray-700 text-xs md:text-base leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  required
                  name="Email"
                  type="text"
                  placeholder="Email *"
                />
                <input
                  className="shadow appearance-none border rounded py-0.5 sm:py-1 md:py-2 px-3 text-gray-700 text-xs md:text-base leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  required
                  name="Number"
                  type="tel"
                  placeholder="Number *"
                />
                <textarea
                  className="shadow appearance-none border rounded py-0.5 sm:py-1 md:py-2 px-3 text-gray-700 text-xs md:text-base leading-tight focus:outline-none focus:shadow-outline"
                  name="message"
                  required
                  rows="5"
                  cols="47"
                  type="text"
                  placeholder="Message *"
                ></textarea>
                <div className="flex justify-center md:justify-end w-full">
                  <MessageButton className="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function PropertyModal() {
    const currentProperty = qatarPropertiesData[propertyid - 1];
    return (
      <div className="mx-auto font-montserrat px-4 sm:px-10">
        <Link
          to="renderArea"
          smooth={true}
          duration={500}
          offset={-48}
          className="relative"
        >
          <span
            className="inline-flex items-center font-semibold cursor-pointer rounded hover:text-mblue hover:bg-gray-200 mt-4 pl-1 pr-3 mb-10 md:mb-0"
            onClick={() => {
              setPropertyid(null);
            }}
          >
            <IoChevronBack className="w-5 h-5" />
            Back
          </span>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 mb-12">
          <div className="font-montserrat">
            <div className="h-[20rem] sm:h-[22rem] lg:h-[30rem] w-full text-white">
              <Swiper
                loop={true}
                slidesPerView={1}
                navigation={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                  type: "fraction",
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="text-mgrey font-bold"
              >
                {currentProperty.gallery.map((item) => (
                  <SwiperSlide key={item} className="flex items-center">
                    <div className="relative w-full md:aspect-w-16 md:aspect-h-10 overflow-hidden group-hover:opacity-75 lg:h-80 ">
                      <img
                        src={item}
                        className="sm:h-3/4 lg:h-11/12 object-cover"
                        alt=""
                      />
                      <div
                        className="flex items-start justify-end"
                        onClick={() => setGalleryid(currentProperty.itemNumber)}
                      >
                        <MdOutlineFullscreen className="h-10 w-10 -mt-16 sm:-mt-[22rem] md:mt-4 md:mb-2 mr-2 cursor-pointer hover:scale-125 hover:text-mpurple transition bg-black hover:bg-white hover:bg-opacity-60 rounded-lg bg-opacity-30 text-white" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="inline-flex items-center font-semibold text-mgrey mt-4 md:mt-0">
              <span className="scale-125">
                <IoMdPricetag />
              </span>
              <span className="ml-2">
                Reference ID: {currentProperty.refID}
              </span>
            </div>
            <div className="text-mgrey font-medium">
              Contact us and get a quote today!
            </div>

            <div className="grid grid-cols-2 justify-items-center md:justify-items-start mt-4 font-semibold relative">
              <a href="tel:+974 6644 9748">
                <span className="inline-flex items-center font-normal cursor-pointer rounded text-white bg-mpurple mt-4 pl-1 py-1.5 px-6 hover:scale-110 transition">
                  <IoCall className="w-4 h-4 mx-2" />
                  Call
                </span>
              </a>
              <span
                className="inline-flex items-center font-normal cursor-pointer rounded text-white bg-mpurple mt-4 pl-1 py-1.5 px-4 hover:scale-110 transition"
                onClick={() => {
                  setPropertyEmail(currentProperty);
                  console.log(propertyEmail);
                }}
              >
                <MdEmail className="w-4 h-4 mx-2" />
                Email
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col w-full mt-16">
              <h3 className="text-2xl font-extrabold text-mgrey">
                QAR {currentProperty.price}
              </h3>
              <h3 className="mt-2 text-xl font-bold text-mgrey uppercase">
                {currentProperty.title}
              </h3>

              <div className="grid grid-cols-2 gap-y-2 p-1 mt-12 text-mpurple text-base font-mono font-semibold relative">
                <div className="inline-flex items-center">
                  <span className="scale-125">
                    <IoLocationSharp />
                  </span>
                  <span className="ml-2 capitalize">
                    {currentProperty.location}
                  </span>
                </div>

                <div className="inline-flex items-center">
                  <span className="scale-125">
                    <FaBed />
                  </span>
                  <span className="ml-2">
                    {currentProperty.bedrooms} Bedrooms
                  </span>
                </div>

                <div className="inline-flex items-center">
                  <span className="scale-125">
                    <TbBuildingSkyscraper />
                  </span>
                  <span className="ml-2 capitalize">
                    {currentProperty.type}
                  </span>
                </div>

                <div className="inline-flex items-center">
                  <span className="scale-125">
                    <FaBath />
                  </span>
                  <span className="ml-2 mt-1 capitalize">
                    {currentProperty.bathrooms} Bathrooms
                  </span>
                </div>

                <div className="inline-flex items-center">
                  <span className="scale-125">
                    <BsGridFill />
                  </span>
                  <span className="ml-2 mt-1">{currentProperty.area} sqm.</span>
                </div>
              </div>

              <p className="mt-8 lg:mt-12 md:text-sm lg:text-lg text-black text-justify">
                {currentProperty.description}
              </p>
            </div>
          </div>
        </div>
        {galleryid ? <GalleryModal /> : <div></div>}
        {propertyEmail ? <EmailModal /> : <div></div>}
      </div>
    );
  }
  function PropertyList() {
    return (
      <div className="min-h-screen">
        <h1 className="uppercase text-md sm:text-lg md:text-xl lg:text-2xl pt-8 pl-0 md:pl-0 font-bold">
          Qatar Properties
        </h1>
        <div className="h-[42rem] sm:h-[50rem] md:h-[36rem] lg:h-[31rem] font-montserrat mx-auto">
          <Swiper
            navigation={true}
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
            modules={[Autoplay, Pagination, Navigation]}
            className=""
          >
            {console.log("render current value = ", render)}
            {console.log("to be rendered", renderData)}
            {/* {console.log()} */}
            {renderData.map((item) => (
              <SwiperSlide
                key={item.id}
                className="flex h-full w-full items-start"
              >
                <div className="group relative">
                  <div className="relative w-full h-full group-hover:opacity-75 ">
                    <Link
                      to="renderArea"
                      smooth={true}
                      duration={500}
                      offset={-48}
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="object-center object-cover w-full max-h-64 shadow-lg cursor-pointer"
                        onClick={() => {
                          setPropertyid(item.itemNumber);
                        }}
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col w-full mt-4">
                    <h3 className="text-xl font-extrabold text-mgrey">
                      QAR {item.price}
                    </h3>
                    <div className="flex flex-row p-1 text-mpurple text-base font-mono font-semibold relative">
                      <div className="flex flex-row items-center">
                        <span className="mr-2 text-black">{item.bedrooms}</span>
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
    );
  }
  // properties searching on/off
  const [render, setRender] = useState(0);
  const [renderData, setRenderData] = useState(qatarPropertiesData);
  useEffect(() => {
    setTimeout(() => {
      setRender(0);
    }, 3000);
  });

  function PropertyPage() {
    function UpdateSearchArray() {
      var searchArray = [];
      if (
        selectedLocations.length !== 0 ||
        selectedBedrooms.length !== 0 ||
        selectedTypes.length !== 0 ||
        selectedFurnishings.length !== 0 ||
        selectedPricings.length !== 0
      ) {
        searchArray = [
          selectedLocations,
          selectedTypes,
          selectedBedrooms,
          selectedFurnishings,
          selectedPricings,
        ];
        RenderProperties(searchArray);
        return true;
      }
      console.log("from updatesearcharray", searchArray);
      setRenderData(qatarPropertiesData);
    }
    function RenderProperties(searchArray) {
      console.log("render properties called", searchArray);

      var searchData = qatarPropertiesData
        .map((item) => Search(item, searchArray))
        .filter(Boolean);

      console.log("searchData refined\n", searchData);
      setRenderData(searchData);
    }

    return (
      <>
        <div className="pt-24 overflow-x-hiden h-[35rem] font-montserrat relative">
          <header
            className="w-full h-full bg-left md:bg-center bg-cover"
            style={{ backgroundImage: `url(${skyline2})` }}
          >
            <div className="flex justify-center w-full h-full bg-gray-900 bg-opacity-20 py-20">
              <div className="text-center">
                <div className="flex px-4 justify-center">
                  <div className="mx-auto text-center">
                    <h2 className="mt-24 sm:mt-36 md:mt-28 lg:mt-32 mb-20 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 uppercase tracking-wide">
                      Your search starts here
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="my-4 px-4 md:px-20">
          <div className="flex flex-col lg:space-y-8 justify-center font-montserrat max-w-[1000px] mx-auto -mt-40 lg:-mt-36">
            <div className="flex flex-row flex-wrap justify-center lg:flex-nowrap text-xs md:space-y-0 md:space-x-4 ">
              <div
                id="locations dropdown"
                className="search-dropdown-container"
              >
                <Select
                  options={dropdownLocations}
                  placeholder="Location"
                  menuPortalTarget={document.body}
                  value={selectedLocations}
                  onChange={(data) => setSelectedLocations(data)}
                  styles={dropdownStyles}
                  isSearchable={false}
                  isClearable={true}
                  isLoading={render && selectedLocations.length !== 0}
                  blurInputOnSelect={true}
                  isMulti
                  classNamePrefix={dropdownStyles}
                />
              </div>
              <div id="types dropdown" className="search-dropdown-container">
                <Select
                  options={dropdownTypes}
                  placeholder="Unit Type"
                  menuPortalTarget={document.body}
                  value={selectedTypes}
                  onChange={(data) => setSelectedTypes(data)}
                  styles={dropdownStyles}
                  isSearchable={false}
                  isClearable={true}
                  isLoading={render && selectedTypes.length !== 0}
                  blurInputOnSelect={true}
                  isMulti
                />
              </div>
              <div id="bedrooms dropdown" className="search-dropdown-container">
                <Select
                  options={dropdownBedrooms}
                  placeholder="Rooms"
                  menuPortalTarget={document.body}
                  value={selectedBedrooms}
                  onChange={(data) => setSelectedBedrooms(data)}
                  styles={dropdownStyles}
                  isSearchable={false}
                  isClearable={true}
                  isLoading={render && selectedBedrooms.length !== 0}
                  blurInputOnSelect={true}
                  isMulti
                />
              </div>
              <div
                id="furnishings dropdown"
                className="search-dropdown-container"
              >
                <Select
                  options={dropdownFurnishings}
                  placeholder="Furnishings"
                  menuPortalTarget={document.body}
                  value={selectedFurnishings}
                  onChange={(data) => setSelectedFurnishings(data)}
                  styles={dropdownStyles}
                  isSearchable={false}
                  isClearable={true}
                  isLoading={render && selectedFurnishings.length !== 0}
                  blurInputOnSelect={true}
                  isMulti
                />
              </div>
              <div id="pricings dropdown" className="search-dropdown-container">
                <Select
                  options={dropdownPricings}
                  placeholder="Rate"
                  menuPortalTarget={document.body}
                  value={selectedPricings}
                  onChange={(data) => setSelectedPricings(data)}
                  styles={dropdownStyles}
                  isSearchable={false}
                  isClearable={true}
                  isLoading={render && selectedPricings.length !== 0}
                  blurInputOnSelect={true}
                  isMulti
                />
              </div>
            </div>
            <div className="z-10 mx-auto">
              <Link to="renderArea" smooth={true} duration={500} offset={-48}>
                <button
                  name="renderArea"
                  onClick={() => {
                    setRender(render + 1);
                    setPropertyid(null);
                    UpdateSearchArray();
                    // RenderProperties();
                  }}
                  type="button"
                  className="mt-4 sm:mt-0 py-0.5 sm:py-1 md:py-2 px-3 text-sm font-medium inline-flex items-center text-white bg-mpurple sm:bg-white sm:bg-opacity-30 rounded-lg"
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="#fff"
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
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto font-montserrat text-mpurple my-4 px-4 md:px-10">
          {propertyid ? <PropertyModal /> : <PropertyList />}
        </div>
      </>
    );
  }
  return <PropertyPage />;
};

export default PropertiesS1;
