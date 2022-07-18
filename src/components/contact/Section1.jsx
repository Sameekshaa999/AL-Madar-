import React from "react";
import contactHome from "../Zimages/contactHome.svg";
import contactArrow from "../Zimages/contactArrow.svg";

const Section1 = () => {
  return (
    <div className="pt-24 font-montserrat text-mpurple font-normal ">
      <div className="contact-gradient1 pt-10 py-5 text-center text-white">
        <h1 className=" text-3xl md:text-5xl font-bold">Contact Al-Madar</h1>
        <p>call us at : +974 44675405</p>
        <div className="flex-wrap md:flex-nowrap flex justify-around space-x-10 items-center my-10 mx-14">
          <div className="inline-block w-1/2">
            <h1 className="mt-5 md:mt-0 text-center text-sm font-bold md:mb-4 md:text-xl">
              Existing Tenants
            </h1>
            <p className="text-xs md:text-base ">
              For our current residents we have a complete set of tools and
              procedures to make your stay with us more comfortable and
              rewarding.
            </p>
          </div>
          <div className="inline-block w-1/2">
            <h1 className="mt-5 md:mt-0 text-center text-sm font-bold md:mb-4 md:text-xl">
              Prospective Residents
            </h1>
            <p className="text-xs md:text-base">
              As a prospective tenant, we can help you through the process of
              finding and applying for the home of your dreams.
            </p>
          </div>
          <div className="inline-block w-1/2">
            <h1 className="mt-5 md:mt-0 text-center text-sm font-bold md:mb-4 md:text-xl">
              Existing Clients/Owners
            </h1>
            <p className="text-xs md:text-base ">
              To fit your needs as a Landlord/Owner. We tailor our services to
              ensure that you have the highest level of service for your home.
            </p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="flex space-between justify-center my-5 md:my-10">
          <img src={contactHome} alt="contactHome" className="h-10" />
          <div className="w-3"></div>
          <p className="pt-3 text-sm md:text-lg font-montserrat text-mpurple font-semibold">
            {" "}
            New Clients (Property Owners)
          </p>
        </div>
        <div className="">
          <p className="text-center my-5 md:my-10 text-xs md:text-base">
            Looking for the best property management in Qatar? <br />
            Look no further schedule a free consultation by connecting <br />
            directly with the team or simply give us a call: +974 44675405
          </p>
          <img
            src={contactArrow}
            alt="contactArrow"
            className="h-10 md:h-16 m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
