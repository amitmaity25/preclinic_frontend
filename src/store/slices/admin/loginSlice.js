import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../../services/apiClient";
import {AUTH_TOKEN_KEY, LOGIN_TIME_KEY } from "../../../constants/storageKeys";

export const loginAdmin = createAsyncThunk(
    "auth/loginAdmin",
    async (payload, { rejectWithValue }) => {       
        try {
            const response = await apiClient.post("/api/v1/auth/loginAdmin", payload);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(
                error.response?.data?.error || "Something went wrong"
            );
        }
    }
);

const loginSlice = createSlice({
    name: "login",
    initialState: {
        email: "",
        password: "",
        loading: false,
        error: "",
        loginSuccess: false,
        role: "",
    },
    reducers: {
        updateForm: (state, action) => {
            state[action.payload.name] = action.payload.value;
        },       
    },
    extraReducers: (builder) => {
        builder.addCase(loginAdmin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginAdmin.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";           
            localStorage.setItem(AUTH_TOKEN_KEY, action.payload.authToken);
            localStorage.setItem(LOGIN_TIME_KEY, Date.now().toString());
            localStorage.setItem("Role", action.payload.admin.role);
            state.role = action.payload.admin.role;
            state.loginSuccess = true;            
        });

        builder.addCase(loginAdmin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Login failed"; // ✅ Now gets the custom message
        });
    },
});

export const { updateForm } = loginSlice.actions;
export default loginSlice.reducer;