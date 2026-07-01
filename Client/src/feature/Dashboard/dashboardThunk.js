import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const dashboardThunk = createAsyncThunk(
  "user/dashboard",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:3000/api/v2/dashboard",
        {
          headers: {
            Authorization: token,
          },
        },
      );
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message);
      return rejectWithValue(error.response?.data);
    }
  },
);
