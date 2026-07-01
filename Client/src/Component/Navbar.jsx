import {
  Bell,
  Menu,
  Search,
  LogIn,
  LogInIcon,
  LogOut,
  User,
} from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { userProfileThunk } from "../feature/auth/authThunk";
import { Logout } from "../feature/auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(userProfileThunk());
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="hidden w-full max-w-sm items-center gap-2 rounded-lg   bg-slate-50 px-3 py-2 md:flex">
          {/* <Search size={16} className="text-slate-400" /> */}
          <span className="text-sm text-slate-400">Welcome back User</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600">
            <Bell size={18} />
          </button>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-2 py-1.5">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-teal-600 text-sm font-bold text-white">
              U
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-bold text-slate-900">
                {user?.username || "User"}
              </p>
              <p className="text-[11px] text-slate-500">
                {user?.email || "user@mail.com"}
              </p>
            </div>
          </div>

          {user ? (
            <button
              onClick={handleLogout}
              className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-red-600 hover:bg-red-50"
            >
              <LogOut size={18} />
            </button>
          ) : (
            <NavLink
              to="/login"
              className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
            >
              <User size={18} />
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}
