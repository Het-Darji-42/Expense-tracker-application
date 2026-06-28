import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function RecentTransactions() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-extrabold text-slate-950">Recent Transactions</h3>
        <span className="text-xs font-semibold text-slate-500">Newest first</span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
          <div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-lg bg-teal-50 text-teal-600"><ArrowUpRight size={17} /></div><div><p className="text-sm font-bold text-slate-900">Salary</p><p className="text-xs text-slate-500">Job • 28 Jun 2026</p></div></div><p className="money text-sm font-extrabold text-teal-600">+?50,000</p>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
          <div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-lg bg-orange-50 text-orange-600"><ArrowDownRight size={17} /></div><div><p className="text-sm font-bold text-slate-900">Groceries</p><p className="text-xs text-slate-500">Food • 27 Jun 2026</p></div></div><p className="money text-sm font-extrabold text-orange-600">-?3,200</p>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
          <div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-lg bg-teal-50 text-teal-600"><ArrowUpRight size={17} /></div><div><p className="text-sm font-bold text-slate-900">Freelance website</p><p className="text-xs text-slate-500">Freelance • 25 Jun 2026</p></div></div><p className="money text-sm font-extrabold text-teal-600">+?12,000</p>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
          <div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-lg bg-orange-50 text-orange-600"><ArrowDownRight size={17} /></div><div><p className="text-sm font-bold text-slate-900">Electricity bill</p><p className="text-xs text-slate-500">Bills • 20 Jun 2026</p></div></div><p className="money text-sm font-extrabold text-orange-600">-?2,100</p>
        </div>
      </div>
    </div>
  );
}
