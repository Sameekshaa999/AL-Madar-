import React, { useState } from "react";

//data file
import qatarPropertiesData from "./qatarPropertiesData.tsx";

//images and icons
import skyline2 from "../Zimages/properties/doha-skyline-hd.png";
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

const propertiesDeep = () => {
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
  console.log("deafult user search\n", searchDict);

  function UpdateSearchQuery(input) {
    console.log(input);
    if (locations.includes(input)) {
      searchDict.location = input;
    } else if (input === "--Location--") {
      searchDict.location = null;
    } else if (unitTypes.includes(input)) {
      searchDict.type = input;
    } else if (input === "--Type--") {
      searchDict.type = null;
    } else if (bedrooms.includes(Number(input))) {
      searchDict.bedrooms = Number(input);
    } else if (input === "--Rooms--") {
      searchDict.bedrooms = null;
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
    } else if (input === "--Furnishings--") {
      searchDict.furnished.full = false;
      searchDict.furnished.semi = false;
      searchDict.furnished.none = false;
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
    } else if (input === "--Price Range--") {
      searchDict.price = null;
    } else {
      console.log("search update error");
    }

    console.log("user search\n", searchDict);
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

    return searchDict;
  }

  function Search() {
    const sample = qatarPropertiesData[5];
    var result = true;
    console.log("search result before", result);
    console.log("sample data", sample);

    for (let x in searchDict) {
      console.log("x\n", x);
      if (searchDict[x] === null) {
        console.log(x + " is null");
        continue;
      }
      // console.log("i shouldn't run");
      if (x === "furnished") {
        for (let y in searchDict[x]) {
          if (searchDict[x][y] === sample[x][y]) {
            result = false;
            console.log(x + " failed " + y);
            break;
          }
        }
        if (result) {
          continue;
        }
      } else if (searchDict[x] !== sample[x]) {
        result = false;
        console.log(x + " failed");
        break;
      }
    }
    console.log("search result after", result);
    return result;
    // if (searchDict.location !== sample.location) {
    //   result = false;
    // } else if (searchDict.type !== sample.type) {
    //   console.log("type failed");
    //   result = false;
    // } else if (searchDict.bedrooms !== sample.bedrooms) {
    //   console.log(typeof searchDict.bedrooms);
    //   console.log(sample.bedrooms);
    //   console.log("beds failed");
    //   result = false;
    // }
    // if (searchDict.price !== sample.price) {
    //   return false;
    // }
  }

  const PropertiesS1 = () => {
    function DropdownMenu(props) {
      return (
        <div className="relative justify-center block rounded-lg text-sm text-mgrey">
          <select
            id={props.category}
            onChange={(e) => UpdateSearchQuery(e.target.value)}
            className="rounded-lg bg-white border-8 border-white"
          >
            <option value={null}>--{props.category}--</option>
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
                    <button
                      className="relative justify-center block rounded-lg text-sm text-mgrey"
                      onClick={Search}
                    >
                      <span className="rounded-lg bg-white border-8 border-white">
                        Search
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  };

  const PropertiesS2 = (props) => {
    const [galleryid, setGalleryid] = useState(null);
    const displayData = props.data;

    function PropertySlide(props) {
      return (
        <>
          <h1 className="uppercase text-md sm:text-lg md:text-xl lg:text-2xl p-4 md:p-8 pl-0 md:pl-0 font-bold">
            {props.category}
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
              {displayData.map((item) => (
                <SwiperSlide id={item.id}>
                  <div className="group relative">
                    <div className="relative w-full min-h-80 bg-gray-200 sm:aspect-w-1 sm:aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={item.image}
                        alt=""
                        className="object-center object-cover lg:w-full lg:h-full"
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
        </>
      );
    }

    function GalleryModal(props) {
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
          {/* </div> */}
        </div>
      );
    }

    return (
      <>
        <div className="max-w-[1200px] mx-auto font-montserrat text-mpurple my-4 px-4 md:px-10">
          {galleryid ? <GalleryModal /> : <div></div>}
          <div className="flex flex-col">
            <PropertySlide category="Qatar Properties" />
            <PropertySlide category="Dubai Properties" />
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <PropertiesS1 />
      <PropertiesS2 data={qatarPropertiesData} />
    </div>
  );
};

export default propertiesDeep;
