import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk, userProfileThunk } from "./authThunk";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },

  reducers: {
    Logout: (state) => {
      state.user = null;
      state.token = null;
      // localStorage.removeItem("token");
      localStorage.clear(); // also clear whole local storage
    },
  },

  extraReducers: (builder) => {
    //register
    builder.addCase(registerThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(registerThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //login

    builder.addCase(loginThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(loginThunk.fulfilled, (state, action) => {
      console.log(action.payload);

      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;

      localStorage.setItem("token", action.payload.token);
    });

    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //userP profile

    builder.addCase(userProfileThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(userProfileThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.error = null;

      localStorage.setItem("expenseTrackerUser", JSON.stringify(action.payload));
    });
    builder.addCase(userProfileThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { Logout } = authSlice.actions;
export default authSlice.reducer;
