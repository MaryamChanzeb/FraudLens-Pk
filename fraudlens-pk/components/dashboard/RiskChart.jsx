"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { GlassCard } from "@/components/ui/Card";
import { HISTORY_ROWS } from "@/data/dummyData";

export function RiskChart() {
  const high = HISTORY_ROWS.filter((r) => r.risk === "HIGH").length;
  const medium = HISTORY_ROWS.filter((r) => r.risk === "MEDIUM").length;
  const low = HISTORY_ROWS.filter((r) => r.risk === "LOW").length;

  const data = [
    { name: "High", value: high, color: "#EF4444" },
    { name: "Medium", value: medium, color: "#F59E0B" },
    { name: "Low", value: low, color: "#22C55E" },
  ];

  return (
    <GlassCard className="p-6">
      <p className="font-semibold text-white mb-4">Risk Distribution</p>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={45} outerRadius={70} paddingAngle={3}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip contentStyle={{ background: "#111827", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }} />
            <Legend wrapperStyle={{ fontSize: 12, color: "#94a3b8" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}
