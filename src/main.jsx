import CnpjSearch from "./components/CnpjSearch/CnpjSearch"
import Contracts from "./components/Contracts/Contracts"
import Invoice from "./components/Invoice/Invoice";
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <CnpjSearch />
  },
  {
    path: "/contracts",
    element: <Contracts />
  },
  {
    path: "/invoice",
    element: <Invoice />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);