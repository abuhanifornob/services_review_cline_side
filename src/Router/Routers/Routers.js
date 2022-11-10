import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AllService from '../../Pages/AllService/AllService';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';


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

      }
      ]
      
    }
  
    
   ])
 


export default router;