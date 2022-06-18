import React from "react";
import { Route, Routes } from "react-router-dom";

// PAGE IMPORTS
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

const PageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
};

export default PageRoutes;
