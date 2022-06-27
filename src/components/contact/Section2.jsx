import React from "react";
import office from '../Zimages/Al-Madar-office.jpg';

const Section2 = () => {
  return (
    <div>
      <div className="contact-gradient2 flex justify-center text-white m-auto">
        <img src={office} alt="office" className="h-30vh"/>
        <div className="flex-col">
          <p>
            Bldg. No. 161 - Al Muntazah St. 330 Al Hilal Area 41 - P.O.Box: 2329
            Doha, Qatar
          </p>
          <button>View on Map</button>
        </div>
      </div>
      <div className="flex">
          <div>
            <form>
                <input type='text' placeholder="Name *"/> <br/>
                <input type='text' placeholder="Email *"/> <br/>
                <input type='text' placeholder="Number *"/> <br/>
                <input type='text' placeholder="Message *" textarea=''/> <br/>
            </form>
          </div>
          <div>
              
          </div>
      </div>
    </div>
  );
};

export default Section2;
