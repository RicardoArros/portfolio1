import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "../views/error404/Error404";

import Home from "../views/home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Router;
