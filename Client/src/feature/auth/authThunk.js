import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const registerThunk = createAsyncThunk(
  "user/register",
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        userdata,
      );
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message) || "something went wrong";
      return rejectWithValue(error.response?.data);
    }
  },
);

export const loginThunk = createAsyncThunk(
  "user/Login",
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        userdata,
      );
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message || "Something Went Wrong");
      return rejectWithValue(error.response?.data);
    }
  },
);

export const userProfileThunk = createAsyncThunk(
  "user/profile",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/auth/profile",
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
