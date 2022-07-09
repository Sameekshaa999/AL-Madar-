import React from 'react'
import office_building from "../Zimages/office_building.png";
import telephone from "../Zimages/telephone.png";
import email from "../Zimages/email.png"

const ServicesExtra = () => {
  return (
    <div className="flex space-x-32 justify-center font-Montserrat text-mpurple font-normal m-auto my-20 bg-white">
      <div className="flex flex-col justify-center items-center">
        <img src={office_building} alt="whychooseus" className="w-20 m-7"/>
        <h1>Head Office</h1>
        <p className="font-semibold">Al Muntazah, Doha, Qatar</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={telephone} alt="featuredprojects" className="w-20 m-7"/>
        <h1>Call us</h1>
        <p className="font-semibold">+974 44675405</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={email} alt="findyourplace" className="w-20 m-7"/>
        <h1>Email us</h1>
        <p className="font-semibold">realestate@almadar-holding.com</p>
      </div>
    </div>
  )
}

export default ServicesExtra