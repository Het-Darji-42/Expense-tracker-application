import { Percent, Receipt, Wallet } from "lucide-react";
import StatCard from "./StatCard";
import { useDispatch, useSelector } from "react-redux";
import { dashboardThunk } from "../feature/Dashboard/dashboardThunk";
import { useEffect } from "react";

export default function CommonDashboard() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(dashboardThunk());
  }, [dispatch]);

  useEffect(() => {
    console.log("ommonDashboard data", data);
  }, [data]);

  if (loading) {
    return (
      <p className="h-screen w-screen bg-black text-white font-bold text-6xl">
        Loading...
      </p>
    );
  }
  return (
    <div className="space-y-5">
      {/* Top Cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Balance"
          value={`₹${data?.savings || 0}`}
          caption="+?24,000 this month"
          icon={Wallet}
        />

        <StatCard
          label="Monthly Income"
          value={`₹${data?.monthlyIncome || 0}`}
          caption="+12.5% from last month"
          icon={Wallet}
        />

        <StatCard
          label="Monthly Expense"
          value={`₹${data?.monthlyExpense || 0}`}
          caption="0% from last month"
          icon={Receipt}
          tone="orange"
        />

        <StatCard
          label="Savings Rate"
          value={`${data?.savingsRate || 0}%`}
          caption="Good"
          icon={Percent}
          tone="blue"
        />
      </section>
    </div>
  );
}
