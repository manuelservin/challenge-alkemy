import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#e05d26",
      }}
    >
      <LoginForm />
    </div>
  );
};

export default Login;
