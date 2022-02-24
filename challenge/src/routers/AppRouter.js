import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../screens/Login";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  const token2 = JSON.parse(localStorage.getItem("token"));
  console.log(token2);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token2) return;
    dispatch(login(token2));
  }, [token2, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <DashboardRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
