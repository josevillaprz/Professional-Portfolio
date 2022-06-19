import React from "react";
import { Route, Routes } from "react-router-dom";

// PAGE IMPORTS
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

const PageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default PageRoutes;
