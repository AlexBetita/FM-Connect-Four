import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ModalProvider from './context/Modal'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);