import React from "react";

import propertyIcon from "../Zimages/propertyIcon.png";
import property1 from "../Zimages/Property1.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

import client1 from "../Zimages/client1.png";
import client2 from "../Zimages/customer1.png";
import client3 from "../Zimages/customer2.png";
import client4 from "../Zimages/customer3.png";

function PropertyCard(props) {
  return (
    <li className="flex flex-col justify-start items-start font-Montserrat text-mpurple font-normal box-shadow p-0">
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
    <div className="flex h-screen relative">
      <ul>
        <li className="mx-auto">
          <h1 className="mx-40 my-5 font-Montserrat text-mpurple text-3xl font-bold">
            POPULAR PROPERTIES
          </h1>
          <div className="absolute px-20 w-[90%] h-full mx-auto">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
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
        </li>

        {/* <li className="my-10">
          <h1 className="mx-40 my-5 font-Montserrat text-mpurple text-3xl font-bold">
            QATAR PROPERTIES
          </h1>
          <ul className="flex space-x-10 mx-40">
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
          </ul>
        </li>

        <li className="my-10">
          <h1 className="mx-40 my-5 font-Montserrat text-mpurple text-3xl font-bold">
            DUBAI PROPERTIES
          </h1>
          <ul className="flex space-x-10 mx-40">
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
          </ul>
        </li> */}
      </ul>
    </div>
  );
};

export default PropertiesS2;
