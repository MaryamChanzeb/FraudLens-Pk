"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { GlassCard } from "@/components/ui/Card";
import { SectionEyebrow } from "@/components/shared/Bits";
import { FEATURES } from "@/data/dummyData";

export function Features() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 border-t border-white/5">
      <SectionEyebrow icon={Layers}>Capabilities</SectionEyebrow>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Everything you need to spot a scam</h2>
      <p className="text-slate-400 max-w-2xl mb-12">
        One analysis, eight ways to understand exactly what you&apos;re looking at.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            >
              <GlassCard className="p-6 group hover:-translate-y-1 h-full">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="font-semibold text-white mb-2">{f.title}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
