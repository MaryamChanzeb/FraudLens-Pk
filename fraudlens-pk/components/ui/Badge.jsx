import { cn } from "@/lib/utils";

const TONES = {
  cyan: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  red: "bg-red-500/15 text-red-400 border-red-500/30",
  amber: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  green: "bg-green-500/15 text-green-400 border-green-500/30",
};

export function Badge({ tone = "cyan", className = "", children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        TONES[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
