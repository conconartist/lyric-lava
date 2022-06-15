import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';

const router = <BrowserRouter> <App /> </BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));


