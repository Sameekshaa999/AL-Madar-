import React from 'react'
import polygon from "../Zimages/Polygon.png"
import homeinsurance from "../Zimages/home-insurance.png"
import rectangle from "../Zimages/Rectangle.png"
import settings from "../Zimages/settings-gears.png"
import broom from "../Zimages/flying-broom.png"

const AllServices = () => {
  return (
    <div className='xl:flex xl:justify-evenly my-10'>
        <div className='relative border-2 w-max '>
            <img src={polygon} alt='' className=' md:w-[21.5rem] md:h-[9.438rem]'/>
            <h1 className='absolute top-10 left-14 font-Montserrat text-base md:text-xl text-white font-bold'>Tenancy Management</h1>
            <div className='absolute top-28 left-36 md:top-20 md:left-[7.5rem] bg-[#25215c] rounded-full w-12 md:w-24 h-12 md:h-24 flex justify-center items-center'>
                <img src={homeinsurance} alt='' className='h-7 md:h-14'/>
            </div>
            <ul className='mt-10 mb-5 md:ml-20 font-Montserrat text-mpurple text-sm md:text-base font-normal list-disc' >
                <li>Property Manager</li>
                <li>Tenant profiling</li>
                <li>Rent collection  renewals</li>
                <li>Legal procedures</li>
                <li>Marketing </li>
                <li>Property staging</li>
                <li>Property inspections</li>
                <li>Preparation of vacant units</li>
                <li>Tenant exit inspection</li>
                <li>Supervision of in-unit <br/> maintenance</li>
                <li>Monthly Reports</li>
                <li>Conditional Audits</li>
                <li>Defects Liability Management</li>
                <li>3rd Party Testing</li>
                <li>Building Handover Process</li>
                <li>Space Management</li>
            </ul>
            <img src={rectangle} alt='' className=''/>
        </div>
        <div className='relative border-2 w-max '>
            <img src={polygon} alt='' className=''/>
            <h1 className='absolute top-10 left-16 font-Montserrat text-xl text-white font-bold'>Facility Management</h1>
            <div className='absolute top-20 left-[7.5rem] bg-[#25215c] rounded-full w-24 h-24 flex justify-center items-center'>
                <img src={settings} alt='' className='h-14'/>
            </div>
            <ul className='mt-10 mb-5 ml-20 font-Montserrat text-mpurple text-sm md:text-base font-normal list-disc'>
                <li>Energy management <br/> services</li>
                <li>Preventive maintenance</li>
                <li>24x7 call centre</li>
                <li>Quality, Health and Safety</li>
                <li>Fire alarm and firefighting PPM</li>
                <li>Generator maintenance</li>
                <li>Call Center & Helpdesk</li>
                <li>Contract Management</li>
                <li>AFM System Integration</li>
                <li>Utilities & Infrastructure <br/> Management</li>
                <li>Life Cycle Management</li>
                <li>HSEQ Compliance and <br/> Management</li>
                <li>Performance Management</li>
                <li>FM Consultancy</li>
            </ul>
            <img src={rectangle} alt='' className=''/>
        </div>
        <div className='relative border-2 w-max'>
            <img src={polygon} alt='' className=''/>
            <h1 className='absolute top-10 left-24 font-Montserrat text-xl text-white font-bold'>Other Services</h1>
            <div className='absolute top-20 left-[7.5rem] bg-[#25215c] rounded-full w-24 h-24 flex justify-center items-center'>
                <img src={broom} alt='' className='h-14'/>
            </div>
            <ul className='mt-10 mb-5 ml-20 font-Montserrat text-mpurple text-sm md:text-base font-normal list-disc'>
                <li>Mechanical, Electrical and <br/> Plumbing</li>
                <li>Heating. Ventilation and Air <br/> Conditioning</li>
                <li>Minor Civil Works</li>
                <li>Fire Control & Detection <br/> Management</li>
                <li>CCTV & Access Control</li>
                <li>Specialized Services</li>
                <li>Janitorial Services</li>
                <li>Security Services</li>
                <li>Concierge & Reception</li>
                <li>Landscaping & Irrigation works</li>
                <li>Fleet Management</li>
                <li>Waste Management</li>
                <li>Pest Control Services</li>
                <li>Hospitality Support Services</li>
            </ul>
            <img src={rectangle} alt='rectangle' className=''/>
        </div>
        
    </div>
  )
}

export default AllServices;