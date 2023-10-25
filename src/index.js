import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './custom.scss';
import Menu from './Menu';
import App from './App';
import Footer from './Footer';
import bsColorToggler from './bs-color-toggler';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <Menu />
      <App />
      <Footer />
    </React.StrictMode>
);
