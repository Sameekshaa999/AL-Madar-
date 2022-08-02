import React from "react";
import mv1 from "../Zimages/index/mv1.jpeg";
import mv2 from "../Zimages/index/mv2.jpg";
import mv3 from "../Zimages/index/mv3.jpg";
import target from "../Zimages/index/target.png";
import vision from "../Zimages/index/vision.png";

const MV = () => {
  return (
    <div className="snap-align-none lg:snap-start pt-0 lg:pt-24 flex flex-col lg:flex-row-reverse justify-center mx-4 lg:mx-20 my-10 font-montserrat text-mpurple ">
      <div className="flex flex-col justify-center items-left space-y-1 lg:space-y-20 lg:w-1/2 float-right">
        <div className="flex mb-5">
          <img src={target} alt="vision" className="h-12 lg:h-28" />
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
          <img src={vision} alt="vision" className="h-12 lg:h-28" />
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
      <div className="flex flex-wrap lg:flex-col justify-center lg:justify-start items-center lg:items-start  lg:w-1/2 lg:float-left my-5 lg:my-0 ">
        <img
          src={mv1}
          alt="mv1"
          className="h-24 md:h-40 lg:h-56 p-1 lg:p-0"/>
        <img src={mv2} alt="mv2" className="h-24 md:h-40 lg:h-56 lg:pl-40 p-1 lg:p-0" />
        <img src={mv3} alt="mv3" className="h-24 md:h-40 lg:h-56 p-1 lg:p-0" />
      </div>
    </div>
  );
}

export default MV;