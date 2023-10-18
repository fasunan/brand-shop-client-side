import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Components/Home';
import ErrorPage from './ErrorPage/ErrorPage';
import AuthProvider from './Provider/AuthProvider';
import Login from './Components/LogIn';
import SignUp from './Components/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=>fetch('data.json')
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/signUp",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
