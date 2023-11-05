
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter ([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>, 
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
export default router;