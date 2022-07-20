import React from "react";
import stripes from "../Zimages/index/heading_stripes.svg";
import qatar1 from "../Zimages/index/qatar_ourproperties_big.png";
import qatar2 from "../Zimages/index/qatar_ourproperties_small.png";
import dubai1 from "../Zimages/index/dubai_ourproperties_big.png";
import dubai2 from "../Zimages/index/dubai_ourproperties_small.png";

const Properties = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 font-montserrat text-mpurple mx-40 my-10">
      <div className="flex flex-col justify-center items-center space-y-2 md:space-y-5 ">
        <div className="inline-flex">
        <img src={stripes} alt="" className="h-10 md:h-20" />
        <h1 className="text-2xl md:text-4xl text-center font-bold md:text-center mt-2 md:mt-7"> Our <span className="text-mblue">Properties</span></h1>
        </div>
        <p className="text-left md:text-justify text-sm md:text-lg leading-loose inline-block">
        We want to make your experience in finding your next dream home an enjoyable one!</p>
      </div>
      <div className="flex">

      <div className="flex flex-row md:flex-col">
          <div className="order-2 md:order-1 basis-2/3 p-1 overflow-clip">
            <img
              src={qatar1}
              alt="qatar property 1"
              className="h-full scale-y-105 scale-x-125 md:transform-none "
            />
          </div>
          <div className="order-1 md:order-2 basis-1/3 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2">
            <img src={qatar2} alt="qatar property 2" className="h-full p-1" />
            <div className="p-1">
              <div className="our-properties-gradient w-full h-full">
                <h4 className="flex items-center justify-center h-full text-white text-center text-sm lg:text-2xl uppercase font-normal">
                  Properties <br />
                  in Qatar
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row md:flex-col">
          <div className="order-1 md:order-2 basis-2/3 p-1 overflow-clip">
            <img
              src={dubai1}
              alt="dubai property 1"
              className="h-full scale-y-105 scale-x-125 md:transform-none"/>
          </div>
          <div className="order-2 md:order-1 basis-1/3 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2">
            <div className="p-1">
              <div className="our-properties-gradient w-full h-full">
                <h4 className="flex items-center justify-center h-full text-white text-center text-sm lg:text-2xl uppercase font-normal">
                  Properties <br />
                  in Dubai
                </h4>
              </div>
            </div>
            <img src={dubai2} alt="dubai property 1" className="p-1" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Properties;
