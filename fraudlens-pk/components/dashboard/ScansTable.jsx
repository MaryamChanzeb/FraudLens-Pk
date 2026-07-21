"use client";

import { useMemo, useState } from "react";
import { Search, Filter, ChevronDown, FileWarning } from "lucide-react";
import { GlassCard } from "@/components/ui/Card";
import { StatusPill, RiskPill } from "@/components/shared/Bits";
import { HISTORY_ROWS } from "@/data/dummyData";

const FILTERS = ["All", "High", "Medium", "Low"];

export function ScansTable({ loading }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    return HISTORY_ROWS.filter((r) => {
      const matchesQuery = r.type.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === "All" || r.risk === filter.toUpperCase();
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <GlassCard className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <p className="font-semibold text-white">Recent Scans</p>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search scam type..."
              className="pl-9 pr-3 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-accent/40 w-full sm:w-48"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-sm text-slate-200 hover:border-accent/40 transition-colors"
            >
              <Filter className="w-3.5 h-3.5" /> {filter} <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {filterOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-lg border border-white/10 bg-secondary shadow-xl z-10 overflow-hidden">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => {
                      setFilter(f);
                      setFilterOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:bg-white/5"
                  >
                    {f}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-10 rounded-lg bg-white/5 animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="py-16 flex flex-col items-center text-center gap-3">
          <FileWarning className="w-8 h-8 text-slate-600" />
          <p className="text-sm text-slate-400">No scans match your search or filter.</p>
          <button
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
            className="text-xs text-accent hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <>
          {/* Table — desktop */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500 border-b border-white/10">
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Scam Type</th>
                  <th className="pb-3 font-medium">Risk</th>
                  <th className="pb-3 font-medium">Confidence</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors">
                    <td className="py-3 text-slate-400">{r.date}</td>
                    <td className="py-3 text-slate-200 font-medium">{r.type}</td>
                    <td className="py-3">
                      <RiskPill risk={r.risk} />
                    </td>
                    <td className="py-3 text-slate-300">{r.confidence}%</td>
                    <td className="py-3">
                      <StatusPill status={r.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Cards — mobile */}
          <div className="sm:hidden space-y-3">
            {filtered.map((r, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-slate-100 text-sm">{r.type}</p>
                  <RiskPill risk={r.risk} />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{r.date}</span>
                  <span>{r.confidence}% confidence</span>
                  <StatusPill status={r.status} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </GlassCard>
  );
}
