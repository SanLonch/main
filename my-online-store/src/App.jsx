import React from 'react';
import Header from './Header';
import './style.css';

const productsData = [
    { id: 1, name: 'Товар 1', price: 100 },
    { id: 2, name: 'Товар 2', price: 150 },
    { id: 3, name: 'Товар 3', price: 200 }
];

const App = () => {
    return (
        <div className="app">
            <Header products={productsData} />
        </div>
    );
}

export default App;