import { useContext } from "react";
// import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner loading-lg mx-auto"></span>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;