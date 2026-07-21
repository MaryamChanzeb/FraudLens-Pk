/** Tailwind classes for each risk level. Kept in one place so colors stay consistent. */
export function riskStyles(level) {
  const map = {
    HIGH: { text: "text-red-400", bg: "bg-red-500/15", border: "border-red-500/30", dot: "bg-red-500" },
    MEDIUM: { text: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/30", dot: "bg-amber-500" },
    LOW: { text: "text-green-400", bg: "bg-green-500/15", border: "border-green-500/30", dot: "bg-green-500" },
  };
  return map[level] || map.MEDIUM;
}

/** Tailwind classes for the colored scam-type cards on the landing page. */
export function colorToken(color) {
  const map = {
    red: { text: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", ring: "group-hover:border-red-500/50" },
    amber: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", ring: "group-hover:border-amber-500/50" },
    cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", ring: "group-hover:border-cyan-500/50" },
    green: { text: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", ring: "group-hover:border-green-500/50" },
  };
  return map[color] || map.cyan;
}
