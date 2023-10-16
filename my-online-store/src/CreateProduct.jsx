import React, { useState } from 'react';
import './CreateProduct.css';

const CreateProduct = ({ onAddProduct }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    };

    const handleProductPriceChange = (e) => {
        setProductPrice(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (productName && productPrice) {
            const newProduct = {
                id: Date.now(),
                name: productName,
                price: parseFloat(productPrice)
            };

            onAddProduct(newProduct);

            setProductName('');
            setProductPrice('');
        }
    };

    return (
        <div className="create-product">
            <h2>Додати новий товар</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Назва товару:
                    <input type="text" value={productName} onChange={handleProductNameChange} />
                </label>
                <label>
                    Ціна товару:
                    <input type="number" value={productPrice} onChange={handleProductPriceChange} />
                </label>
                <button type="submit">Додати товар</button>
            </form>
        </div>
    );
}

export default CreateProduct;
