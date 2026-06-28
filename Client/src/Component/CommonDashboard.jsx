import { Percent, Receipt, Wallet } from "lucide-react";
import StatCard from "./StatCard";

export default function CommonDashboard() {
  return (
    <div className="space-y-5">
      {/* Top Cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Balance"
          value="?3,44,000"
          caption="+?24,000 this month"
          icon={Wallet}
        />

        <StatCard
          label="Monthly Income"
          value="?1,06,000"
          caption="+12.5% from last month"
          icon={Wallet}
        />

        <StatCard
          label="Monthly Expense"
          value="?82,000"
          caption="0% from last month"
          icon={Receipt}
          tone="orange"
        />

        <StatCard
          label="Savings Rate"
          value="23%"
          caption="Good"
          icon={Percent}
          tone="blue"
        />
      </section>

      {/* Heading */}
      {/* <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
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
      </section> */}
    </div>
  );
}