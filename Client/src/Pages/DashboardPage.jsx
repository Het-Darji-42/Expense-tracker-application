import { Percent, PiggyBank, Receipt, Wallet } from "lucide-react";
import DashboardLayout from "../Component/DashboardLayout";
import StatCard from "../Component/StatCard";
import RecentTransactions from "../Component/RecentTransactions";
import CategoryBreakdown from "../Component/CategoryBreakdown";
import BarChartBox from "../Component/BarChartBox";
import PieChartBox from "../Component/PieChartBox";
import LineChartBox from "../Component/LineChartBox";

export default function DashboardPage() {
  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-teal-700">
              Finance Dashboard
            </h2>
            <p className="text-sm text-slate-500">
              Monthly overview and transaction summary
            </p>
          </div>
          <button className="rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-bold text-white">
            + Add Transaction
          </button>
        </div>
      </section>

      <section className="space-y-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <StatCard
            label="This Month Income"
            value="₹1,06,000"
            caption="Income summary"
            icon={Wallet}
          />

          <StatCard
            label="This Month Expense"
            value="₹82,000"
            caption="Expense summary"
            icon={Receipt}
            tone="orange"
          />

          <StatCard
            label="This Month Savings"
            value="₹24,000"
            caption="23% of income"
            icon={PiggyBank}
            tone="blue"
          />
        </div>

        {/* <BarChartBox /> */}
        <PieChartBox />

       
        {/* <LineChartBox /> */}
      </section>
    </div>
  );
}
