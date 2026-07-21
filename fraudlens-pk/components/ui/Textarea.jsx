import { cn } from "@/lib/utils";

/**
 * Textarea styled for the dark theme.
 * Text and placeholder colors are explicit so they are never invisible
 * against the dark background (this was a bug in the earlier version).
 */
export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={cn(
        "w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] p-5",
        "text-slate-100 placeholder:text-slate-500 caret-accent",
        "focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20",
        "transition-all duration-200",
        className
      )}
      {...props}
    />
  );
}
