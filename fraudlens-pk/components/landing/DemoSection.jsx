import Link from "next/link";
import { ArrowRight, MessageSquare, MousePointerClick } from "lucide-react";
import { GlassCard } from "@/components/ui/Card";
import { SectionEyebrow } from "@/components/shared/Bits";
import { DEMO_WHATSAPP } from "@/data/dummyData";

export function DemoSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionEyebrow icon={MousePointerClick}>See it in action</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">One tap. One clear answer.</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            This is a real scam pattern circulating on WhatsApp in Pakistan right now. See what FraudLens PK does with
            it.
          </p>
          <Link
            href="/analyze?demo=1"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-slate-900 font-semibold hover:bg-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Analyze Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <GlassCard className="p-5 bg-[#0b141a]">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">{DEMO_WHATSAPP.sender}</p>
              <p className="text-xs text-slate-500">Unknown sender</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#202c33] px-4 py-3">
              <p className="text-sm text-slate-100 leading-relaxed">{DEMO_WHATSAPP.text}</p>
              <p className="text-[10px] text-slate-500 mt-2 text-right">{DEMO_WHATSAPP.time}</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
