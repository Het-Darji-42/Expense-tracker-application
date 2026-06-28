export default function StatCard({ label, value, caption, icon: Icon, tone = "teal" }) {
  const toneClass = tone === "orange" ? "bg-orange-50 text-orange-600" : tone === "blue" ? "bg-blue-50 text-blue-600" : "bg-teal-50 text-teal-600";

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="money mt-2 text-2xl font-extrabold text-slate-950">{value}</p>
          <p className="mt-1 text-xs text-slate-500">{caption}</p>
        </div>
        <div className={`grid h-10 w-10 place-items-center rounded-lg ${toneClass}`}>{Icon ? <Icon size={18} /> : null}</div>
      </div>
    </div>
  );
}
