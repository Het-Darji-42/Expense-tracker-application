import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";
import dashboardReducer from "../feature/Dashboard/dashboardSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard : dashboardReducer
  },
});
