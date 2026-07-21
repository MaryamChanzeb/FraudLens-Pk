export function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      <svg viewBox="0 0 300 300" className="relative w-full h-full">
        <defs>
          <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx="150" cy="150" r={70 + i * 30} fill="none" stroke="#164e63" strokeWidth="1" opacity="0.5" />
        ))}
        <g style={{ transformOrigin: "150px 150px" }} className="animate-[spin_18s_linear_infinite]">
          <circle cx="150" cy="40" r="5" fill="#06B6D4" />
        </g>
        <g style={{ transformOrigin: "150px 150px" }} className="animate-[spin_26s_linear_infinite_reverse]">
          <circle cx="260" cy="150" r="4" fill="#22C55E" />
        </g>
        <g style={{ transformOrigin: "150px 150px" }} className="animate-[spin_22s_linear_infinite]">
          <circle cx="150" cy="260" r="4" fill="#F59E0B" />
        </g>
        <path
          d="M150 70 L210 95 V150 C210 195 185 220 150 235 C115 220 90 195 90 150 V95 Z"
          fill="url(#shieldGrad)"
          stroke="#06B6D4"
          strokeWidth="2"
          opacity="0.9"
        />
        <path d="M120 150 L142 172 L182 128" fill="none" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M120 150 L142 172 L182 128" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
