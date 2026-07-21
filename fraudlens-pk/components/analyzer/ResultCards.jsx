import React from "react";
import {
  AlertTriangle,
  ShieldAlert,
  Zap,
  Flag,
  XCircle,
  BookOpen,
  Languages,
  CheckCircle2,
  Ban,
  Lock,
  Activity,
  ChevronRight,
} from "lucide-react";
import { GlassCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { riskStyles } from "@/lib/styleHelpers";

export function RiskScoreCard({ level, score }) {
  const s = riskStyles(level);
  return (
    <GlassCard className="p-6 flex flex-col items-center text-center">
      <div className={`relative w-28 h-28 rounded-full flex items-center justify-center border-4 ${s.border} ${s.bg}`}>
        <span className={`text-3xl font-bold ${s.text}`}>{score}%</span>
        <span className={`absolute -top-2 -right-2 w-4 h-4 rounded-full animate-pulse ${s.dot}`} />
      </div>
      <p className="mt-4 text-sm text-slate-400">Risk Score</p>
      <Badge tone={level === "HIGH" ? "red" : level === "MEDIUM" ? "amber" : "green"}>
        <AlertTriangle className="w-3.5 h-3.5" /> {level} RISK
      </Badge>
    </GlassCard>
  );
}

export function ScamTypeCard({ type }) {
  return (
    <GlassCard className="p-6 flex flex-col items-center text-center justify-center">
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3">
        <ShieldAlert className="w-6 h-6 text-accent" />
      </div>
      <p className="text-sm text-slate-400">Scam Type</p>
      <p className="text-lg font-semibold text-white mt-1">{type}</p>
    </GlassCard>
  );
}

export function ConfidenceCard({ confidence }) {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-slate-400">Confidence</p>
        <Zap className="w-4 h-4 text-accent" />
      </div>
      <p className="text-3xl font-bold text-white mb-3">{confidence}%</p>
      <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300" style={{ width: confidence + "%" }} />
      </div>
    </GlassCard>
  );
}

export function RedFlagsCard({ flags }) {
  return (
    <GlassCard className="p-6 md:col-span-2">
      <div className="flex items-center gap-2 mb-4">
        <Flag className="w-4 h-4 text-red-400" />
        <p className="text-sm font-semibold text-white">Red Flags Detected</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {flags.map((f, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs text-red-300">
            <XCircle className="w-3.5 h-3.5" /> {f}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

export function EnglishExplanationCard({ text }) {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-4 h-4 text-accent" />
        <p className="text-sm font-semibold text-white">English Explanation</p>
      </div>
      <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
    </GlassCard>
  );
}

export function UrduExplanationCard({ text }) {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <Languages className="w-4 h-4 text-accent" />
        <p className="text-sm font-semibold text-white">Roman Urdu</p>
      </div>
      <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
    </GlassCard>
  );
}

export function SafeActionsCard({ actions }) {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle2 className="w-4 h-4 text-green-400" />
        <p className="text-sm font-semibold text-white">Safe Actions</p>
      </div>
      <ul className="space-y-2.5">
        {actions.map((a, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" /> {a}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

export function DoNotDoCard({ items }) {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Ban className="w-4 h-4 text-red-400" />
        <p className="text-sm font-semibold text-white">Do Not</p>
      </div>
      <ul className="space-y-2.5">
        {items.map((a, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {a}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

export function PrivacyWarningCard() {
  return (
    <GlassCard className="p-6 md:col-span-2 bg-cyan-500/[0.04]">
      <div className="flex items-start gap-3">
        <Lock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-white mb-1">Privacy First</p>
          <p className="text-sm text-slate-400 leading-relaxed">
            This is a demo analysis running entirely in your browser. Nothing you paste here is stored, uploaded, or
            shared with any server.
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

export function AttackChainCard({ steps }) {
  return (
    <GlassCard className="p-6 md:col-span-2">
      <div className="flex items-center gap-2 mb-5">
        <Activity className="w-4 h-4 text-accent" />
        <p className="text-sm font-semibold text-white">Attack Chain</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">{s}</span>
            {i < steps.length - 1 && <ChevronRight className="w-4 h-4 text-slate-600" />}
          </React.Fragment>
        ))}
      </div>
    </GlassCard>
  );
}
