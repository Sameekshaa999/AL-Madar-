import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import Logo from "../components/Zimages/navbar/almadar-logo.jpg";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <nav className="bg-white font-montserrat w-screen fixed z-50">
      <div className="justify-around px-4 lg:h-auto lg:px-10 mx-auto max-w-[1225px]">
        <div className="flex items-center">
          <Link to="/" className="flex items-center py-4 px-2">
            <img className="h-14 w-auto" src={Logo} alt="logo" />
            <span className="p-2 text-mgrey font-medium">
              Property <br /> Management
            </span>
          </Link>

          <div className="hidden lg:flex flex-row w-full justify-end items-center space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-items-active" : "nav-items"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-items-active" : "nav-items"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-items-active" : "nav-items"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-items-active" : "nav-items"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                isActive ? "nav-items-active" : "nav-items"
              }
            >
              Properties
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "px-2 py-1 text-white font-montserrat transition duration-300 border-2 border-mpurple rounded-lg bg-mpurple"
                  : "px-2 py-1 text-black font-montserrat transition duration-300 border-2 border-mpurple rounded-lg hover:bg-mpurple hover:text-white"
              }
            >
              Contact Us
            </NavLink>
          </div>

          <IoMenu
            className="lg:hidden absolute h-10 w-10 cursor-pointer right-4"
            onClick={() => {
              setNavIsOpen(true);
              console.log(navIsOpen);
            }}
          />

          <div
            class="relative"
            aria-labelledby="slide-over-title"
            role="navigation"
          >
            <div
              className={
                navIsOpen
                  ? "ease-in-out duration-500"
                  : "ease-in-out duration-500 hidden "
              }
            >
              <div class="fixed inset-0 bg-black bg-opacity-80"></div>
            </div>

            <div class={navIsOpen ? "fixed inset-0 overflow-hidden " : ""}>
              <div
                class={
                  navIsOpen ? "absolute inset-0 inset-x-10 overflow-hidden" : ""
                }
                onClick={() => setNavIsOpen(false)}
              >
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full overflow-x-hidden overflow-y-scroll">
                  <div
                    className={
                      navIsOpen
                        ? "transform transition ease-in-out duration-700 translate-x-0"
                        : "transform transition ease-in-out duration-500 translate-x-full"
                    }
                  >
                    <div class="pointer-events-auto relative w-screen max-w-[300px]">
                      <div class="flex min-h-screen flex-col bg-white py-6 shadow-xl ">
                        <ul className="flex flex-col mx-auto w-5/6 text-base text-mgrey relative">
                          <div className="flex justify-end mr-4">
                            <IoMdClose
                              className="h-8 w-8 text-mgrey cursor-pointer"
                              onClick={() => setNavIsOpen(false)}
                            />
                          </div>
                          <div className="flex flex-row w-full h-20 justify-center mt-8">
                            <img
                              className="h-20 w-auto"
                              src={Logo}
                              alt="logo"
                            />

                            <span className="pl-2 mt-4 leading-loose text-mpurple font-medium text-left uppercase text-lg">
                              Property <br /> Management
                            </span>
                          </div>

                          <div className="flex flex-col mt-20 sm:mt-28 landscape:mt-14 space-y-2 text-center text-mgrey text-lg tracking-wider relative">
                            <NavLink
                              to="/"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-mblue bg-slate-100 py-2"
                                  : "py-2"
                              }
                            >
                              Home
                            </NavLink>
                            <NavLink
                              to="/about"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-mblue bg-slate-100 py-2"
                                  : "py-2"
                              }
                            >
                              About
                            </NavLink>
                            <NavLink
                              to="/services"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-mblue bg-slate-100 py-2"
                                  : "py-2"
                              }
                            >
                              Services
                            </NavLink>
                            <NavLink
                              to="/projects"
                              className={({ isActive }) =>
                                isActive ? "text-mblue" : "py-2"
                              }
                            >
                              Projects
                            </NavLink>
                            <NavLink
                              to="/properties"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-mblue bg-slate-100 py-2"
                                  : "py-2"
                              }
                            >
                              Properties
                            </NavLink>
                            <NavLink
                              to="/contact"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-mblue bg-slate-100 py-2"
                                  : "py-2"
                              }
                            >
                              Contact Us
                            </NavLink>
                          </div>

                          <span className="flex flex-row mt-16 justify-center items-center space-x-8">
                            <a
                              href="http://www.facebook.com/pages/Almadar-Holding/368129056608301"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <ImFacebook2 className="w-8 h-8" fill="#4267B2" />
                            </a>

                            <a
                              href="https://twitter.com/AlmadarHolding"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <FaTwitterSquare
                                className="w-9 h-9"
                                fill="#1DA1F2"
                              />
                            </a>
                            <a
                              href="http://www.linkedin.com/company/almadar-holding"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <ImLinkedin className="w-8 h-8" fill="#0072b1" />
                            </a>
                          </span>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;