import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Properties from "./pages/properties";
import Contact from "./pages/contact";
import Services2 from "./pages/services2";
import Spinner from "./components/spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services2" element={<Services2 />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </>
      )}
    </>
  );
}

export default App;
