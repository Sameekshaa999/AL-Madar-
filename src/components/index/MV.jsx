import React from "react";
import mv1 from "../Zimages/index/mv1.png";
import mv2 from "../Zimages/index/mv2.jpg";
import mv3 from "../Zimages/index/mv3.jpg";
import target from "../Zimages/index/target.png";
import vision from "../Zimages/index/vision.png";

const MV = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-center mx-10 md:mx-20 my-10 font-montserrat text-mpurple ">
      <div className="flex flex-col justify-center items-left space-y-1 md:space-y-20 md:w-1/2 float-right">
        <div className="flex mb-5">
          <img src={target} alt="vision" className="h-12 md:h-28" />
          <div className="flex-col text-mpurple">
            <h2 className="text-2xl lg:text-4xl font-semibold">Mission</h2>
            <p className="lg:mt-4 lg:text-lg lg:leading-relaxed">
              Our Mission is to maintain the credibility and vigorously protect
              the reputation we have already gained through diligence,
              dedication and our total commitment to our Clients using the most
              advance technologies in pursuit of continued client satisfaction
              and excellence in the management of properties
            </p>
          </div>
        </div>
        <div className="flex mt-5">
          <img src={vision} alt="vision" className="h-12 md:h-28" />
          <div className="flex-col text-mpurple">
            <h2 className="text-2xl lg:text-4xl font-semibold">Vision</h2>
            <p className="lg:mt-4 lg:text-lg lg:leading-relaxed">
              Our Vision is to achieve our future goals by closely adhering to
              high standards and technicalities that sustain the company's
              advanced position in local and regional markets
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:flex-col justify-center md:justify-start items-center md:items-start space-x-2 md:space-x-0 md:w-1/2 md:float-left my-5 md:my-0 ">
        <img src={mv1} alt="mv1" className="h-32 lg:h-56 mb-2 md:mb-0" />
        <img src={mv2} alt="mv2" className="h-32 lg:h-56 md:ml-40" />
        <img src={mv3} alt="mv3" className="h-32 lg:h-56" />
      </div>
    </div>
  );
};

export default MV;
