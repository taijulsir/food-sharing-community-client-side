
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
import About from "../Pages/About/About";
import BLogs from "../Pages/Blogs/BLogs";
import FoodRequest from "../Pages/FoodRequest/FoodRequest";
import ManageFood from "../Pages/ManageFoods/ManageFood";



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
                loader: () => fetch('https://food-donation-community-server-side.vercel.app/foodCount')
            },
            {
                path: '/foodDetails/:id',
                element: <FoodDetails></FoodDetails>,
                loader: ({params}) => fetch(`https://food-donation-community-server-side.vercel.app/foods/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <BLogs></BLogs>
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
                loader : ({params}) => fetch(`https://food-donation-community-server-side.vercel.app/foods/${params.id}`)
            },
            {
                path: '/foodsRequest',
                element: <FoodRequest></FoodRequest>                
            },
            {
                path: '/foods/:id',
                element: <ManageFood></ManageFood>,
                loader: ({params}) => fetch(`https://food-donation-community-server-side.vercel.app/requestedFoods/${params.id}`)
            }
            
            

        ]
    }
])
export default router;