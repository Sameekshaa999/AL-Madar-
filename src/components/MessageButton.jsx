import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MessageButton(props) {
  const sentSuccess = () => toast.success("Message Sent!", { autoClose: 2000 });
  const sentFailure = () =>
    toast.error("Error! Please try again", { autoClose: 2000 });

  var message = null;

  if (props.status) {
    message = sentSuccess;
  } else {
    message = sentFailure;
  }

  return (
    <div>
      <button
        onClick={message}
        type="submit"
        value="Submit"
        className="cursor-pointer m-auto bg-mblue hover:bg-mblue text-mpurple text-xs md:text-base font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
      <ToastContainer />
    </div>
  );
}
export default MessageButton;
