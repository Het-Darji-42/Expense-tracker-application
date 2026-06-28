export default function CategoryBreakdown() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-base font-extrabold text-slate-950">Spending by Category</h3>
        <span className="text-xs font-semibold text-slate-500">This month</span>
      </div>
      <div className="mb-5 flex h-2.5 overflow-hidden rounded-full bg-slate-100">
        <div className="w-[35%] bg-orange-500" />
        <div className="w-[25%] bg-blue-500" />
        <div className="w-[20%] bg-amber-500" />
        <div className="w-[12%] bg-teal-500" />
        <div className="w-[8%] bg-purple-500" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-orange-500" /><span className="w-24 text-sm font-semibold text-slate-700">Food</span><div className="h-2 flex-1 rounded-full bg-slate-100"><div className="h-2 w-[70%] rounded-full bg-orange-500" /></div><span className="money w-20 text-right text-sm font-bold">?15,880</span></div>
        <div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-blue-500" /><span className="w-24 text-sm font-semibold text-slate-700">Rent</span><div className="h-2 flex-1 rounded-full bg-slate-100"><div className="h-2 w-[80%] rounded-full bg-blue-500" /></div><span className="money w-20 text-right text-sm font-bold">?18,000</span></div>
        <div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-amber-500" /><span className="w-24 text-sm font-semibold text-slate-700">Travel</span><div className="h-2 flex-1 rounded-full bg-slate-100"><div className="h-2 w-[40%] rounded-full bg-amber-500" /></div><span className="money w-20 text-right text-sm font-bold">?7,800</span></div>
        <div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-teal-500" /><span className="w-24 text-sm font-semibold text-slate-700">Bills</span><div className="h-2 flex-1 rounded-full bg-slate-100"><div className="h-2 w-[32%] rounded-full bg-teal-500" /></div><span className="money w-20 text-right text-sm font-bold">?6,200</span></div>
      </div>
    </div>
  );
}
