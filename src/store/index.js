import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/admin/loginSlice";
import adminDepartmentReducer from "./slices/admin/departmentSlice";
import adminDoctorReducer from "./slices/admin/doctorSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage

// Persist config for auth slice
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["role", "loginSuccess", "email"], // fields you want to persist
};

// Wrap the auth reducer with persistReducer
const persistedAuthReducer = persistReducer(authPersistConfig, loginSlice);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    adminDepartmentSlice: adminDepartmentReducer,
    adminDoctorSlice: adminDoctorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Export persistor to use in index.jsx
export const persistor = persistStore(store);

export default store;
