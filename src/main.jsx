import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './Provider/AuthProvider';
import './index.css'
import router from './Routes/Routes';
import {

 
  RouterProvider
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
  </div>
)
