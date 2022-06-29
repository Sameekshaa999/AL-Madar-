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
              delay: 3000,
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
                  <h2 className="font-normal text-md">Satisfied Client</h2>
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

            <SwiperSlide id="client 2">
              <span className="inline-flex items-end absolute top-[5%] left-[5%]">
                <img src={client2} className="h-32" alt="client" />

                <span className="text-white text-center px-4 pb-2">
                  <h2 className="font-semibold text-xl">Anna Smith</h2>
                  <h2 className="font-normal text-md">Satisfied Client</h2>
                </span>
              </span>
              <h3 className="absolute text-xl leading-relaxed top-[35%] left-[5%] text-white text-left">
                “I have given my property to them for rental management for the
                last 3 years and it has been a very satisfactory experience. The
                rentals have come on time and my property is also being
                maintained neatly. I would gladly recommend Al Madar to all!”
              </h3>
            </SwiperSlide>
            <SwiperSlide id="client 3">
              <span className="inline-flex items-end absolute top-[5%] left-[5%]">
                <img src={client3} className="h-32" alt="client" />

                <span className="text-white text-center px-4 pb-2">
                  <h2 className="font-semibold text-xl">Mohammad Ali</h2>
                  <h2 className="font-normal text-md">Satisfied Client</h2>
                </span>
              </span>
              <h3 className="absolute text-xl leading-relaxed top-[35%] left-[5%] text-white text-left">
                "My property is rented in a week and the whole process is taken
                care very professionally. Great Job and I am very pleased with
                the team's efforts !!"
              </h3>
            </SwiperSlide>
            <SwiperSlide id="client 4">
              <span className="inline-flex items-end absolute top-[5%] left-[5%]">
                <img src={client4} className="h-32" alt="client" />

                <span className="text-white text-center px-4 pb-2">
                  <h2 className="font-semibold text-xl">Sara Khan</h2>
                  <h2 className="font-normal text-md">Satisfied Client</h2>
                </span>
              </span>
              <h3 className="absolute text-xl leading-relaxed top-[35%] left-[5%] text-white text-left">
                Fantastic working with these guys! They understood the
                requirements and taste for the kind of property we were looking
                and that saved a lot of time and effort. Highly recommended if
                anyone is looking for professional property consultants.
              </h3>
            </SwiperSlide>
          </Swiper>
        </div>
        <img
          src={stars}
          className="absolute w-[35%] top-[4%] right-0"
          alt="client"
        />
        {/* <h3 className="absolute  font-bold text-5xl top-[45%] right-[5%] text-mpurple text-left">
          ... and many more <br /> happy clients!
        </h3> */}
        <div className="absolute top-[45%] right-[6%]">
          <h3 className="mx-auto font-bold text-6xl text-mpurple text-left">
            Customer
          </h3>
          <h3 className="pl-4 tracking-[.6em] font-normal text-4xl text-mpurple text-left">
            Reviews
          </h3>
        </div>
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
