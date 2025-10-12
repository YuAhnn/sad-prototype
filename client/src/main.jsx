import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'

import { initializeApp } from "firebase/app";
import firebaseConfig from '../../firebase/config/firebase.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

initializeApp(firebaseConfig)
