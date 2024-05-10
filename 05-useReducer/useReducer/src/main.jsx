import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
// import TodoApp from './useReducer/TodoApp'
import { MainApp } from './useContext/MainApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
  // </React.StrictMode>,
)
