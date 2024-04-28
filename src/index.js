import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import Contactus from './pages/Contactus'
import {
  createBrowserRouter,
  RouterProvider, 
  //Router
} from "react-router-dom";
import Aboutus from './pages/Aboutus';
import Comparephoto from './pages/Comparephoto';

import Qrcode from './pages/Qrcode'

import Shareapp from './pages/Shareapp';
import MySignUp from './Components/LoginSignup/MySignup';
import MyLogin from './Components/LoginSignup/MyLogin';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "contact",
    element: <Contactus/>,
  },
  
  {
    path: "/about",
    element: <Aboutus/>,
  },
   {
    path: "/compare",
    element: <Comparephoto/>,
  }
  
  ,
   {
    path: "/scan",
    element: <Qrcode/>,
  }
  ,
   {
    path: "/share",
    element: <Shareapp/>,
  },
   {
    path: "/register",
    element: <MySignUp/>,
  }
   ,{
    path: "/login",
    element: <MyLogin/>,
  }

  

  
  
]); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
