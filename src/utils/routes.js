import { createBrowserRouter } from "react-router-dom";
import About from "../component/About";
import ErrorPage from "../component/ErrorPage";


import Home from "../component/Home";
import Root from "../component/Root";

const router =createBrowserRouter([

    {
     path:'/',
     element:<Root/>,
     errorElement:<ErrorPage/>,
     children:[
        {
            path:'/',
            element:<Home/>
         }, {
             path: '/Home',
             element: <Home />,
         },
         {
             path: '/About',
             element: <About/>,
         }
     ]

    }
])

export default router;