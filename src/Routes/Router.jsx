
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods"
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import ManageFoods from "../Pages/ManageFoods/ManageFoods";
import FoodUpdate from "../Pages/ManageFoods/FoodUpdate";



const router = createBrowserRouter ([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>, 
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods></AvailableFoods>,
                loader: () => fetch('http://localhost:5000/foodCount')
            },
            {
                path: '/foodDetails/:id',
                element: <FoodDetails></FoodDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addFoods',
                element: <AddFood></AddFood>
            },
            {
                path: '/manageFoods',
                element: <ManageFoods></ManageFoods>,                  
            },
            {
                path: '/updateFoods/:id',
                element:<FoodUpdate></FoodUpdate>,
                loader : ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            }
            

        ]
    }
])
export default router;