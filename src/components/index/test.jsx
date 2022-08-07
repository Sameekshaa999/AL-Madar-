import React from "react";
import { Flip, Fade, Slide } from "react-reveal";
import mv1 from "../Zimages/index/mv1.jpeg";
import mv2 from "../Zimages/index/mv2.jpg";
import mv3 from "../Zimages/index/mv3.jpg";
import target from "../Zimages/index/target.png";
import vision from "../Zimages/index/vision.png";

const MV = () => {
  return (
    <div className="2xl:max-w-[1200px] 2xl:mx-auto flex flex-col lg:flex-row-reverse justify-center items-center mx-4 my-10 font-montserrat text-mpurple ">
      <div className="flex flex-col justify-center items-center space-y-1 lg:space-y-20 lg:w-1/2 mr-0 lg:mr-20 2xl-mr-0">
        <div className="flex mb-5">
          <Slide bottom><img src={target} alt="vision" className="h-12 lg:h-28" /></Slide>
          <Fade right cascade>
          <div className="flex-col text-mpurple">
            <h2 className="text-2xl lg:text-4xl font-semibold">Mission</h2>
            <p className="lg:mt-4 lg:text-lg lg:leading-relaxed inline-block ">
              Our Mission is to maintain the credibility and vigorously protect
              the reputation we have already gained through diligence,
              dedication and our total commitment to our Clients using the most
              advance technologies in pursuit of continued client satisfaction
              and excellence in the management of properties
            </p>
          </div>
          </Fade>
        </div>
        <div className="flex mt-5">
          <Slide bottom><img src={vision} alt="vision" className="h-12 lg:h-28" /></Slide>
          <Fade right cascade>
          <div className="flex-col text-mpurple">
            <h2 className="text-2xl lg:text-4xl font-semibold">Vision</h2>
            <p className="lg:mt-4 lg:text-lg lg:leading-relaxed inline-block ">
              Our Vision is to achieve our future goals by closely adhering to
              high standards and technicalities that sustain the company's
              advanced position in local and regional markets
            </p>
          </div>
          </Fade>
        </div>
      </div>
      <Flip top cascade>
      <div className="flex flex-wrap lg:flex-col justify-center items-center lg:w-1/2 my-5 lg:my-0 ">
        <img
          src={mv1}
          alt="mv1"
          className="h-24 md:h-40 lg:h-56 p-1 lg:p-0"/>
        <img src={mv2} alt="mv2" className="h-24 md:h-40 lg:h-56 lg:pl-40 p-1 lg:p-0" />
        <img src={mv3} alt="mv3" className="h-24 md:h-40 lg:h-56 p-1 lg:p-0" />
      </div>
      </Flip>
      
    </div>
  );
}

export default MV;