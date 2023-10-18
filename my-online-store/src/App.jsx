import React from 'react';
import Header from './Header';
import { Provider } from 'react-redux';
import store from './store';
import './style.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
      </div>
    </Provider>
  );
}

export default App;