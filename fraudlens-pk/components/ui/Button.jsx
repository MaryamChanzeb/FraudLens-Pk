import { cn } from "@/lib/utils";

/**
 * Simple reusable button.
 * variant: "primary" | "outline" | "ghost"
 */
export function Button({ variant = "primary", className = "", children, ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold px-6 py-3.5 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-accent text-slate-900 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25",
    outline:
      "border border-white/15 text-white hover:border-accent/40 hover:bg-white/5",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
