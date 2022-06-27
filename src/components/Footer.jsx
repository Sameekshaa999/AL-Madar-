import React from "react";
import footerbg from "../components/Zimages/Footer_bg.svg";
import { Link } from "react-router-dom";
// import { Link } from "react-router-native";
import Logo from "../components/Zimages/almadar-logo.jpg";
import Time from "../components/Zimages/time_footer.png";
import Phone from "../components/Zimages/phone_footer.png";
import Email from "../components/Zimages/email_footer.png";
import Help from "../components/Zimages/help_footer.png";
import FB from "../components/Zimages/facebook.png";
import Insta from "../components/Zimages/instagram.png";
import Twitter from "../components/Zimages/twitter.png";
import Linkedin from "../components/Zimages/linkedin.png";

const Footer = () => {
  return (
    <footer className="w-full bg-mgrey text-white font-montserrat">
      <div className="footer-gradient absolute">
        <img className="" src={footerbg} alt="/" />
      </div>
      <div className="container mx-auto relative">
        <div className="flex ">
          <div className="w-full flex flex-col py-8 lg:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-white uppercase mb-2">
                Property Management
              </span>

              <div className="flex items-center py-4">
                <Link to="/">
                  <img className="h-32 w-auto" src={Logo} alt="logo" />
                </Link>
                <a
                  href="https://www.google.com/maps/place/Al+Madar+Holding/@25.2556694,51.522565,17z/data=!3m1!4b1!4m5!3m4!1s0x3e45cffa11911a65:0x32a2632a55fc537c!8m2!3d25.2556694!4d51.5247537"
                  className="p-2"
                >
                  <span className="text-sm hover:text-mblue">
                    Bldg. No. 161 <br /> Al Muntazah St. 330 <br /> Al Hilal
                    Area 41 <br /> P.O.Box: 2329 <br /> Doha, Qatar
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white uppercase pl-6 mb-2">
                Contact
              </span>
              <span className="flex py-2">
                <img className="h-4 w-auto mt-1" src={Time} alt="timings" />
                <span
                  href="/"
                  className="pl-2 text-white text-sm hover:text-mblue"
                >
                  Office hours: Sun - Thu <br />
                  8am to 5pm
                </span>
              </span>
              <span className="flex py-2">
                <img className="h-4 w-auto mt-1" src={Phone} alt="telephone" />
                <span
                  href="/"
                  className="pl-2 text-white text-sm hover:text-mblue"
                >
                  Call : +974 44675405
                </span>
              </span>
              <span className="flex py-2">
                <img className="h-4 w-auto mt-1" src={Email} alt="email" />
                <span
                  href="/"
                  className="pl-2 text-white text-sm hover:text-mblue"
                >
                  realestate@almadar-holding
                  <br />
                  .com
                </span>
              </span>
              <span className="flex py-2">
                <img className="h-4 w-auto mt-1" src={Help} alt="help desk" />
                <span
                  href="/"
                  className="pl-2 text-white text-sm hover:text-mblue"
                >
                  24/7 Help Desk <br />
                  +974 44671333
                </span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">
                Pages
              </span>
              <span className="my-2">
                <Link to="/" className="text-white  text-sm hover:text-mblue">
                  Home
                </Link>
              </span>
              <span className="my-2">
                <Link
                  to="/about"
                  className="text-white  text-sm hover:text-mblue"
                >
                  About
                </Link>
              </span>
              <span className="my-2">
                <Link
                  to="/services"
                  className="text-white  text-sm hover:text-mblue"
                >
                  Services
                </Link>
              </span>
              <span className="my-2">
                <Link
                  to="/projects"
                  className="text-white  text-sm hover:text-mblue"
                >
                  Projects
                </Link>
              </span>
              <span className="my-2">
                <Link
                  to="/properties"
                  className="text-white  text-sm hover:text-mblue"
                >
                  Properties
                </Link>
              </span>
              <span className="my-2">
                <Link
                  to="/contact"
                  className="text-white  text-sm hover:text-mblue"
                >
                  Contact Us
                </Link>
              </span>
            </div>
            <div className="flex flex-col ">
              <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">
                Follow Us
              </span>
              <span className="flex flex-row justify-between items-center my-4">
                <a href="/">
                  <img className="h-8" src={FB} alt="facebook page" />
                </a>
                <a href="/">
                  <img className="h-8" src={Insta} alt="instagram page" />
                </a>
              </span>
              <span className="flex flex-row justify-between items-center my-4">
                <a href="/">
                  <img className="h-8" src={Twitter} alt="twitter page" />
                </a>
                <a href="/">
                  <img className="h-8" src={Linkedin} alt="linkedin page" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
