import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import Cart from "../components/Cart";
import ProductList from "../components/product/ProductList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart></Cart> ,
      },
      {
        path: "/products",
        element:<ProductList></ProductList>
      },
    ],
  },
]);
export default router