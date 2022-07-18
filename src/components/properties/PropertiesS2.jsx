import React, { useState } from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";

import propertiesData from "./propertiesData.tsx";

// Import Swiper components
import {
  Autoplay,
  Pagination,
  EffectCoverflow,
  FreeMode,
  Navigation,
  Thumbs,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const PropertiesS2 = () => {
  const [galleryid, setGalleryid] = useState(null);

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
            {propertiesData.map((item) => (
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

export default PropertiesS2;
