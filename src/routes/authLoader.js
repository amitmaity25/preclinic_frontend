import { redirect } from "react-router-dom";
import apiClient from "../services/apiClient";

export const authLoader = (allowedRoles = []) => async () => {
    const token = localStorage.getItem("authToken");

    console.log(token);
    
    if (!token) {
        return redirect("/admin/login");
    }

    try {
        console.log("Checking auth token...");
        const res = await apiClient.post("/api/v1/auth/check", { "authToken": token });
        console.log("Auth token valid:", res.data);
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