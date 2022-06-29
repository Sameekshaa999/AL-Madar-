import React from "react";
import stripes from "../Zimages/heading_stripes.svg";
import qatar1 from "../Zimages/qatar_ourproperties_big.png";
import qatar2 from "../Zimages/qatar_ourproperties_small.png";
import dubai1 from "../Zimages/dubai_ourproperties_big.png";
import dubai2 from "../Zimages/dubai_ourproperties_small.png";

const Properties = () => {
  return (
    <div className="h-screen-less px-4 my-10 py-4 mx-auto grid bg-slate-500 font-montserrat relative">
      <div className="mx-auto">
        <span className="justify-center inline-flex ">
          <img src={stripes} alt="" className="h-10 lg:h-20 -z-10" />
          <h2 className="text-2xl font-semibold text-mpurple mt-1.5 -ml-4 lg:-ml-7 lg:text-5xl lg:mt-7 lg:text-left ">
            Our
          </h2>
          <div className="w-2"></div>
          <h2 className="lg:mx-0 text-2xl font-bold text-mblue mt-1.5 lg:text-5xl lg:mt-7 lg:text-left ">
            Properties
          </h2>
        </span>
      </div>
      <h3 className="hidden md:flex mx-auto text-xl text-black font-light mt-1.5 lg:text-xl lg:mt-2 text-center ">
        We want to make your experience in finding your next dream home <br />
        an enjoyable one!
      </h3>
      <h3 className="md:hidden text-md text-black font-light mt-1.5 text-center ">
        We want to make your experience in finding <br />
        your next dream home an enjoyable one!
      </h3>
      <div className="grid lg:mt-2 lg:px-48 grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2">
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
                <h4 className="flex items-center justify-center h-full text-white text-center text-sm lg:text-3xl uppercase font-regular">
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
              className="h-full scale-y-105 scale-x-125 md:transform-none"
            />
          </div>
          <div className="order-2 md:order-1 basis-1/3 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2">
            <img src={dubai2} alt="dubai property 1" className="p-1" />
            <div className="p-1">
              <div className="our-properties-gradient w-full h-full">
                <h4 className="flex items-center justify-center h-full text-white text-center text-sm lg:text-3xl uppercase font-regular">
                  Properties <br />
                  in Dubai
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
