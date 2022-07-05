import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Properties from "./pages/properties";
import Contact from "./pages/contact";
import Footer from "./components/Footer";
import Services2 from "./pages/services2";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services2" element={<Services2 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
