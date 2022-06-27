import React from "react";
import contactHome from "../Zimages/contactHome.svg";
import contactArrow from "../Zimages/contactArrow.svg";

const Section1 = () => {
  return (
    <div className="pt-24">
      <div className="contact-gradient1 py-5 text-center text-white">
        <h1>Contact Al-Madar</h1>
        <p>call us at : +974 44675405</p>
        <div className="flex mt-4 ">
          <div className="">
            <h1>Existing Tenants</h1>
            <p>
              For our current residents we have a complete set of tools and
              procedures to make your stay with us more comfortable and
              rewarding.
            </p>
          </div>
          <div className="">
            <h1>Prospective Residents</h1>
            <p>
              As a prospective tenant, we can help you through the process of
              finding and applying for the home of your dreams.
            </p>
          </div>
          <div className="">
            <h1>Existing Clients/Owners</h1>
            <p>
              To fit your needs as a Landlord/Owner. We tailor our services to
              ensure that you have the highest level of service for your home.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex space-between justify-center">
          <img src={contactHome} alt="contactHome" className="h-10" />
          <p className="pt-3">New Clients (Property Owners)</p>
        </div>
        <div className="">
          <p className="text-center">
            Looking for the best property management in Qatar? <br/> 
            Look no further schedule a free consultation by connecting <br/>
            directly with the team or simply give us a call: +974 44675405
          </p>
          <img src={contactArrow} alt="contactArrow" className="h-10 m-auto" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
