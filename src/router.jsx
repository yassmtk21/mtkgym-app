import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Lyout.js";
import Home from "./views/home/Home";
import Members from "./views/Members.jsx";
import Calendar from "./views/Calendar.jsx";
import Gallery from "./views/Gallery/Gallery.jsx";
import Pricing from "./views/pricing/Pricing.jsx";
import About from "./views/about/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/home"} />,
      },
      {
        path: "/home",
        element: <Home to={"/home"} />,
      },
      {
        path: "/calendar",
        element: <Calendar to={"/calendar"} />,
      },
      {
        path: "/members",
        element: <Members to={"/members"} />,
      },
      {
        path: "/gallery",
        element: <Gallery to={"/gallery"} />,
      },
      {
        path: "/price",
        element: <Pricing to={"/price"} />,
      },
      {
        path: "/about",
        element: <About to={"/about"} />,
      },
    ],
  },
]);

export default router;
