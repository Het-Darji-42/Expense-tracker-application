import {
  BarChart3,
  Home,
  User,
  Wallet,
  Receipt,
  LogOut,
  HelpCircle,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

// i found this easy way! yup, its woderful because instead of writing same line in each and every Link is take more time
export default function Sidebar() {
  const navClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm font-semibold transition-all ${
      isActive
        ? "bg-teal-50 text-teal-700 border-teal-100"
        : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-950"
    }`;

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-5">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-teal-600 text-white">
          <BarChart3 size={20} />
        </div>

        <div>
          <p className="text-base font-extrabold text-slate-950">
            Expense Tracker
          </p>
          <p className="text-xs text-slate-500">MERN dashboard</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-5">
        <NavLink to="/" end className={navClass}>
          <Home size={17} />
          Dashboard
        </NavLink>

        <NavLink to="/income" className={navClass}>
          <Wallet size={17} />
          Income
        </NavLink>

        <NavLink to="/expense" className={navClass}>
          <Receipt size={17} />
          Expenses
        </NavLink>

        <NavLink to="/profile" className={navClass}>
          <User size={17} />
          Profile
        </NavLink>
      </nav>

      {/* Bottom Actions */}
      <div className="border-t border-slate-200 p-3">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">
          <HelpCircle size={17} />
          Support
        </button>

        <Link
          to="login"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
        >
          <LogOut size={17} />
          Logout
        </Link>
      </div>
    </aside>
  );
}
