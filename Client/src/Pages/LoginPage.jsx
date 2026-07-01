import { BarChart3 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginThunk } from "../feature/auth/authThunk";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginSubmit = async (data) => {
    // console.log(data);
    const result = await dispatch(loginThunk(data));

    if (loginThunk.fulfilled.match(result)) {
      reset();
      navigate("/");
    }
  };

  return (
    <div className="grid min-h-screen place-items-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-lg bg-teal-600 text-white">
            <BarChart3 size={22} />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-950">
            Welcome Back
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Login to your expense tracker
          </p>
        </div>
        <form onSubmit={handleSubmit(loginSubmit)} className="space-y-4">
          <label className="space-y-1.5">
            <span className="text-sm font-semibold text-slate-700">Email</span>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-teal-500"
              placeholder="you@example.com"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
                minLength: { value: 12, message: "Min 12 character required" },
                maxLength: {
                  value: 30,
                  message: "maximum 30 character required ",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500"> {errors.email.message} </p>
            )}
          </label>
          <label className="space-y-1.5">
            <span className="text-sm font-semibold text-slate-700">
              Password
            </span>
            <input
              type="password"
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-teal-500"
              placeholder="Password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 3,
                  message: "atleat 3 character required",
                },
                maxLength: {
                  value: 12,
                  message: "Maximum 12 character required",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </label>
          <button
            type="submit"
            className="w-full rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-bold text-white"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold text-teal-700">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
