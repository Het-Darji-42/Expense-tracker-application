export default function OverviewFilter() {
  return (
    <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 text-xs font-semibold text-slate-600">
      <button className="rounded-md px-3 py-1.5 hover:bg-slate-50">Daily</button>
      <button className="rounded-md px-3 py-1.5 hover:bg-slate-50">Weekly</button>
      <button className="rounded-md bg-teal-600 px-3 py-1.5 text-white">Monthly</button>
      <button className="rounded-md px-3 py-1.5 hover:bg-slate-50">Yearly</button>
    </div>
  );
}
