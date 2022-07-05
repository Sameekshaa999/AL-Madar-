import React from "react";
import logo from "../components/Zimages/loading_logo.png";

//import "../sitNSpin.less";

const Spinner = () => {
  return (
    <div class="bg-mblue flex h-screen justify-center items-center">
      <div class="spinner"></div>
      <img src={logo} className="h-32 " alt="logo" />
      {/* <div class="spinner z-20"></div> */}
    </div>
  );
};

export default Spinner;
