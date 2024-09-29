import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App2.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider >
   <BrowserRouter>
   <App></App></BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
