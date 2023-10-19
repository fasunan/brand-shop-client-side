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
import AddProduct from './PrivateRoute/AddProduct';
import AllProducts from './PrivateRoute/AllProducts';
import Update from './PrivateRoute/Update';
import ProductDetails from './PrivateRoute/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('data.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/:name",
        element: <AllProducts></AllProducts>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.name}`)

      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/productsId/${params.id}`)
      },
      {
        path:"/details/:id",
        element:<ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/productsId/${params.id}`)
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
