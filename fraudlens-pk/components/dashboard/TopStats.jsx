import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { GlassCard } from "@/components/ui/Card";

const TONE_CLASSES = {
  red: "text-red-400 bg-red-500/10 border-red-500/20",
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  green: "text-green-400 bg-green-500/10 border-green-500/20",
  cyan: "text-accent bg-cyan-500/10 border-cyan-500/20",
};

export function TopStatCard({ label, value, icon: Icon, tone, trend }) {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${TONE_CLASSES[tone]}`}>
          <Icon className="w-5 h-5" />
        </div>
        {trend !== undefined && (
          <span className={`flex items-center text-xs font-medium ${trend > 0 ? "text-green-400" : "text-red-400"}`}>
            {trend > 0 ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
            {Math.abs(trend)}%
          </span>
        )}
      </div>
      <p className="text-3xl font-bold text-white mt-4">{value}</p>
      <p className="text-sm text-slate-400 mt-1">{label}</p>
    </GlassCard>
  );
}

export function TopStatsSkeleton() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <GlassCard key={i} className="p-6 h-[128px] animate-pulse">
          <div className="w-11 h-11 rounded-xl bg-white/10" />
          <div className="h-6 w-16 bg-white/10 rounded mt-4" />
          <div className="h-3 w-24 bg-white/10 rounded mt-2" />
        </GlassCard>
      ))}
    </>
  );
}
