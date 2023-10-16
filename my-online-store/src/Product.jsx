import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Ціна: {product.price} грн</p>
      <button onClick={() => onAddToCart(product)}>Додати в кошик</button>
    </div>
  );
}

export default Product;
