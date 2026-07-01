import { createSlice } from "@reduxjs/toolkit";
import { dashboardThunk } from "./dashboardThunk";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    data: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(dashboardThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(dashboardThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    });
    builder.addCase(dashboardThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default dashboardSlice.reducer;
