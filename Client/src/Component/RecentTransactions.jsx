import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardThunk } from "../feature/Dashboard/dashboardThunk";

export default function RecentTransactions() {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(dashboardThunk());
  }, [dispatch]);

  useEffect(() => {
    console.log("transaction  data", data);
  }, [data]);

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-extrabold text-slate-950">
          Recent Transactions
        </h3>
        <span className="text-xs font-semibold text-slate-500">
          Newest first
        </span>
      </div>
      <div className="space-y-3">
        {data?.recentTransactions?.map((item) => (
          <div
            key={item._id}
            className={`flex items-center justify-between rounded-lg border border-slate-100 p-3  ${item.type == "income" ? "text-green-600 bg-green-50 hover:bg-green-200" : "text-red-600 bg-red-50 hover:bg-red-200"}`}
          >
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div
                className={`grid h-10 w-10 place-items-center rounded-lg  ${item.type == "income" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"} `}
              >
                <ArrowUpRight size={18} />
              </div>

              {/* Details */}
              <div>
                <p className="font-semibold text-slate-900">
                  {item.description}
                </p>

                <p className="text-xs text-slate-500">Salary • 1 Jul 2026</p>
              </div>
            </div>

            {/* Amount */}
            <p className={`font-bold ${item.type == "income"? "text-green-600": "text-red-600" } `}>+₹13,000</p>
          </div>
        ))}
      </div>
    </div>
  );
}
