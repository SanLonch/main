import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="product">
            <h2>{product.name}</h2>
            <p>Ціна: {product.price} грн</p>
        </div>
    );
}

export default Product;
