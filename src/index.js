import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {GlobalStyles} from '../src/common/GlobalStyle/GlobalStyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <BrowserRouter basename='/water-tracker'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
