import { createBrowserRouter } from "react-router";
import App from "../App";
import Products from "../components/products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children : [
      {
        index:true,
        Component : Products
      }
    ]
  },
]);