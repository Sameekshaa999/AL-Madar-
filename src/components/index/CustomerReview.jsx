import React from "react";
import stars from "../Zimages/review_stars.png";
import client from "../Zimages/client.png";
import quotes from "../Zimages/quotes.png";
import dots from "../Zimages/dot_series_design.png";

const CustomerReview = () => {
  return (
    <div className="h-screen-less px-4 py-4 mx-auto grid font-montserrat relative overflow-clip">
      <div className="customer-review-gradient w-1/2"></div>
      <img
        src={quotes}
        className="absolute scale-50 top-[8%] left-[2%]"
        alt="client"
      />

      <span className="inline-flex items-end absolute top-40 left-40">
        <img src={client} className="h-32" alt="client" />

        <span className="text-white text-center px-4 pb-2">
          <h2 className="font-semibold text-xl">Diana Williams</h2>
          <h2 className="font-regular text-md">Satisfied Client</h2>
        </span>
      </span>
      <h3 className="absolute top-[45%] left-[12%] max-w-[30rem] text-white text-center">
        "Al Madar Property Management is all you need to ensure that things are
        executed in a orderly fashion. Once you decide to have a partnership
        with them, they will alleviate any stress, headaches, & pain of renting
        properties. I have witnessed their work hard to find the best tenants
        and will continue to use its services."
      </h3>
      <img
        src={quotes}
        className="absolute scale-50 rotate-180 bottom-[15%] left-[47%]"
        alt="client"
      />
      <img
        src={dots}
        className="absolute scale-50 rotate-180 bottom-[15%] left-[47%]"
        alt="client"
      />
    </div>
  );
};

export default CustomerReview;
