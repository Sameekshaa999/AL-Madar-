import React from "react";
import office from "../Zimages/Al-Madar-office.jpg";

const Section2 = () => {
  return (
    <div>
      <div className="contact-gradient2 flex justify-center text-white m-auto py-5">
        <img src={office} alt="office" className="h-30vh rounded-xl " />
        <div className="flex-col p-10">
          <p className="font-Montserrat text-white">
            Bldg. No. 161 - Al Muntazah St. <br/> 330 <br/> Al Hilal Area 41 - P.O.Box: 2329 <br/> 
            Doha, Qatar
          </p>
          <button className="border-2 rounded-md mt-4 px-3 font-Montserrat text-white">View on Map</button>
        </div>
      </div>
      <div className="flex ml-20 py-5">
        <div className="bg-purple rounded-xl p-5 ">
          <p className="font-Montserrat text-white text-2xl font-normal mb-3">Get In Touch</p>
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
              placeholder="Email *" />
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
              name="message" rows="5" cols="40" 
              type="text"
              placeholder="Message *">
            </textarea>
          </form>
          <button class="m-auto bg-bluee hover:bg-bluee font-Montserrat text-mpurple font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Send
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Section2;
