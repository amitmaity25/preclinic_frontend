import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/admin/loginSlice";
import adminDepartmentReducer from "./slices/admin/departmentSlice";
const store = configureStore({
    reducer: {
        auth: loginSlice,
        adminDepartmentSlice: adminDepartmentReducer,
    }
});
export default store;