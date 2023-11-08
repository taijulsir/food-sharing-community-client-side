



/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import AuthHook from "../CustomHooks/AuthHook";
import loadingAnimation from "../Lottie/loading - 1699455186797.json"
import Lottie from "lottie-react";


const PrivateRoute = ({children}) => {
    const {user,loading} = AuthHook()
    const location = useLocation()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    if(loading) {
        return <div> <Lottie
        animationData={loadingAnimation}
        options={defaultOptions}
        height={400}
        width={400}>
    </Lottie></div>
    }
    if(user){
        return children;
    }

   
    return <Navigate state={location.pathname} to="/login">  </Navigate> 
};

export default PrivateRoute; 