import React from 'react';
import {  createBrowserRouter} from "react-router-dom";
import Main from './../Layout/Main';
import Home from './../Pages/Home/Home';
import Favourites from './../Pages/Favourites/Favourites';
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import Phone from './../Pages/Phone/Phone';
import PrivateRoute from './../Pages/PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/phones.json')
        },
        {
            path:'/favourites',
            element:<Favourites></Favourites>
        },
        {
                 path:'/login',
                 element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/phones/:id',
            element:<PrivateRoute><Phone></Phone></PrivateRoute>,
            loader:()=>fetch('/phones.json')
        }
      ]
    },
  ]);

export default router;