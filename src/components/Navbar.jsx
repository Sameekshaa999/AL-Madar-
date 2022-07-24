import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../components/Zimages/navbar/almadar-logo.jpg";
import FB from "../components/Zimages/navbar/facebook.png";
import Insta from "../components/Zimages/navbar/instagram.png";
import Twitter from "../components/Zimages/navbar/twitter.png";
import Linkedin from "../components/Zimages/navbar/linkedin.png";
const Navbar = () => {
  // responsive toggle function

  return (
    <nav className="bg-white font-montserrat h-18 w-screen fixed z-50">
      <div className="justify-around px-2 lg:px-10 mx-auto max-w-[1225px]">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* <!-- Website Logo --> */}
              <Link
                to="/"
                className="flex items-center justify-start py-4 px-2"
              >
                <img className="h-14 w-auto" src={Logo} alt="logo" />
                <span className="p-2 text-black">
                  Property <br /> Management
                </span>
              </Link>
            </div>
          </div>
          {/* <!-- Navbar items --> */}
          <div className="hidden lg:flex justify-end items-center space-x-5 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-items underline decoration-mpurple "
                  : "nav-items"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "nav-items underline decoration-mpurple decoration-1"
                  : "nav-items"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "nav-items underline decoration-mpurple decoration-1"
                  : "nav-items"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "nav-items underline decoration-mpurple decoration-1"
                  : "nav-items"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                isActive
                  ? "nav-items underline decoration-mpurple decoration-1"
                  : "nav-items"
              }
            >
              Properties
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "p-2 pt-1 pb-1 text-white font-montserrat transition duration-300 border-2 border-mpurple rounded-lg bg-mpurple"
                  : "p-2 pt-1 pb-1 text-black font-montserrat transition duration-300 border-2 border-mpurple rounded-lg hover:bg-mpurple hover:text-white"
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* mobile menu */}
          <button className="block lg:hidden py-3 px-4 mx-2 group">
            {/* burger icon */}
            <div className="rounded-full w-7 h-1 bg-mgrey mb-1"></div>
            <div className="rounded-full w-7 h-1 bg-mgrey mb-1"></div>
            <div className="rounded-full w-7 h-1 bg-mgrey mb-1"></div>

            {/* mobile menu list */}
            <div
              className="absolute overflow-auto top-0 -right-full h-screen w-9/12 md:w-4/12 bg-mpurple text-white opacity-0
      group-focus:right-0 group-focus:opacity-100 transition-all duration-300"
            >
              <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-8">
                <li>
                  <Link to="/" className="flex justify-start py-8 px-2">
                    <img className="h-14 w-auto" src={Logo} alt="logo" />
                    <span className="p-2 text-white text-left uppercase text-md">
                      Property <br /> Management
                    </span>
                  </Link>
                </li>

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "bg-mgrey py-4 px-6 w-full" : "py-4 px-6 w-full"
                  }
                >
                  Home
                </NavLink>

                <div className="w-7/12 h-0.5 bg-white my-2"></div>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "bg-mgrey py-4 px-6 w-full" : "py-4 px-6 w-full"
                  }
                >
                  About
                </NavLink>

                <div className="w-7/12 h-0.5 bg-white my-2"></div>

                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "bg-mgrey py-4 px-6 w-full" : "py-4 px-6 w-full"
                  }
                >
                  Services
                </NavLink>

                <div className="w-7/12 h-0.5 bg-white my-2"></div>

                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "bg-mgrey py-4 px-6 w-full" : "py-4 px-6 w-full"
                  }
                >
                  Projects
                </NavLink>

                <div className="w-7/12 h-0.5 bg-white my-2"></div>

                <NavLink
                  to="/properties"
                  className={({ isActive }) =>
                    isActive ? "bg-mgrey py-4 px-6 w-full" : "py-4 px-6 w-full"
                  }
                >
                  Properties
                </NavLink>

                <div className="w-7/12 h-0.5 bg-white my-2"></div>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "bg-mgrey py-4 px-6 w-full" : "py-4 px-6 w-full"
                  }
                >
                  Contact Us
                </NavLink>

                <div className="w-7/12 h-0.5 bg-white my-2"></div>

                <span className="flex flex-row justify-between items-center my-2">
                  <a href="/">
                    <img className="h-8 mx-2" src={FB} alt="facebook page" />
                  </a>
                  <a href="/">
                    <img
                      className="h-8 mx-2"
                      src={Insta}
                      alt="instagram page"
                    />
                  </a>
                  <a href="/">
                    <img
                      className="h-8 mx-2"
                      src={Twitter}
                      alt="twitter page"
                    />
                  </a>
                  <a href="/">
                    <img
                      className="h-8 mx-2"
                      src={Linkedin}
                      alt="linkedin page"
                    />
                  </a>
                </span>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
