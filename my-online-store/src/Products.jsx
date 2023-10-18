import React from 'react';
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';

const Products = () => {
  const productsData = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="products">
      {productsData.map(product => (
        <Product key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
}

export default Products;