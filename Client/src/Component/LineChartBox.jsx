export default function LineChartBox({ title = "Monthly Trend" }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-base font-extrabold text-slate-950">{title}</h3>
        <span className="text-xs font-semibold text-slate-500">Static chart UI</span>
      </div>
      <div className="relative h-64 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
        <div className="absolute inset-x-0 top-1/4 border-t border-dashed border-slate-200" />
        <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-slate-200" />
        <div className="absolute inset-x-0 top-3/4 border-t border-dashed border-slate-200" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 240" preserveAspectRatio="none">
          <polyline points="0,170 100,135 200,150 300,95 400,120 500,70 600,90" fill="none" stroke="#0d9488" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="0,200 100,185 200,178 300,150 400,165 500,135 600,145" fill="none" stroke="#ea580c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
