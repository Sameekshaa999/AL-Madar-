import React from "react";
import logo from "../components/Zimages/index/loading_logo.png";

const Spinner = () => {
  return (
    <div className="bg-mblue flex h-screen justify-center items-center">
      <div className="spinner"></div>
      <img src={logo} className="h-48 z-10" alt="logo" />
    </div>
  );
};

export default Spinner;
