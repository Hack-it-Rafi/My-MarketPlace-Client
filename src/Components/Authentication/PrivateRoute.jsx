import { useContext } from "react";
// import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div>
            <div className="h-24"></div>
            <div className="flex justify-center h-[200px]">
            <span className="loading loading-spinner loading-lg mx-auto"></span>
            </div>
        </div>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;