import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Search from "../screens/Search";

const DashboardRoutes = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="dish/:id" element={<DishItem />} /> */}
      </Routes>
    </div>
  );
};

export default DashboardRoutes;
