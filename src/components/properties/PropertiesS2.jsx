import React from "react";

import propertyIcon from "../Zimages/propertyIcon.png";
import property1 from "../Zimages/Property1.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

function PropertyCard(props) {
  return (
    <li className="flex flex-col justify-start items-start font-Montserrat text-mpurple font-normal shadow-xl p-0">
      <img src={props.image} alt="Property1" className="" />
      <img src={propertyIcon} alt="Icon" className="absolute w-10 ml-2 mt-2" />
      <p className="font-medium text-2xl p-2">{props.name}</p>
      <p className="text-xl pl-2">{props.rooms}</p>
      <p className="font-bold text-xl p-2">{props.price}</p>
    </li>
  );
}

const PropertiesS2 = () => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto font-montserrat text-mpurple my-4 px-16 lg:px-8">
        <div className="flex flex-col space-y-0">
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
    // <div className="relative flex h-screen w-screen font-montserrat text-mpurple">
    //   <div className="flex">
    //     <div className="flex flex-col">
    //       <h1 className="text-3xl font-bold ">POPULAR PROPERTIES</h1>

    //       <div className="flex justify-center">
    //         <div className="absolute px-2 top-24 w-5/6 h-[90%]">
    // <Swiper
    //   slidesPerView={4}
    //   spaceBetween={30}
    //   centeredSlides={false}
    //   autoplay={{
    //     delay: 3000,
    //   }}
    //   // pagination={{}}
    //   modules={[Autoplay, Pagination]}
    //   className="border-1"
    // >
    //   <SwiperSlide id="client 1">
    //     <PropertyCard
    //       image={property1}
    //       name="1"
    //       rooms="2 BHK"
    //       price="4,950 QAR"
    //     />
    //   </SwiperSlide>
    //   <SwiperSlide id="client 1">
    //     <PropertyCard
    //       image={property1}
    //       name="2"
    //       rooms="2 BHK"
    //       price="4,950 QAR"
    //     />
    //   </SwiperSlide>
    //   <SwiperSlide id="client 1">
    //     <PropertyCard
    //       image={property1}
    //       name="3"
    //       rooms="2 BHK"
    //       price="4,950 QAR"
    //     />
    //   </SwiperSlide>
    //   <SwiperSlide id="client 1">
    //     <PropertyCard
    //       image={property1}
    //       name="4"
    //       rooms="2 BHK"
    //       price="4,950 QAR"
    //     />
    //   </SwiperSlide>
    //   <SwiperSlide id="client 1">
    //     <PropertyCard
    //       image={property1}
    //       name="5"
    //       rooms="2 BHK"
    //       price="4,950 QAR"
    //     />
    //   </SwiperSlide>
    //   <SwiperSlide id="client 1">
    //     <PropertyCard
    //       image={property1}
    //       name="6"
    //       rooms="2 BHK"
    //       price="4,950 QAR"
    //     />
    //   </SwiperSlide>
    // </Swiper>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <li className="my-10">
    //       <h1 className="mx-40 my-5 font-Montserrat text-mpurple text-3xl font-bold">
    //         QATAR PROPERTIES
    //       </h1>
    //       <ul className="flex space-x-10 mx-40">
    //         <PropertyCard
    //           image={property1}
    //           name="Fully furnished"
    //           rooms="2 BHK"
    //           price="4,950 QAR"
    //         />
    //         <PropertyCard
    //           image={property1}
    //           name="Fully furnished"
    //           rooms="2 BHK"
    //           price="4,950 QAR"
    //         />
    //         <PropertyCard
    //           image={property1}
    //           name="Fully furnished"
    //           rooms="2 BHK"
    //           price="4,950 QAR"
    //         />
    //         <PropertyCard
    //           image={property1}
    //           name="Fully furnished"
    //           rooms="2 BHK"
    //           price="4,950 QAR"
    //         />
    //       </ul>
    //     </li>

    //     <li className="my-10">
    //       <h1 className="mx-40 my-5 font-Montserrat text-mpurple text-3xl font-bold">
    //         DUBAI PROPERTIES
    //       </h1>
    //       <ul className="flex space-x-10 mx-40">
    //         <PropertyCard
    //           image={property1}
    //           name="Fully furnished"
    //           rooms="2 BHK"
    //           price="4,950 QAR"
    //         />
    //         <PropertyCard
    //           image={property1}
    //           name="Fully furnished"
    //           rooms="2 BHK"
    //           price="4,950 QAR"
    //         />
    //         <PropertyCard
    //           image={property1}
    //           name="Fully furnished"
    //           rooms="2 BHK"
    //           price="4,950 QAR"
    //         />
    //         <PropertyCard
    //           image={property1}
    //           name="Fully furnished"
    //           rooms="2 BHK"
    //           price="4,950 QAR"
    //         />
    //       </ul>
    //     </li>
    // </div>
  );
};

export default PropertiesS2;
