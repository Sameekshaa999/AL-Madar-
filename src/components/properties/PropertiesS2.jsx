import React, { useState } from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

import propertiesData from "./propertiesData.tsx";

import propertyIcon from "../Zimages/propertyIcon.png";

import project1 from "../Zimages/project1.png";
import project2 from "../Zimages/project2.png";
import project3 from "../Zimages/project3.png";
import project4 from "../Zimages/project4.png";
import project5 from "../Zimages/project5.png";
import project6 from "../Zimages/project6.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import {
  Autoplay,
  Pagination,
  EffectCoverflow,
  FreeMode,
  Navigation,
  Thumbs,
} from "swiper";

const PropertiesS2 = () => {
  const [galleryid, setGalleryid] = useState(null);
  console.log(galleryid);

  function PropertySlide(props) {
    return (
      <>
        <h1 className="uppercase text-md sm:text-lg md:text-xl lg:text-2xl p-4 md:p-8 pl-0 md:pl-0 font-bold">
          {props.category}
        </h1>
        <div className="h-[17rem] md:h-[29rem] lg:h-[31rem] font-montserrat">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 480px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 640px
              768: {
                slidesPerView: 2,
                spaceBetween: 70,
              },
            }}
            centeredSlides={false}
            // autoplay={{
            //   delay: 3000,
            // }}
            pagination={{}}
            modules={[Autoplay, Pagination]}
            className="border-1"
          >
            {propertiesData.map((item) => (
              <SwiperSlide id={item.id}>
                <div className="group relative">
                  <div className="relative w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 md:aspect-none">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
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

                      <div className="absolute inline-flex right-0 top-0">
                        <div
                          onClick={() => setGalleryid(item.itemNumber)}
                          className="flex flex-row items-center animate-pulse hover:cursor-pointer"
                        >
                          Gallery
                          <img
                            src={propertyIcon}
                            alt="Icon"
                            className="ml-2 w-8 h-8 hover:scale-90 transition"
                          />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-mgrey">
                      {item.title}
                    </h3>
                  </div>
                </div>
                {/* <li className="flex flex-col justify-start items-start font-montserrat text-mpurple font-normal shadow-xl p-0">
                  <img src={item.image} alt="Property1" className="" />
                  <img
                    onClick={handleOpen}
                    src={propertyIcon}
                    alt="Icon"
                    className="absolute w-10 ml-2 mt-2"
                  />
                  <p className="font-medium text-2xl p-2">{item.title}</p>
                  <p className="text-xl pl-2">{item.rooms}</p>
                  <p className="font-bold text-xl p-2">{item.price}</p>
                </li> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  }

  function GalleryModal(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
                    // thumbs={{ swiper: thumbsSwiper }}
                    modules={[
                      EffectCoverflow,
                      Autoplay,
                      Pagination,
                      FreeMode,
                      Navigation,
                      Thumbs,
                    ]}
                    className="top-[20%] md:top-[5%]"
                  >
                    {propertiesData[galleryid - 1].gallery.map((item) => (
                      <SwiperSlide key={item}>
                        <div className="property-gallery-item">
                          <img
                            src={item}
                            className="h-2/3 md:h-auto object-cover"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    ))}
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
      <div className="max-w-[1200px] mx-auto font-montserrat text-mpurple my-4 px-16 lg:px-10">
        {galleryid ? <GalleryModal /> : <div></div>}
        <div className="flex flex-col">
          <PropertySlide category="Popular Properties" />

          {/* <div className="h-[17rem] sm:h-[25rem] md:h-96">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                // when window width is >= 480px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // when window width is >= 480px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              centeredSlides={false}
              autoplay={{
                delay: 3000,
              }}
              // pagination={{}}
              modules={[Autoplay, Pagination]}
              className="border-1"
            >
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="1"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="2"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="3"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="4"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="5"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="6"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
            </Swiper>
          </div> */}

          {/* <h1 className="uppercase text-md sm:text-lg md:text-xl lg:text-2xl p-4 md:p-8 pl-0 md:pl-0 font-bold">
            Qatar Properties
          </h1>
          <div className="h-[17rem] sm:h-[25rem] md:h-96">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                // when window width is >= 480px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // when window width is >= 480px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              centeredSlides={false}
              autoplay={{
                delay: 3000,
              }}
              // pagination={{}}
              modules={[Autoplay, Pagination]}
              className="border-1"
            >
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="1"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="2"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="3"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="4"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="5"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="6"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <h1 className="uppercase text-md sm:text-lg md:text-xl lg:text-2xl p-4 md:p-8 pl-0 md:pl-0 font-bold">
            Dubai Properties
          </h1>
          <div className="h-[17rem] sm:h-[25rem] md:h-96">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                // when window width is >= 480px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // when window width is >= 480px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              centeredSlides={false}
              autoplay={{
                delay: 3000,
              }}
              // pagination={{}}
              modules={[Autoplay, Pagination]}
              className="border-1"
            >
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="1"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="2"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="3"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="4"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="5"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  title="6"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
            </Swiper>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PropertiesS2;
