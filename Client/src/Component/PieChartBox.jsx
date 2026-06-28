export default function PieChartBox() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-base font-extrabold text-slate-950">Expense Distribution</h3>
        <span className="text-xs font-semibold text-slate-500">Static chart UI</span>
      </div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
        <div className="h-44 w-44 rounded-full bg-[conic-gradient(#f97316_0_35%,#3b82f6_35%_60%,#f59e0b_60%_80%,#14b8a6_80%_92%,#8b5cf6_92%_100%)] p-8">
          <div className="h-full w-full rounded-full bg-white" />
        </div>
        <div className="grid gap-2 text-sm">
          <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-orange-500" /> Food</div>
          <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-blue-500" /> Rent</div>
          <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-amber-500" /> Travel</div>
          <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-teal-500" /> Bills</div>
          <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-purple-500" /> Entertainment</div>
        </div>
      </div>  
    </div>
  );
}
