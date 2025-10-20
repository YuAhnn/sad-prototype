import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root')); 

const isDevelopment = import.meta.env.MODE === "development"

root.render(
  isDevelopment ? ( <Router> <React.StrictMode> <App /> </React.StrictMode> </Router> ) : ( <Router> <App/> </Router> ) 
)