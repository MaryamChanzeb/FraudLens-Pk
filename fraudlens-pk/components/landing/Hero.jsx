"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { HeroIllustration } from "./HeroIllustration";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge tone="cyan">
            <Sparkles className="w-3.5 h-3.5" /> 
          </Badge>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Detect Digital Scams Before They Detect You
          </h1>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
            AI-powered scam detection built for Pakistan. Analyze suspicious messages, URLs and emails in seconds.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/analyze"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-slate-900 font-semibold hover:bg-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Analyze Now <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/analyze?demo=1"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 text-white font-semibold hover:border-accent/40 hover:bg-white/5 transition-all"
            >
              Try Demo
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}
