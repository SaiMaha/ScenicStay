import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Destinations from "../pages/Destinations";
import ScenicStays from "../pages/ScenicStays";
import HiddenGems from "../pages/HiddenGems";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ForgotPassword from "../Forgotpassword/Forgotpassword";
import TravelJournal from "../pages/TravelJournal";
import AddTravelEntry from "../pages/AddTravelEntry";

let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/destinations", element: <Destinations /> },
      { path: "/scenic-stays", element: <ScenicStays /> },
      { path: "/hidden-gems", element: <HiddenGems /> },
      { path: "/traveljournal", element: <TravelJournal/> },
      {path: "/add-travel", element:<AddTravelEntry/>},
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {path:"/forgot-password", element:<ForgotPassword/> }
    ],
  },
]);

export default myRoutes;
