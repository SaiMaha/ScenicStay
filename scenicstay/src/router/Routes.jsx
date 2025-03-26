import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";

let myRoutes=createBrowserRouter([
    {path:"/",element:<Layout/>,
        children:[{path:"/home", element:<Home/>},
            {path:"/login", element:<Login/>},
            {path:"/register", element:<Register/>},]
    },
    
]);

export default myRoutes;