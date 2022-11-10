import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Comments from '../../Comments/Comments';
import Main from '../../Layout/Main';
import AllService from '../../Pages/AllService/AllService';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Review from '../../Pages/Review/Review';
import SignUp from '../../Pages/SignUp/SignUp';
import View from '../../Pages/View/View';
import PrivetRoutes from '../PrivetRoutes/PrivetRoutes';


   const router=createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch("http://localhost:5000/services")

      },
     
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:"/serviceall",
        element:<AllService></AllService>,
        loader:()=>fetch("http://localhost:5000/serviceall")

      },
      {
        path: '/comments/:id',
        element:<PrivetRoutes><Comments></Comments></PrivetRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path: '/viewreview/:id',
        element:<PrivetRoutes><View></View></PrivetRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path:"/review",
        element:<PrivetRoutes><Review></Review></PrivetRoutes>
    }
      ]
      
    }
  
    
   ])
 


export default router;