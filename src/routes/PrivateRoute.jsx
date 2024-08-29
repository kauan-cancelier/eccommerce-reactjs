import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const token = sessionStorage.getItem('jwt-token');
    if (!token) {
        return <Navigate to="/login" replace/>;
    }
    return children;
};

export default PrivateRoute