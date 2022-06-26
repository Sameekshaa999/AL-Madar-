import React from "react";
import mv1 from "../Zimages/mv1.png";
import mv2 from "../Zimages/mv2.png";
import mv3 from "../Zimages/mv3.png";
import target from "../Zimages/target.png";
import vision from "../Zimages/vision.png";

const MV = () => {
  return (
    <>
      <div className="mx-auto h-screen">
        <div className="max-w-[1240px] mx-auto text-white">
          <div className="grid lg:grid-cols-2 gap-x-16 px-4 pt-12 font-montserrat">
            <div className="">
              <img src={mv1} alt="mv1" className="h-32 lg:h-56" />
              <img src={mv2} alt="mv2" className="h-32 lg:h-56 lg:ml-44" />
              <img src={mv3} alt="mv3" className="h-32 lg:h-56" />
            </div>

            <div className="flex flex-col">
              <div className="my-8 inline-flex">
                <img src={target} alt="target" className="h-32" />
                <div className="text-mpurple">
                  <h2 className="lg:text-4xl font-semibold">Mission</h2>
                  <p className="lg:mt-4 lg:text-xl lg:leading-relaxed">
                    Our Mission is to maintain the credibility and vigorously
                    protect the reputation we have already gained through
                    diligence, dedication and our total commitment to our
                    Clients using the most advance technologies in pursuit of
                    continued client satisfaction and excellence in the
                    management of properties
                  </p>
                </div>
              </div>
              <div className="my-8 inline-flex">
                <img src={vision} alt="vision" className="h-32" />
                <div className="text-mpurple">
                  <h2 className="lg:text-4xl font-semibold">Vision</h2>
                  <p className="lg:mt-4 lg:text-xl lg:leading-relaxed">
                    Our Vision is to achieve our future goals by closely
                    adhering to high standards and technicalities that sustain
                    the company's advanced position in local and regional
                    markets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MV;
