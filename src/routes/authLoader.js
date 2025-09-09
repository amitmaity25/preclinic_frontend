import { redirect } from "react-router-dom";
import apiClient from "../services/apiClient";

export const authLoader = (allowedRoles = []) => async () => {
    const token = localStorage.getItem("authToken");
    
    if (!token) {
        return redirect("/admin/login");
    }

    try {
        const res = await apiClient.post("/api/auth/check", { token });
        const user = res.data.user;
        if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
            return redirect("/admin/home");
        }
        return user;

    } catch (err) {
       localStorage.removeItem("authToken");
       return redirect("/admin/login");
    }
};