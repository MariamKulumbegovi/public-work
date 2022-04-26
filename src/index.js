import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import 'antd/dist/antd.css';
// axios.defaults.baseURL = 'https://publicworkapi.moh.gov.ge/Test/api/';

const rootNode = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootNode
);
