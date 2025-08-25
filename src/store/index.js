import { configureStore } from "@reduxjs/toolkit";
//import loginSlice from "./slices/admin/loginSlice";
const store = configureStore({
    reducer: {
        //adminLogin: loginSlice,
    }
});
export default store;