import React from "react";
import logo from "../components/Zimages/loading_logo.png";

const Spinner = () => {
  return (
    <div class="bg-mblue flex h-screen justify-center items-center">
      <div class="spinner"></div>
      <img src={logo} className="h-48 z-10" alt="logo" />
    </div>
  );
};

export default Spinner;
