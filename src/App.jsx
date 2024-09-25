import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Menu from "./pages/Menu/Menu.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Cart from "./pages/Cart/Cart.jsx"
import ProductItem from "./components/Products/ProductItem.jsx";
  import { Route, Routes } from "react-router-dom";
import './scss/main.scss'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/products/productsSlice.js";
import ReadyOrder from "./pages/ReadyOrder/ReadyOrder.jsx";



function App() {

  const { items } = useSelector((state) => state.products)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProducts())
  }, [])


  const [cart, setCart] = useState([])
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cart');
    if (storedCartItems) {
      setCart(JSON.parse(storedCartItems));
    }
  }, []);


  const remove = (storedCartItems) => {
    if (storedCartItems) {
      const df = localStorage.getItem(''); 
    }
  }

  const addCart = (items) => {
    if (cart.some(item => item.id === items.id)) {
      setAlerts([ 
        {
          id: Date.now(),
          message: `${items.title} is already in the cart!`,
          type: 'warning',
          css: 'danger',
        }
      ]);
      return;
    }

    // Если продукт не найден, добавляем его в состояние
    const updatedCart = [...cart, items];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const removeProduct = (itemId) => {
    const updatedProducts = cart.filter(item => item.id !== itemId);
    setCart(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  return (
    <>
      <Routes>
        <Route path="/internet-magazinn/" element={<Menu cart={cart} />} />
        <Route path="/internet-magazinn/cart" element={<Cart cart={cart} removeProduct={removeProduct} />} />
        <Route path="/internet-magazinn/:id" element={<ProductItem addCart={addCart} cart={cart} alerts={alerts}/>} />
        <Route path="/internet-magazinn/login" element={<Login />} />
        <Route path="/internet-magazinn/profile" element={<Profile />} />
        <Route path="/internet-magazinn/register" element={<Register />} />
        <Route path="/internet-magazinn/readyorder" element={<ReadyOrder cart={cart} remove={remove}/>} />
      </Routes>
    </>
  );
}

export default App;
