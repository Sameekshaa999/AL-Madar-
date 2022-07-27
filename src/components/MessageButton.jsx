import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
  function MessageButton(){
    const notify = () => toast.success("Message Sent!", {autoClose:2000});

    return (
      <div>
        <button 
        onClick={notify} 
        type="submit" 
        value="Submit"
        className="cursor-pointer m-auto bg-mblue hover:bg-mblue text-mpurple text-xs md:text-base font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Send
        </button>
        <ToastContainer />
      </div>
    );
  }
  export default MessageButton;