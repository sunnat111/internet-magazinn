import React from "react";
import User from "../components/User/User";

const UserLayout = ({ children, cart }) => {
  return (
    <div className="main">
      <User cart={cart}/>
      <div className="container">{children}</div>
    </div>
  );
};

export default UserLayout;
