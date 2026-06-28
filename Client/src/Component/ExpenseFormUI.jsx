import { Plus } from "lucide-react";

export default function ExpenseFormUI() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-base font-extrabold text-slate-950">Add Expense</h3>
          <p className="text-sm text-slate-500">Static form UI only</p>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange-50 text-orange-600"><Plus size={18} /></div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1.5"><span className="text-sm font-semibold text-slate-700">Description</span><input className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-orange-500" placeholder="Groceries" /></label>
        <label className="space-y-1.5"><span className="text-sm font-semibold text-slate-700">Amount</span><input className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-orange-500" placeholder="2500" /></label>
        <label className="space-y-1.5"><span className="text-sm font-semibold text-slate-700">Category</span><select className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-orange-500"><option>Food</option><option>Bills</option><option>Travel</option><option>Rent</option></select></label>
        <label className="space-y-1.5"><span className="text-sm font-semibold text-slate-700">Date</span><input type="date" className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-orange-500" /></label>
      </div>
      <button className="mt-5 rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm">Save Expense</button>
    </div>
  );
}
