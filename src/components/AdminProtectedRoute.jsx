import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
    const role = useSelector((state) => state?.auth?.role);
    console.log("User role in AdminProtectedRoute:", role);
    //const role = localStorage.getItem("Role");
    if (role !== "admin") {
        return <Navigate to="/admin/login" replace />;
    }
    return <Outlet />; // very important!
};

export default AdminProtectedRoute;
