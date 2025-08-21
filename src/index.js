import { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Product } from "../src/pages/Product"
import { Cart } from "../src/pages/Cart"
import { About } from "../src/pages/About"
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
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/about",
    element: <About />
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

