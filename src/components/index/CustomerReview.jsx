import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

import stars from "../Zimages/review_stars.png";
import client1 from "../Zimages/client1.png";
import quotes from "../Zimages/quotes.png";

const CustomerReview = () => {
  return (
    <>
      <div className="h-screen-less px-4 py-4 mx-auto grid font-montserrat bg-s relative overflow-clip">
        <div className="customer-review-gradient w-[50%] z-0"></div>
        <img
          src={quotes}
          className="absolute scale-50 top-[8%] left-[2%] z-10"
          alt="client"
        />
        <div className="absolute w-[38%] h-3/4 left-[10%] top-[15%] z-20">
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
            }}
            pagination={{}}
            modules={[Autoplay, Pagination]}
            className="border-1"
          >
            <SwiperSlide id="client 1">
              <span className="inline-flex items-end absolute top-[5%] left-[5%]">
                <img src={client1} className="h-32" alt="client" />

                <span className="text-white text-center px-4 pb-2">
                  <h2 className="font-semibold text-xl">Diana Williams</h2>
                  <h2 className="font-regular text-md">Satisfied Client</h2>
                </span>
              </span>
              <h3 className="absolute text-xl leading-relaxed top-[35%] left-[5%] text-white text-left">
                "Al Madar Property Management is all you need to ensure that
                things are executed in a orderly fashion. Once you decide to
                have a partnership with them, they will alleviate any stress,
                headaches, & pain of renting properties. I have witnessed their
                work hard to find the best tenants and will continue to use its
                services."
              </h3>
            </SwiperSlide>

            <SwiperSlide>
              <span className="inline-flex items-end absolute top-[5%] left-[5%]">
                <img src={client1} className="h-32" alt="client" />

                <span className="text-white text-center px-4 pb-2">
                  <h2 className="font-semibold text-xl">CLIENT 2</h2>
                  <h2 className="font-regular text-md">Satisfied Client</h2>
                </span>
              </span>
              <h3 className="absolute text-xl leading-relaxed top-[35%] left-[5%] text-white text-left">
                "Enter review here!"
              </h3>
            </SwiperSlide>
            <SwiperSlide>
              <span className="inline-flex items-end absolute top-[5%] left-[5%]">
                <img src={client1} className="h-32" alt="client" />

                <span className="text-white text-center px-4 pb-2">
                  <h2 className="font-semibold text-xl">CLIENT 3</h2>
                  <h2 className="font-regular text-md">Satisfied Client</h2>
                </span>
              </span>
              <h3 className="absolute text-xl leading-relaxed top-[35%] left-[5%] text-white text-left">
                "Enter review here!"
              </h3>
            </SwiperSlide>
            <SwiperSlide>
              <span className="inline-flex items-end absolute top-[5%] left-[5%]">
                <img src={client1} className="h-32" alt="client" />

                <span className="text-white text-center px-4 pb-2">
                  <h2 className="font-semibold text-xl">CLIENT 4</h2>
                  <h2 className="font-regular text-md">Satisfied Client</h2>
                </span>
              </span>
              <h3 className="absolute text-xl leading-relaxed top-[35%] left-[5%] text-white text-left">
                "Enter review here!"
              </h3>
            </SwiperSlide>
            <SwiperSlide>
              <span className="inline-flex items-end absolute top-[5%] left-[5%]">
                <img src={client1} className="h-32" alt="client" />

                <span className="text-white text-center px-4 pb-2">
                  <h2 className="font-semibold text-xl">CLIENT 5</h2>
                  <h2 className="font-regular text-md">Satisfied Client</h2>
                </span>
              </span>
              <h3 className="absolute text-xl leading-relaxed top-[35%] left-[5%] text-white text-left">
                "Enter review here!"
              </h3>
            </SwiperSlide>
          </Swiper>
        </div>
        <img
          src={stars}
          className="absolute w-[35%] top-[4%] right-0"
          alt="client"
        />
        <h3 className="absolute uppercase font-bold text-5xl top-[50%] right-[8%] text-mpurple text-left">
          Customer
        </h3>
        <h3 className="absolute uppercase font-semibold text-5xl top-[55%] right-[10%] text-mpurple text-left">
          Reviews
        </h3>
        <img
          src={quotes}
          className="absolute scale-50 rotate-180 bottom-[15%] left-[47%]"
          alt="client"
        />
      </div>
    </>
  );
};

export default CustomerReview;
