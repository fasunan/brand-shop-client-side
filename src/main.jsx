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
import AddToCart from './PrivateRoute/AddToCart';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
        element: (
          <PrivateRoute>

<AddProduct></AddProduct>
          </PrivateRoute>
        )
      },
      {
        path: "/:name",
        element:  
            <AllProducts></AllProducts>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.name}`)

      },
      {
        path: "/update/:id",
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/productsId/${params.id}`)
      },
      {
        path:"/details/:id",
        element:(
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/productsId/${params.id}`)
      },
      {
        path:"/addToCart",
        element:(
          <PrivateRoute>
            <AddToCart></AddToCart>
          </PrivateRoute>
        )
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
