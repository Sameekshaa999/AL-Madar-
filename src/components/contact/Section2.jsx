import React from "react";
import office from "../Zimages/contact/Al-Madar-office.jpg";

const Section2 = () => {
  return (
    <div className="snap-align-none lg:snap-start pt-10 lg:pt-32 font-montserrat contact-gradient2 flex flex-col sm:flex-row space-y-6 sm:space-x-6 justify-center items-center py-8 px-10">
        <div>
          <img
            src={office}
            alt="office"
            className="h-40 md:h-48 lg:h-60 rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-white text-center sm:text-left text-sm md:text-base">
            Bldg. No. 161 - Al Muntazah St. <br /> 330 <br /> Al Hilal Area 41 -
            P.O.Box: 2329 <br />
            Doha, Qatar
          </p>
          <div className="flex justify-center sm:justify-start">
            <a
              href="https://www.google.com/maps/place/Al+Madar+Holding/@25.2556694,51.5247537,17z/data=!3m1!4b1!4m5!3m4!1s0x3e45cffa11911a65:0x32a2632a55fc537c!8m2!3d25.2556699!4d51.5246482"
              rel="noreferrer"
              target="_blank"
            >
              <button className="border-2 rounded-md mt-4 md:mt-8 p-1 px-2 md:px-3 sm:mx-0 text-white text-xs md:text-base animate-bounce">
                View on Map
              </button>
            </a>
          </div>
        </div>
      </div>
  );
};

export default Section2;
