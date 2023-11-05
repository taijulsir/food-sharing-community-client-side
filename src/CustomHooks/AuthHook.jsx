import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AuthHook = () => {
    const all = useContext(AuthContext);
    return all
};

export default AuthHook;