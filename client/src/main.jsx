import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const isDevelopment = import.meta.env.MODE === "development";

const app = isDevelopment ? (
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
) : (
  <Router basename="/_compass">
    <App />
  </Router>
);

root.render(app);
