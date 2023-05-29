import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {LoginPage} from './login';

const root = ReactDOM.createRoot(document.getElementById('firebase-tut'));
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);
reportWebVitals();
