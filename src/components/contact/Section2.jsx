import React from "react";
import office from "../Zimages/Al-Madar-office.jpg";
import customer1 from "../Zimages/customer1.png";
import customer2 from "../Zimages/customer2.png";
import customer3 from "../Zimages/customer3.png";

const Section2 = () => {
  return (
    <div className="">
      <div className="contact-gradient2 flex justify-center text-white m-auto py-5">
        <img src={office} alt="office" className="h-30vh rounded-xl " />
        <div className="flex-col p-10">
          <p className="font-Montserrat text-white">
            Bldg. No. 161 - Al Muntazah St. <br /> 330 <br /> Al Hilal Area 41 -
            P.O.Box: 2329 <br />
            Doha, Qatar
          </p>
          <button className="border-2 rounded-md mt-4 px-3 font-Montserrat text-white">
            View on Map
          </button>
        </div>
      </div>
      <div className="flex justify-center space-x-20 m-auto py-5">
        <div className="w-auto bg-mpurple rounded-xl p-5 ">
          <p className="font-Montserrat text-white text-2xl font-normal mb-3">
            Get In Touch
          </p>
          <form className="flex-col justify-evenly">
            <input
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name *"
            />
            <br />
            <input
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email *"
            />
            <br />
            <input
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="Number"
              placeholder="Number *"
            />
            <br />
            <textarea
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              rows="7"
              cols="47"
              type="text"
              placeholder="Message *"
            ></textarea>
          </form>
          <button
            class="m-auto bg-mblue hover:bg-mblue font-Montserrat text-mpurple font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
        <div className="font-Montserrat text-mpurple">
          <h1 className="font-medium text-3xl">Our Happy Customers</h1>
          <div className="mt-3">
            <div className="flex">
              <img src={customer1} alt="1" className="w-16" />
              <h2 className="m-4">Anna Smith</h2>
            </div>
            <p className="text-sm">
              “I have given my property to them for rental management for the
              last 3 <br /> years and it has been a very satisfactory
              experience. The rentals have come <br /> on time and my property
              is also being maintained neatly. I would gladly <br /> recommend
              Al Madar to all”
            </p>
          </div>
          <div className="mt-3">
            <div className="flex">
              <img src={customer2} alt="2" className="w-16" />
              <h2 className="m-4">Mohammad Ali</h2>
            </div>
            <p className="text-sm">
              "My property is rented in a week and the whole process is taken
              care very <br /> professionally. Great Job and I am very pleased
              with the team's efforts !!"
            </p>
          </div>
          <div className="mt-3">
            <div className="flex">
              <img src={customer3} alt="3" className="w-16" />
              <h2 className="m-4">Sara Khan</h2>
            </div>
            <p className="text-sm">
              Fantastic working with these guys! They understood the
              requirements and <br /> taste for the kind of property we were
              looking and that saved a lot of time <br /> and effort. Highly
              recommended if anyone is looking for professional <br /> property
              consultants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
