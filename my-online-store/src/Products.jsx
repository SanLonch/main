import React from 'react';
import Product from './Product';

const Products = ({ products, onAddToCart }) => {
  return (
    <div className="products">
      {products.map(product => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default Products;
