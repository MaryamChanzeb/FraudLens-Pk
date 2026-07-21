"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/Card";
import { SAFETY_TIPS } from "@/data/dummyData";

export function SafetyTip() {
  // Picked once per page load so it doesn't change on every re-render.
  const [tipIndex] = useState(() => Math.floor(Math.random() * SAFETY_TIPS.length));

  return (
    <GlassCard className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-accent" />
        <p className="font-semibold text-white text-sm">Safety Tip of the Day</p>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed">{SAFETY_TIPS[tipIndex]}</p>
    </GlassCard>
  );
}
