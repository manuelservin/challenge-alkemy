import React from "react";

import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Detail from "../screens/Detail";

import Home from "../screens/Home";
import Search from "../screens/Search";

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="search/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
