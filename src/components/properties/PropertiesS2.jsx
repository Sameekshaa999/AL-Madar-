import React, { useState } from "react";

import propertyIcon from "../Zimages/propertyIcon.png";
import property1 from "../Zimages/Property1.png";

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
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, Pagination, FreeMode, Navigation, Thumbs } from "swiper";

const PropertiesS2 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function PropertyCard(props) {
    return (
      <li className="flex flex-col justify-start items-start font-montserrat text-mpurple font-normal shadow-xl p-0">
        <img src={props.image} alt="Property1" className="" />
        <img
          onClick={handleOpen}
          src={propertyIcon}
          alt="Icon"
          className="absolute w-10 ml-2 mt-2"
        />
        <p className="font-medium text-2xl p-2">{props.name}</p>
        <p className="text-xl pl-2">{props.rooms}</p>
        <p className="font-bold text-xl p-2">{props.price}</p>
      </li>
    );
  }

  function GalleryModal(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
      <div>
        <div class="relative z-50" role="dialog" aria-modal="true">
          {/* dark overlay */}
          <div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"></div>

          {/* gallery */}
          <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-end sm:items-center justify-center h-screen w-screen p-4 text-center sm:p-0">
              <div class="flex flex-col bg-white bg-opacity-80 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:w-2/3 sm:h-2/3">
                <div class="basis-5/6">
                  <div class="h-full w-full">
                    <Swiper
                      loop={true}
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className=""
                    >
                      <SwiperSlide id="client 1">
                        <div className="flex justify-center">
                          <img src={project1} className="w-1/3" alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide id="client 1">
                        <img src={project2} className="w-1/3" alt="" />
                      </SwiperSlide>
                      <SwiperSlide id="client 1">
                        <img src={project3} className="w-1/3" alt="" />
                      </SwiperSlide>
                      <SwiperSlide id="client 1">
                        <img src={project4} className="w-1/3" alt="" />
                      </SwiperSlide>
                      <SwiperSlide id="client 1">
                        <img src={project5} className="w-1/3" alt="" />
                      </SwiperSlide>
                      <SwiperSlide id="client 1">
                        <img src={project6} className="w-1/3" alt="" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                {/* <div class="basis-1/6">
                  <div class="h-full w-full">
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      loop={true}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className=""
                    >
                      <SwiperSlide id="client 1">
                        <img
                          src={project1}
                          className="h-1/3 w-full stretch"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide id="client 1">
                        <img src={project2} className="w-1/3" alt="" />
                      </SwiperSlide>
                      <SwiperSlide id="client 1">
                        <img src={project3} className="w-1/3" alt="" />
                      </SwiperSlide>
                      <SwiperSlide id="client 1">
                        <img src={project4} className="w-1/3" alt="" />
                      </SwiperSlide>
                      <SwiperSlide id="client 1">
                        <img src={project5} className="w-1/3" alt="" />
                      </SwiperSlide>
                      <SwiperSlide id="client 1">
                        <img src={project6} className="w-1/3" alt="" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div> */}

                <div class="flex justify-center">
                  <button
                    onClick={handleClose}
                    type="button"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Deactivate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-[1200px] mx-auto font-montserrat text-mpurple my-4 px-16 lg:px-10">
        {open ? <GalleryModal /> : <div></div>}
        <div className="flex flex-col">
          <h1 className="uppercase text-md sm:text-lg md:text-xl lg:text-2xl p-4 md:p-8 pl-0 md:pl-0 font-bold">
            Popular Properties
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
                  name="1"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="2"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="3"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="4"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="5"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="6"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <h1 className="uppercase text-md sm:text-lg md:text-xl lg:text-2xl p-4 md:p-8 pl-0 md:pl-0 font-bold">
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
                  name="1"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="2"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="3"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="4"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="5"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="6"
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
                  name="1"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="2"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="3"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="4"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="5"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
              <SwiperSlide id="client 1">
                <PropertyCard
                  image={property1}
                  name="6"
                  rooms="2 BHK"
                  price="4,950 QAR"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertiesS2;
