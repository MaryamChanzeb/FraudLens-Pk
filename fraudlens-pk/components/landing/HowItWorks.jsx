import React from "react";
import { ChevronDown, Zap } from "lucide-react";
import { GlassCard } from "@/components/ui/Card";
import { SectionEyebrow } from "@/components/shared/Bits";
import { STEPS } from "@/data/dummyData";

export function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 border-t border-white/5">
      <SectionEyebrow icon={Zap}>Process</SectionEyebrow>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">How it works</h2>
      <div className="flex flex-col items-center gap-3 max-w-md mx-auto">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <React.Fragment key={i}>
              <GlassCard className="p-5 w-full flex items-center gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{s.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.desc}</p>
                </div>
              </GlassCard>
              {i < STEPS.length - 1 && <ChevronDown className="w-5 h-5 text-cyan-500/50" />}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
