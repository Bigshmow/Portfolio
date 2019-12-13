import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <BrowserRouter basename={process.env.Public_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
