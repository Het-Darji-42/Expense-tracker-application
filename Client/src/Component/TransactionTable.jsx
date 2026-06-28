import { Edit2, Trash2 } from "lucide-react";

export default function TransactionTable({ type = "income" }) {
  const amountColor = type === "expense" ? "text-orange-600" : "text-teal-600";
  const title = type === "expense" ? "Expense Transactions" : "Income Transactions";

  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
        <h3 className="text-base font-extrabold text-slate-950">{title}</h3>
        <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600">Export</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3 text-right">Amount</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-4 py-4 font-semibold text-slate-900">Monthly salary</td>
              <td className="px-4 py-4 text-slate-600">Job</td>
              <td className="px-4 py-4 text-slate-500">28 Jun 2026</td>
              <td className={`money px-4 py-4 text-right font-extrabold ${amountColor}`}>?50,000</td>
              <td className="px-4 py-4">
                <div className="flex justify-end gap-2">
                  <button className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-slate-500"><Edit2 size={15} /></button>
                  <button className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-orange-600"><Trash2 size={15} /></button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-slate-900">Freelance website</td>
              <td className="px-4 py-4 text-slate-600">Freelance</td>
              <td className="px-4 py-4 text-slate-500">25 Jun 2026</td>
              <td className={`money px-4 py-4 text-right font-extrabold ${amountColor}`}>?12,000</td>
              <td className="px-4 py-4">
                <div className="flex justify-end gap-2">
                  <button className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-slate-500"><Edit2 size={15} /></button>
                  <button className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-orange-600"><Trash2 size={15} /></button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-slate-900">Electricity bill</td>
              <td className="px-4 py-4 text-slate-600">Bills</td>
              <td className="px-4 py-4 text-slate-500">20 Jun 2026</td>
              <td className={`money px-4 py-4 text-right font-extrabold ${amountColor}`}>?2,100</td>
              <td className="px-4 py-4">
                <div className="flex justify-end gap-2">
                  <button className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-slate-500"><Edit2 size={15} /></button>
                  <button className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-orange-600"><Trash2 size={15} /></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
