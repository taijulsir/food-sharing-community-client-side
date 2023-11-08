



/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import AuthHook from "../CustomHooks/AuthHook";


const PrivateRoute = ({children}) => {
    const {user,loading} = AuthHook()
    const location = useLocation()
    console.log(location);
    if(loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }

   
    return <Navigate state={location.pathname} to="/login">  </Navigate> 
};

export default PrivateRoute; 