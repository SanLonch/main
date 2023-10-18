import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <h2>Кошик</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - {item.price} грн</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;