import { DollarSign, ListChecks, TrendingUp } from "lucide-react";
import DashboardLayout from "../Component/DashboardLayout";
import StatCard from "../Component/EmptyState";
import OverviewFilter from "../Component/OverviewFilter";
import IncomeFormUI from "../Component/IncomeFormUI";
import TransactionTable from "../Component/TransactionTable";
import BarChartBox from "../Component/BarChartBox";

export default function IncomePage() {
  return (
  
      <div className="space-y-5">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-950">
                Income Overview
              </h2>
              <p className="text-sm text-slate-500">
                Track and manage your income sources
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <OverviewFilter />
              <button className="rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-bold text-white">
                + Add Income
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatCard
            label="Total Income"
            value="?1,06,000"
            caption="This month"
            icon={DollarSign}
          />
          <StatCard
            label="Average Income"
            value="?53,000"
            caption="2 transactions"
            icon={TrendingUp}
            tone="blue"
          />
          <StatCard
            label="Transactions"
            value="2"
            caption="All records"
            icon={ListChecks}
          />
        </section>

        {/* <BarChartBox title="Daily Income Trends" /> */}
        <IncomeFormUI />
        <TransactionTable type="income" />
      </div>
  );
}
