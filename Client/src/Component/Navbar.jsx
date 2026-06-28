import { Bell, Menu, Search } from "lucide-react";

export default function Navbar() {
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
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-teal-600 text-sm font-bold text-white">U</div>
            <div className="hidden sm:block">
              <p className="text-xs font-bold text-slate-900">User</p>
              <p className="text-[11px] text-slate-500">user@mail.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
