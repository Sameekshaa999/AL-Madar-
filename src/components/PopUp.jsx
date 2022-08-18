import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PopUp(props) {
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
  return props.trigger ? (
    <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center services-bg ">
      <div className="w-auto bg-mpurple rounded-xl p-5 font-montserrat">
        <div className="relative flex items-center ">
          <p className="text-white text-lg md:text-2xl font-normal mb-3">
            Get In Touch
          </p>
          <button
            onClick={() => props.setTrigger(false)}
            className="absolute top-0 right-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-white rounded-full"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {props.children}
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
            placeholder="Mobile Number *"
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
    </div>
  ) : (
    ""
  );
}

export default PopUp;
