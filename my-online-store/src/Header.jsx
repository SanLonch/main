import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';



const Header = ({ products }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="header">
      <h1>Мій Інтернет-Магазин</h1>
      <Products products={products} onAddToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default Header;
