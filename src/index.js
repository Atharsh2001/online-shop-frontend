import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './Seller/Components/reportWebVitals';
import DashBoard from "./Seller/DashBoard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DashBoard />
  </React.StrictMode>
);

reportWebVitals();
