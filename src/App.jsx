import './App.css';

import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import items from "./assets/model/model.js";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
import View from "./components/View.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const changeItemQty = (id, value) => {
    let newItems = [...cartItems];
    const itemIdx = newItems.findIndex((item) => id === item.itemId);
    const item = newItems[itemIdx];

    if(item.itemQty + value <= 0) {
      newItems.splice(itemIdx, 1);
    } else item.itemQty += value;

    setCartItems(newItems);
  }

  const addToCart = (newItem) => {
    let newItems = [...cartItems];
    const prevItemIdx = newItems.findIndex((item) => item.itemId === newItem.itemId);

    if(prevItemIdx >= 0) {
      newItems[prevItemIdx].itemQty += newItem.itemQty;
    } else {
      newItems.push(newItem);
    }

    items.find((i) => i.oid === newItem.itemId).itemQty -= newItem.itemQty;
    setCartItems(newItems);
    navigate(".", {replace: true});
  };

  return (
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="cart" element={<Cart cartItems={cartItems} changeItemQty={changeItemQty} />}></Route>
          <Route path="view/:itemId" element={<View addToCart={addToCart} />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
  );
}

export default App;
