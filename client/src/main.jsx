import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'

import { initializeApp } from "firebase/app";
import firebaseConfig from '../../firebase/config/firebase.js';

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root')); 

const isDevelopment = import.meta.env.MODE === "development"

root.render(
  isDevelopment ? ( <React.StrictMode> <App /> </React.StrictMode> ) : ( <App/> ) 
)
