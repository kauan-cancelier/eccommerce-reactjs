import {
    createBrowserRouter,
} from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import PrivateRoute from './PrivateRoute'; 

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
        element: (
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        ),
    },
    {
        path: "/products",
        element: (
            <PrivateRoute>
                <Products />
            </PrivateRoute>
        ),
    }
]);

export default router;
