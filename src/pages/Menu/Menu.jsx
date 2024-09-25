import React, { useEffect } from "react";
import Products from "../../components/Products/Products";
import UserLayout from "../../layouts/UserLayout";

const Menu = ({cart}) => {

  return (
    <>
    <UserLayout cart={cart}>
        <Products />
    </UserLayout>
    </>
  );
};

export default Menu;
