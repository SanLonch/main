import React from 'react';
import { useSelector } from 'react-redux';
import CreateProduct from './CreateProduct';
import Products from './Products';
import Cart from './Cart';

const Header = () => {
  const productsData = useSelector((state) => state.products);

  return (
    <div className="header">
      <h1>Мій Інтернет-Магазин</h1>
      <CreateProduct />
      <Products products={productsData} />
      <Cart />
    </div>
  );
}

export default Header;