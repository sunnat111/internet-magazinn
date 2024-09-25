import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import UserLayout from "../../layouts/UserLayout";

const Cart = ({ cart, removeProduct }) => {
  return (
    <UserLayout cart={cart}>
      <CartItem cart={cart} removeProduct={removeProduct} />
    </UserLayout>

  )

};

export default Cart;
