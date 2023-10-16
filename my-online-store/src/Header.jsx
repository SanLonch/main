import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';
import CreateProduct from './CreateProduct';

const Header = ({ products }) => {
    const [cartItems, setCartItems] = useState([]);
    const [productsData, setProductsData] = useState(products);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const addProduct = (newProduct) => {
        setProductsData([...productsData, newProduct]);
    };

    return (
        <div className="header">
            <h1>Мій Інтернет-Магазин</h1>
            <CreateProduct onAddProduct={addProduct} />
            <Products products={productsData} onAddToCart={addToCart} />
            <Cart cartItems={cartItems} />
        </div>
    );
}

export default Header;
