export default function BarChartBox({ title = "Income vs Expense" }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-base font-extrabold text-slate-950">{title}</h3>
        <span className="text-xs font-semibold text-slate-500">Static chart UI</span>
      </div>

        <h1>Chart - using react library </h1>
      <div className="mt-4 flex items-center justify-center gap-5 text-xs font-semibold text-slate-600">
        <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-teal-500" /> Income</span>
        <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-orange-500" /> Expense</span>
      </div>
    </div>
  );
}
