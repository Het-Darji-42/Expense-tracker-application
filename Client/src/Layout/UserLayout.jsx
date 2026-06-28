import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import CommonDashboard from "../Component/CommonDashboard";
import RecentTransactions from "../Component/RecentTransactions";
import CategoryBreakdown from "../Component/CategoryBreakdown";

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />

      <div className="lg:pl-64">
        <Navbar />

        <main className="px-4 py-5 sm:px-6 lg:px-8 space-y-5">

          {/* Common cards */}
          <CommonDashboard />

          {/* Main content + Recent Transactions */}
          <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">

            {/* Left side */}
            <div className="xl:col-span-2">
              <Outlet />
            </div>

            {/* Right side */}
            <div>
              <RecentTransactions />
                          <CategoryBreakdown />

            </div>
            

          </section>

        </main>
      </div>
    </div>
  );
};

export default UserLayout;