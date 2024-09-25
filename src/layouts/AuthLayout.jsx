import React, { Children } from "react";
import logoIcon from "../assets/images/logo.svg";
import "../scss/common/AuthLayout.scss";

const AuthLayout = ({ children }) => {
  return (
    <div className="main">
      <div className="logo">
        <img src={logoIcon} alt="" className="logo_img" />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
