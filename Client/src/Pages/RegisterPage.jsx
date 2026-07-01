  import { useForm } from "react-hook-form";
  import { BarChart3 } from "lucide-react";
  import { Link, useNavigate } from "react-router-dom";
  import { useDispatch } from "react-redux";
  import { registerThunk } from "../feature/auth/authThunk";

  export default function RegisterPage() {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const registerSubmit = async (data) => {
      // console.log(data);
      const result = await dispatch(registerThunk(data));

      if (registerThunk.fulfilled.match(result)) {
        reset();
        navigate("/login");
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
              Create Account
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Start tracking income and expenses
            </p>
          </div>
          <form onSubmit={handleSubmit(registerSubmit)} className="space-y-4">
            <label className="space-y-1.5">
              <span className="text-sm font-semibold text-slate-700">
                Username
              </span>
              <input
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-teal-500"
                placeholder="krish"
                {...register("username", {
                  required: "Username required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 character required",
                  },
                  maxLength: {
                    value: 12,
                    message: "Maximun 12 character required ",
                  },
                })}
              />
              {errors.username && (
                <p className="text-sm text-red-500">{errors.username.message}</p>
              )}
            </label>
            <label className="space-y-1.5">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-teal-500"
                placeholder="you@example.com"
                {...register("email", {
                  required: "email is required",
                  minLength: {
                    value: 12,
                    message: "Minimum 12 character required",
                  },
                  maxLength: {
                    value: 30,
                    message: "Max 30 character required ",
                  },
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid Email Address ",
                  },
                })}
              />

              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
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
                  required: "Password is required",
                  minLength: {
                    value: 3,
                    message: "minimum 3 character required",
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
            <button className="w-full rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-bold text-white">
              Register
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-teal-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
  }
