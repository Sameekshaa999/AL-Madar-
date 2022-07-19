import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

import stars from "../Zimages/review_stars.png";
import client1 from "../Zimages/client1.png";
import client2 from "../Zimages/customer1.png";
import client3 from "../Zimages/customer2.png";
import client4 from "../Zimages/customer3.png";
// import quotes from "../Zimages/quotes.png";

const CustomerReview = () => {
  return (
    <div className="flex font-montserrat text-white justify-center items-center bg-s relative ">
    <div className="customer-review-gradient parallelogram w-1/2 py-72 "></div>
      <div className="absolute w-1/2 left-2">
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
          }}
          pagination={{}}
          modules={[Autoplay, Pagination]}
          className="border-1 "
        >
          <SwiperSlide id="client 1">
            <div className="flex flex-col justify-center items-center space-y-10">
              <div className="flex justify-center items-center space-x-5">
                <img src={client1} alt="client" className="h-16" />
                <p className="font-semibold text-base">
                  Diana Williams <br />
                  <span className="text-light font-extralight"></span>
                  Satisfied Client
                </p>
              </div>
              <p className="w-3/4 inline-block text-center text-lg">
                "Al Madar Property Management is all you need to ensure that
                things are executed in a orderly fashion. Once you decide to
                have a partnership with them, they will alleviate any stress,
                headaches, & pain of renting properties. I have witnessed their
                work hard to find the best tenants and will continue to use its
                services."
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide id="client 2">
            <div className="flex flex-col justify-center items-center space-y-10">
              <div className="flex justify-center items-center space-x-5">
                <img src={client2} alt="client" className="h-16" />
                <p className="font-semibold text-base">
                  Anna Smith <br />
                  <span className="text-base font-extralight"></span>
                  Satisfied Client
                </p>
              </div>
              <p className="w-3/4 inline-block text-center text-lg">
                “I have given my property to them for rental management for the
                last 3 years and it has been a very satisfactory experience. The
                rentals have come on time and my property is also being
                maintained neatly. I would gladly recommend Al Madar to all!”
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide id="client 3">
            <div className="flex flex-col justify-center items-center space-y-10">
              <div className="flex justify-center items-center space-x-5">
                <img src={client3} alt="client" className="h-16" />
                <p className="font-semibold text-base">
                  Mohammad Ali <br />
                  <span className="text-base font-extralight"></span>
                  Satisfied Client
                </p>
              </div>
              <p className="w-3/4 inline-block text-center text-lg">
                "My property is rented in a week and the whole process is taken
                care very professionally. Great Job and I am very pleased with
                the team's efforts !!"
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide id="client 4">
            <div className="flex flex-col justify-center items-center space-y-10">
              <div className="flex justify-center items-center space-x-5">
                <img src={client4} alt="client" className="h-16" />
                <p className="font-semibold text-base">
                  Sara Khan <br />
                  <span className="text-base font-extralight"></span>
                  Satisfied Client
                </p>
              </div>
              <p className="w-3/4 inline-block text-center text-lg">
                "Fantastic working with these guys! They understood the
                requirements and taste for the kind of property we were looking
                and that saved a lot of time and effort. Highly recommended if
                anyone is looking for professional property consultants."
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-1/2 float-right flex flex-col space-y-20 justify-center items-center">
        <img src={stars} alt="review" className="w-2/5 absolute right-0 top-2" />
        <h1 className="mx-auto mr-20 font-bold text-6xl text-mpurple tracking-[.1em]">
          Customer <br />
          <span className="font-light tracking-[.4em]"> Review</span>
        </h1>
      </div>
    </div>
  );
};

export default CustomerReview;
