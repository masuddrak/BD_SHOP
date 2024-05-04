import { useContext } from "react";
import { authContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { loader, user } = useContext(authContext)
    if (loader) {
        return <h1>Loading</h1>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login"></Navigate>

};

export default PrivateRoute;