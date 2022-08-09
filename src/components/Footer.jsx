import React from "react";
import { Link } from "react-router-dom";
import Brochure from "../components/Zimages/services2/brochure.png";
import Logo from "../components/Zimages/navbar/almadar-logo.jpg";
import Time from "../components/Zimages/footer/time_footer.png";
import Phone from "../components/Zimages/footer/phone_footer.png";
import Email from "../components/Zimages/footer/email_footer.png";
import Help from "../components/Zimages/footer/help_footer.png";
import Brochure_ from "../components/Zimages/footer/Brochure_.pdf"

import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-gradient font-montserrat tracking-wide text-sm text-white z-50">
      <div className="grid md:flex grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-8 sm:gap-x-4 sm:justify-items-center md:flex-row md:space-x-8 md:justify-between max-w-[1200px] mx-auto py-8 px-10">
        <div className="flex flex-col md:space-y-2">
          <span className="tracking-wider font-semibold sm:font-bold text-white uppercase">
            Al-Madar Property Management
          </span>

          <div className="flex items-end sm:items-center py-2">
            <Link to="/" alt="home">
              <img className="h-32 sm:h-24 w-auto" src={Logo} alt="logo" />
            </Link>
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.google.com/maps/place/Al+Madar+Holding/@25.2556694,51.522565,17z/data=!3m1!4b1!4m5!3m4!1s0x3e45cffa11911a65:0x32a2632a55fc537c!8m2!3d25.2556694!4d51.5247537"
                rel="noreferrer"
                target="_blank"
                className="sm:p-2 pl-4"
                alt="location"
              >
                <span className="text-xs font-light sm:font-normal sm:leading-relaxed hover:text-mblue">
                  Bldg. No. 161 <br /> Al Muntazah St. 330 <br /> Al Hilal Area
                  41 <br /> P.O.Box: 2329 <br /> Doha, Qatar
                </span>
              </a>
              <div className="sm:hidden flex flex-row space-x-6 pl-4">
                <a
                  href="http://www.facebook.com/pages/Almadar-Holding/368129056608301"
                  rel="noreferrer"
                  target="_blank"
                  className="bg-white rounded-lg"
                >
                  <ImFacebook2 className="w-6 h-6" fill="#4267B2" />
                </a>
                <a
                  href="https://twitter.com/AlmadarHolding"
                  rel="noreferrer"
                  target="_blank"
                  className="flex justify-center items-center bg-white rounded-lg w-6 h-6"
                >
                  <FaTwitterSquare className="w-8 h-8" fill="#1DA1F2" />
                </a>
                <a
                  href="http://www.linkedin.com/company/almadar-holding"
                  rel="noreferrer"
                  target="_blank"
                  className="flex justify-center items-center bg-white rounded-lg w-6 h-6"
                >
                  <ImLinkedin className="w-6 h-6" fill="#0072b1" />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex sm:flex-row sm:space-x-6 sm:items-start">
            <a
              href="http://www.facebook.com/pages/Almadar-Holding/368129056608301"
              rel="noreferrer"
              target="_blank"
              className="bg-white rounded-lg"
            >
              <ImFacebook2 className="w-8 h-8" fill="#4267B2" />
            </a>

            <a
              href="https://twitter.com/AlmadarHolding"
              rel="noreferrer"
              target="_blank"
              className="flex justify-center items-center bg-white rounded-lg w-8 h-8"
            >
              <FaTwitterSquare className="w-10 h-10" fill="#1DA1F2" />
            </a>
            <a
              href="http://www.linkedin.com/company/almadar-holding"
              rel="noreferrer"
              target="_blank"
              className="flex justify-center items-center bg-white rounded-lg w-8 h-8"
            >
              <ImLinkedin className="w-8 h-8" fill="#0072b1" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:space-y-2">
          <span className="tracking-wider font-semibold sm:font-bold text-white uppercase mb-2">
            Contact
          </span>
          <div className="flex flex-col text-xs justify-between">
            <span className="flex py-2">
              <img className="h-4 w-auto mt-0.5" src={Time} alt="timings" />
              <span href="/" className="pl-2 text-white  hover:text-mblue">
                Office hours: Sun - Thu <br />
                8am to 5pm
              </span>
            </span>
            <span className="flex py-2">
              <img className="h-4 w-auto mt-0.5" src={Phone} alt="telephone" />
              <span href="/" className="pl-2 text-white  hover:text-mblue">
                Call : +974 44675405
              </span>
            </span>
            <span className="flex py-2">
              <img className="h-4 w-auto mt-0.5" src={Email} alt="email" />
              <span href="/" className="pl-2 text-white  hover:text-mblue">
              ampm@almadar-holding
                <br />
                .com
              </span>
            </span>
            <span className="flex py-2">
              <img className="h-4 w-auto mt-0.5" src={Help} alt="help desk" />
              <span href="/" className="pl-2 text-white  hover:text-mblue">
                24/7 Help Desk <br />
                +974 44671333
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-col md:space-y-4">
          <span className="font-semibold tracking-wider sm:font-bold text-white uppercase mb-2">
            Pages
          </span>
          <div className="flex flex-wrap md:flex-col text-xs">
            <span className="mr-4 mb-1 md:mb-3">
              <Link to="/" className="text-white hover:text-mblue">
                Home
              </Link>
            </span>
            <span className="mr-4 mb-1 md:mb-3">
              <Link to="/about" className="text-white   hover:text-mblue">
                About
              </Link>
            </span>
            <span className="mr-4 mb-1 md:mb-3">
              <Link to="/services" className="text-white   hover:text-mblue">
                Services
              </Link>
            </span>
            <span className="mr-4 mb-1 md:mb-3">
              <Link to="/projects" className="text-white   hover:text-mblue">
                Projects
              </Link>
            </span>
            <span className="mr-4 mb-1 md:mb-3">
              <Link to="/properties" className="text-white   hover:text-mblue">
                Properties
              </Link>
            </span>
            <span className="mr-4 mb-1 md:mb-3">
              <Link to="/contact" className="text-white   hover:text-mblue">
                Contact Us
              </Link>
            </span>
          </div>
        </div>

        <div className="flex flex-col md:space-y-4">
          <span className="font-semibold tracking-wider sm:font-bold text-white uppercase mb-2">
            Our Brochure
          </span>
          <div className="flex relative w-auto justify-start sm:justify-center items-center">
            <img
              className="h-24 lg:h-28 md:w-full"
              src={Brochure}
              alt="brochure"
            />
            <button className="mx-5 absolute rounded-xl text-black font-semibold sm:font-bold text-xs lg:text-sm bg-white-800 hover:-translate-y-1 transition ">
              <div className="inline-flex justify-center items-center px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-0.5 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <a href={Brochure_} download="Al-Madar Property Management ">Download </a>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;