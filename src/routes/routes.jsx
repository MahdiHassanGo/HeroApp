import React from 'react';
import {
  createBrowserRouter,
  // RouterProvider is not needed here, it's used in main.jsx
} from "react-router-dom";  // must come from dom package for browser APIs
import Home from '../pages/Home';
import Root from '../pages/Root';
import ErrorPage from '../components/ErrorPage';
import AppDetails from '../pages/AppDetails';
import AllApps from '../pages/AllApps';
import Installation from '../pages/Installation';


export const  router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
          
         index: true,
         Component: Home,
         loader: () => fetch('/data.json'),           
         errorElement: <ErrorPage />
        },
        {
          path: '/all',
          loader: () => fetch('/data.json'),
          Component: AllApps,
        },
        {
          path: '/details/:id',
          loader: () => fetch('/data.json'),
          Component: AppDetails,
        },
        {
           path: '/installed',
          loader: () => fetch('/data.json'),
          Component: Installation,
        },
          {
        
          path:'*',
          Component:ErrorPage,
        },
        
       

    ],
    
 
  },
]);