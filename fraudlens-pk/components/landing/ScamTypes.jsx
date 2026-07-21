import { ShieldAlert } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/Bits";
import { colorToken } from "@/lib/styleHelpers";
import { SCAM_TYPES } from "@/data/dummyData";

export function ScamTypes() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 border-t border-white/5">
      <SectionEyebrow icon={ShieldAlert}>Coverage</SectionEyebrow>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Supported scam types</h2>
      <p className="text-slate-400 max-w-2xl mb-12">
        Trained on the patterns Pakistani users actually encounter every day.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {SCAM_TYPES.map((t, i) => {
          const c = colorToken(t.color);
          const Icon = t.icon;
          return (
            <div
              key={i}
              className={`group rounded-xl border bg-white/[0.03] p-5 flex flex-col items-center text-center gap-3 transition-all hover:-translate-y-1 ${c.border} ${c.ring}`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${c.bg}`}>
                <Icon className={`w-5 h-5 ${c.text}`} />
              </div>
              <p className="text-sm font-medium text-slate-200">{t.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
