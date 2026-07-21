import { riskStyles } from "@/lib/styleHelpers";

/** A small uppercase label with an icon, used above section headings. */
export function SectionEyebrow({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 text-accent mb-3">
      <Icon className="w-4 h-4" />
      <span className="text-xs font-semibold tracking-[0.2em] uppercase">{children}</span>
    </div>
  );
}

/** Pill used in the dashboard table for scan status (Blocked / Flagged / Reviewed). */
export function StatusPill({ status }) {
  const map = {
    Blocked: "bg-red-500/15 text-red-400 border-red-500/30",
    Flagged: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    Reviewed: "bg-green-500/15 text-green-400 border-green-500/30",
  };
  return <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${map[status]}`}>{status}</span>;
}

/** Pill used to show HIGH / MEDIUM / LOW risk. */
export function RiskPill({ risk }) {
  const s = riskStyles(risk);
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${s.bg} ${s.text} ${s.border}`}>
      {risk}
    </span>
  );
}
