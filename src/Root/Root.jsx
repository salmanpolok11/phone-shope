import { createBrowserRouter } from "react-router-dom";
import MainContent from "../Layout/MainContent/MainContent";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Favorite/Favorite";
import Login from "../Pages/Log/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent/>,
    children: [
        {
           path: "/",
           element: <Home/>
        },
        {
           path: "/favorite",
           element:  <Favorite/>
        },
        {
           path: '/login',
           element: <Login/>
        }
    ]
    

  },
]);

export default router;