import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";

const ProtectedRoutes = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const isAuthenticated = !!user;

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default ProtectedRoutes;









