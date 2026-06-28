import { Mail, MapPin, Phone, User } from "lucide-react";
import DashboardLayout from "../Component/DashboardLayout";
import StatCard from "../Component/StatCard";

export default function ProfilePage() {
  return (
  
      <div className="space-y-5">
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid h-20 w-20 place-items-center rounded-lg bg-teal-600 text-2xl font-extrabold text-white">
                U
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-slate-950">
                  User Name
                </h2>
                <p className="text-sm text-slate-500">user@example.com</p>
              </div>
            </div>
            <button className="rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-bold text-white">
              Edit Profile
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatCard
            label="Monthly Income"
            value="?1,06,000"
            caption="Current month"
            icon={User}
          />
          <StatCard
            label="Monthly Expense"
            value="?82,000"
            caption="Current month"
            icon={User}
            tone="orange"
          />
          <StatCard
            label="Savings"
            value="?24,000"
            caption="Current month"
            icon={User}
            tone="blue"
          />
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-5 text-base font-extrabold text-slate-950">
            Profile Details
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg border border-slate-100 p-4">
              <Mail className="text-teal-600" size={18} />
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <p className="font-semibold text-slate-900">user@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-100 p-4">
              <Phone className="text-teal-600" size={18} />
              <div>
                <p className="text-xs text-slate-500">Phone</p>
                <p className="font-semibold text-slate-900">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-100 p-4">
              <MapPin className="text-teal-600" size={18} />
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="font-semibold text-slate-900">
                  Ahmedabad, Gujarat
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-100 p-4">
              <User className="text-teal-600" size={18} />
              <div>
                <p className="text-xs text-slate-500">Joined</p>
                <p className="font-semibold text-slate-900">June 2026</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
