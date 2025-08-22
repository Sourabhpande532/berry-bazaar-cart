import { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Product } from "../src/pages/Product"
import { Cart } from "../src/pages/Cart"
import { About } from "../src/pages/About"
import { ProductDetails } from './pages/ProductDetails';
import { Profile } from './pages/Profile';
const router = createBrowserRouter( [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/product",
    element: <Product />
  },
  {
    path:"/product/:productId",
    element:<ProductDetails/>
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path:"/profile",
    element: <Profile/>
  }
] )
// const root = ReactDOM.createRoot( document.getEldsementById( 'root' ) );
const rootElement = document.getElementById( "root" );
const root = createRoot( rootElement );
root.render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>
);

