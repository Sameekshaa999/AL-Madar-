import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import client2 from "../Zimages/index/client2.png";
import client3 from "../Zimages/index/client3.png";
import client4 from "../Zimages/index/client4.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Section2 = () => {
  const sentSucces = () => toast.success("Message Sent!", { autoClose: 2000 });
  const sentError = () =>
    toast.error("Error, Please try again!", { autoClose: 2000 });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9gsoihm",
        "template_mdxtz2p",
        form.current,
        "dkUcOspLFMfktkd7D"
      )
      .then(
        (result) => {
          sentSucces();
        },
        (error) => {
          sentError();
        }
      );
  };
  return (
    <div className=" font-montserrat">
      <div className="lg:flex lg:justify-center lg:space-x-20 m-auto mx-10 lg:mx-0 py-3 lg:py-5">
        <div className="w-auto bg-mpurple rounded-xl p-5 ">
          <p className="text-white text-lg md:text-2xl font-normal mb-3">
            Get In Touch
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-col justify-evenly font-montserrat text-mpurple"
          >
            <input
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-xs md:text-base leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              required
              name="Name"
              type="text"
              placeholder="Name *"
            />
            <br />
            <input
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-xs md:text-base leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              required
              name="Email"
              type="text"
              placeholder="Email *"
            />
            <br />
            <input
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-xs md:text-base leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              required
              name="Number"
              type="tel"
              placeholder="Number *"
            />
            <br />
            <textarea
              className="mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-xs md:text-base leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              required
              rows="7"
              cols="47"
              type="text"
              placeholder="Message *"
            ></textarea>
            <button
              // onClick={sentSucces}
              type="submit"
              value="Submit"
              className="cursor-pointer m-auto bg-mblue hover:bg-mblue text-mpurple text-xs md:text-base font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
            <ToastContainer />
          </form>
        </div>
        <div className="mt-5 md:mt-0 text-mpurple inline-block lg:w-1/3">
          <h1 className="font-medium text-lg md:text-2xl">
            Our Happy Customers
          </h1>
          <div className="mt-3">
            <div className="flex">
              <img src={client2} alt="1" className="w-12 h-12 md:w-14" />
              <h2 className="m-4 font-medium">Anna Smith</h2>
            </div>
            <p className="text-xs md:text-sm ">
              “I have given my property to them for rental management for the
              last 3 years and it has been a very satisfactory experience. The
              rentals have come on time and my property is also being maintained
              neatly. I would gladly recommend Al Madar to all”
            </p>
          </div>
          <div className="mt-3">
            <div className="flex">
              <img src={client3} alt="2" className="w-12 h-12 md:w-14" />
              <h2 className="m-4 font-medium">Mohammad Ali</h2>
            </div>
            <p className="text-xs md:text-sm">
              "My property is rented in a week and the whole process is taken
              care very professionally. Great Job and I am very pleased with the
              team's efforts !!"
            </p>
          </div>
          <div className="mt-3">
            <div className="flex">
              <img src={client4} alt="3" className="w-12 h-12 md:w-14" />
              <h2 className="m-4 font-medium">Sara Khan</h2>
            </div>
            <p className="text-xs md:text-sm">
              Fantastic working with these guys! They understood the
              requirements and taste for the kind of property we were looking
              and that saved a lot of time and effort. Highly recommended if
              anyone is looking for professional property consultants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
