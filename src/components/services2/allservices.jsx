import React from "react";
import facility from "../Zimages/services2/facility.jpg";
import tenancy from "../Zimages/services2/Tenancy.jpg";
import checked from "../Zimages/services2/checked.png"

const AllServices = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-10 pt-24 font-montserrat text-mpurple ">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-32 mx-10 my-10">
        <img src={tenancy} alt="tenancy" className="w-1/2" />
        <div className="flex flex-col space-y-5">
          <h1 className="font-bold text-2xl">Tenancy <span className="text-mblue">Management</span></h1>
          <div className="flex flex-col lg:flex-row lg:space-x-16" >
          <ul className="flex flex-col space-y-2 text-sm md:text-base">
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Property Manager</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Tenant Profiling</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Rent Collection Renewals</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Legal Procedures</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Marketing</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Property Staging</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Property Inspections</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Preparation of Vacant Units</p></li>
          </ul>
          <ul className="flex flex-col space-y-2 text-sm md:text-base">
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Tenant Exit Inspection</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Supervision of in-unit Maintenance</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Monthly Reports</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Conditional Audits</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Defects Liability Management</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> 3rd Party Testing</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Building Handover Process</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p> Space Management</p></li>
          </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:space-x-20 mx-20 my-10">
        <div className="flex flex-col space-y-5">
        <h1 className="font-bold text-2xl">Facility <span>Management</span></h1>
          <div className="flex flex-col lg:flex-row lg:space-x-16" >
          <ul className="flex flex-col space-y-2 text-sm md:text-base">
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>Energy management services</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>Preventive maintenance, including MEP</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>Landscaping and Irrigation Works</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>24x7 call center</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>Quality, Health, and Safety</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>Fire alarm and firefighting PPM</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>Generator maintenance</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>Reception, Call Center & Helpdesk</p></li>
            
          </ul>
          <ul className="flex flex-col space-y-2 text-sm md:text-base">
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>Contract Management</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>CAFM System Integration</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>CCTV & Access Control</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>Security Services</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>Janitorial Services</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>HSEQ Compliance and Management</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>Performance Management</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>Waste Management</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>Pest Control Services</p></li>
            <li className="flex space-x-2"><img src={checked} alt="checked" className="h-5"/><p>FM Consultancy</p></li>
          </ul>
          </div>
        </div>

        <img src={facility} alt="facility" className="lg:w-1/2" />
      </div>
    </div>
  );
};

export default AllServices;
