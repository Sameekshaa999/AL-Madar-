import React from "react";
import Section1 from "../components/contact/Section1";
import Section2 from "../components/contact/Section2";
import Section3 from "../components/contact/Section3";

const Contact = () => {
  return (
    <div className="snap-y snap-mandatory h-screen scrolling">
      <Section1 />
      <Section2 />
      <Section3 />
      <email />
    </div>
  );
};


export default Contact;