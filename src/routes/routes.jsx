import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from '../pages/Home';
import Root from '../pages/Root';
import ErrorPage from '../components/ErrorPage';
import AppDetails from '../pages/AppDetails';


export const  router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
          
         index:true,
         path:'/',
         Component:Home,
         loader:()=>fetch('../../public/data.json'),
         
        },
        {
         loader:()=>fetch('../../public/data.json'),
          path:'/details/:id',
          Component:AppDetails,
        }
       

    ],
    
 
  },
]);