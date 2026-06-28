import { Plus } from "lucide-react";

export default function IncomeFormUI() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-base font-extrabold text-slate-950">Add Income</h3>
          <p className="text-sm text-slate-500">Static form UI only</p>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-teal-50 text-teal-600"><Plus size={18} /></div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1.5"><span className="text-sm font-semibold text-slate-700">Description</span><input className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-teal-500" placeholder="Salary" /></label>
        <label className="space-y-1.5"><span className="text-sm font-semibold text-slate-700">Amount</span><input className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-teal-500" placeholder="50000" /></label>
        <label className="space-y-1.5"><span className="text-sm font-semibold text-slate-700">Category</span><select className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-teal-500"><option>Job</option><option>Freelance</option><option>Investment</option><option>Bonus</option></select></label>
        <label className="space-y-1.5"><span className="text-sm font-semibold text-slate-700">Date</span><input type="date" className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-teal-500" /></label>
      </div>
      <button className="mt-5 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm">Save Income</button>
    </div>
  );
}
