import React from "react";

import propertyIcon from "../Zimages/propertyIcon.png";
import property1 from "../Zimages/Property1.png";

function PropertyCard(props) {
  return (
    <li className="flex flex-col justify-start items-start font-Montserrat text-mpurple font-normal box-shadow p-0">
      <img src={props.image} alt="Property1" className="" />
      <img src={propertyIcon} alt="Icon" className="absolute w-10 ml-2 mt-2" />
      <p className="font-medium text-2xl p-2">{props.name}</p>
      <p className="text-xl pl-2">{props.rooms}</p>
      <p className="font-bold text-xl p-2">{props.price}</p>
    </li>
  );
}

const PropertiesS2 = () => {
  return (
    <div className="">
      <ul>
        <li className="">
          <h1 className="mx-40 my-5 font-Montserrat text-mpurple text-3xl font-bold">
            POPULAR PROPERTIES
          </h1>
          <ul className="flex space-x-10 mx-40">
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />

            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
          </ul>
        </li>

        <li className="my-10">
          <h1 className="mx-40 my-5 font-Montserrat text-mpurple text-3xl font-bold">
            QATAR PROPERTIES
          </h1>
          <ul className="flex space-x-10 mx-40">
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
          </ul>
        </li>

        <li className="my-10">
          <h1 className="mx-40 my-5 font-Montserrat text-mpurple text-3xl font-bold">
            DUBAI PROPERTIES
          </h1>
          <ul className="flex space-x-10 mx-40">
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
            <PropertyCard
              image={property1}
              name="Fully furnished"
              rooms="2 BHK"
              price="4,950 QAR"
            />
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default PropertiesS2;
