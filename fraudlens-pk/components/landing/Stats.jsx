"use client";

import { useRef, useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/Card";
import { useCountUp } from "@/lib/useCountUp";
import { STATS } from "@/data/dummyData";

function StatCard({ stat, active }) {
  const val = useCountUp(stat.value, active);
  const Icon = stat.icon;
  return (
    <GlassCard className="p-6 text-center">
      <Icon className="w-5 h-5 text-accent mx-auto mb-3" />
      <p className="text-3xl md:text-4xl font-bold text-white tabular-nums">
        {val.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="text-sm text-slate-400 mt-2">{stat.sub || stat.label}</p>
    </GlassCard>
  );
}

export function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setActive(true), { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {STATS.map((s, i) => (
          <StatCard key={i} stat={s} active={active} />
        ))}
      </div>
    </section>
  );
}
