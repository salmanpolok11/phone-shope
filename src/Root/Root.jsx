import { createBrowserRouter } from "react-router-dom";
import MainContent from "../Layout/MainContent/MainContent";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Favorite/Favorite";
import Login from "../Pages/Log/Login";
import Phone from "../Components/Phone/Phone";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainContent />,
      children: [
         {
            path: "/",
            element: <Home />,
            loader: () => fetch('phone.json')
         },
         {
            path: "/favorite",
            element: <Favorite />
         },
         {
            path: '/login',
            element: <Login />
         },
         {
            path: '/phone/:id',
            element: <Phone />,
            loader: () => fetch('../phone.json')
         }
      ]


   },
]);

export default router;