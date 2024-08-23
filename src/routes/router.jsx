import {
    createBrowserRouter,
} from "react-router-dom";


import Login from "../pages/Login";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/products",
        element: <Products />
    }
]);

export default router