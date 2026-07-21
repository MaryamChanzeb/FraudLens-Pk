import { cn } from "@/lib/utils";

/** The signature glassmorphism card used everywhere in FraudLens PK. */
export function GlassCard({ children, className = "" }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-lg shadow-black/20",
        "transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.06]",
        className
      )}
    >
      {children}
    </div>
  );
}
