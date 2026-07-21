"use client";

import { useEffect, useState } from "react";
import { BarChart3, ShieldAlert, AlertTriangle, ShieldCheck, LayoutDashboard } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { TopStatCard, TopStatsSkeleton } from "./TopStats";
import { ScansTable } from "./ScansTable";
import { RiskChart } from "./RiskChart";
import { SafetyTip } from "./SafetyTip";
import { HISTORY_ROWS } from "@/data/dummyData";

export function DashboardView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a short fetch delay so the loading state is visible on load.
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const total = HISTORY_ROWS.length;
  const high = HISTORY_ROWS.filter((r) => r.risk === "HIGH").length;
  const medium = HISTORY_ROWS.filter((r) => r.risk === "MEDIUM").length;
  const low = HISTORY_ROWS.filter((r) => r.risk === "LOW").length;

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <Badge tone="cyan">
        <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
      </Badge>
      <h1 className="mt-5 text-3xl md:text-4xl font-bold text-white tracking-tight">Your scan activity</h1>
      <p className="mt-3 text-slate-400 max-w-2xl">
        A running record of everything FraudLens PK has analyzed for you.
      </p>

      {/* Top stats */}
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {loading ? (
          <TopStatsSkeleton />
        ) : (
          <>
            <TopStatCard label="Total Scans" value={total} icon={BarChart3} tone="cyan" trend={12} />
            <TopStatCard label="High Risk" value={high} icon={ShieldAlert} tone="red" trend={-4} />
            <TopStatCard label="Medium Risk" value={medium} icon={AlertTriangle} tone="amber" trend={3} />
            <TopStatCard label="Low Risk" value={low} icon={ShieldCheck} tone="green" trend={8} />
          </>
        )}
      </div>

      <div className="mt-10 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ScansTable loading={loading} />
        </div>
        <div className="flex flex-col gap-6">
          <RiskChart />
          <SafetyTip />
        </div>
      </div>
    </div>
  );
}
