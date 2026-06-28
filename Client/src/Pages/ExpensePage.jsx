import { ListChecks, Receipt, TrendingDown } from "lucide-react";
import DashboardLayout from "../Component/DashboardLayout";
import StatCard from "../Component/StatCard";
import OverviewFilter from "../Component/OverviewFilter";
import ExpenseFormUI from "../Component/ExpenseFormUI";
import TransactionTable from "../Component/TransactionTable";
import LineChartBox from "../Component/LineChartBox";
import PieChartBox from "../Component/PieChartBox";
import BarChartBox from "../Component/BarChartBox";

export default function ExpensePage() {
  return (
   
      <div className="space-y-5">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-950">
                Expense Overview
              </h2>
              <p className="text-sm text-slate-500">
                Track and manage your expenses
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <OverviewFilter />
              <button className="rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-bold text-white">
                + Add Expense
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatCard
            label="Total Expense"
            value="?82,000"
            caption="This month"
            icon={Receipt}
            tone="orange"
          />
          <StatCard
            label="Average Expense"
            value="?41,000"
            caption="2 transactions"
            icon={TrendingDown}
            tone="orange"
          />
          <StatCard
            label="Transactions"
            value="2"
            caption="All records"
            icon={ListChecks}
            tone="orange"
          />
        </section>

        <BarChartBox title="Daily Income Trends" />

        {/* <LineChartBox title="Daily Expense Trends" /> */}
        {/* <PieChartBox /> */}
        <ExpenseFormUI />
        <TransactionTable type="expense" />
      </div>
  );
}
