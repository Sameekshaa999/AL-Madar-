import React from "react";
import prop_1_img_1 from "../Zimages/properties/property_1/img_1.png";
import prop_1_img_2 from "../Zimages/properties/property_1/img_2.png";
import prop_1_img_3 from "../Zimages/properties/property_1/img_3.png";
import prop_2_img_1 from "../Zimages/properties/property_2/img_1.png";
// import qatar2 from "../Zimages/index/qatar_ourproperties_small.png";
// import dubai2 from "../Zimages/index/dubai_ourproperties_small.png";
import Headings from "../Headings";
import { Slide } from "react-reveal";

const Properties = () => {
  return (
    <div className="2xl:max-w-[1440px] 2xl:mx-auto overflow-x-hidden overflow-y-hidden flex flex-col justify-center items-center space-y-5 font-montserrat text-mpurple mx-4 lg:mx-40 my-10">
      <div className="flex flex-col justify-center items-center space-y-2 lg:space-y-5 ">
        <Headings first="Our" second="Properties" />
        <p className="text-center lg:text-justify text-sm lg:text-lg lg:leading-loose inline-block">
        We want to make your experience in finding your next dream home an enjoyable one!</p>
      </div>
      <div className="flex flex-col lg:flex-row h-1/2 md:h-auto">

      <div className="flex flex-row lg:flex-col">
          <div className="order-2 lg:order-1 basis-2/3">
            <Slide top>
            <img
              src={prop_1_img_1}
              alt="qatar property 1"
              className="p-0.5 md:p-1"
            />
            </Slide>
          </div>
          <div className="order-1 lg:order-2 basis-1/3 grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-2">
            <Slide left><img src={prop_1_img_2} alt="qatar property 2" className="p-0.5 md:p-1" /></Slide>
            <div className="p-0.5 md:p-1">
              <div className="our-properties-gradient w-full h-full">
                <h4 className="flex items-center justify-center h-full text-white text-center text-xs md:text-lg lg:text-2xl uppercase font-normal">
                  Properties <br />
                  in Qatar
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col">
          <div className="order-1 lg:order-2 basis-2/3">
            <Slide bottom>
            <img
              src={prop_1_img_3}
              alt="dubai property 1"
              className="p-0.5 md:p-1"/>
            </Slide>
          </div>
          <div className="order-2 lg:order-1 basis-1/3 grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-2">
            <div className="p-0.5 md:p-1">
              <div className="our-properties-gradient w-full h-full">
                <h4 className="flex items-center justify-center h-full text-white text-center text-xs md:text-lg lg:text-2xl uppercase font-normal">
                  Properties <br />
                  in Dubai
                </h4>
              </div>
            </div>
            <Slide right><img src={prop_2_img_1} alt="dubai property 1" className="p-0.5 md:p-1" /></Slide>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Properties;
