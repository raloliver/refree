/*
 * File: index.js
 * Project: refree
 * Created: Wednesday, September 6th 2023, 7:23:01 am
 * Last Modified: Thursday, September 7th 2023, 4:51:38 am
 * Copyright © 2023 AMDE Agência
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
