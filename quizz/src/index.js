import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import scoreReducer from './dataSlice';

const store = configureStore({
    reducer:{
        scoreCount: scoreReducer,
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App />
    </Provider>
);

