import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProviders from './components/providers/AuthProviders';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<AuthProviders>
<RouterProvider router={router}></RouterProvider>
</AuthProviders>



  </React.StrictMode>,
)
