import { Info } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/Bits";

export function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-5 md:px-8 py-20 border-t border-white/5 scroll-mt-20">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <SectionEyebrow icon={Info}>About</SectionEyebrow>
          <h2 className="text-3xl font-bold text-white">Why FraudLens PK exists</h2>
        </div>
        <div className="md:col-span-2 space-y-4 text-slate-400 leading-relaxed">
          <p>
            Online scams are spreading fast across WhatsApp, SMS, email, and job groups in Pakistan — and most
            security tools focus on antivirus and email filtering, not simple, localized explanation.
          </p>
          <p>
            FraudLens PK turns cybersecurity analysis into plain guidance. Paste a message, get a risk score, a scam
            type, the exact red flags, and a Roman Urdu explanation anyone can understand — plus a clear list of what
            to do next.
          </p>
        </div>
      </div>
    </section>
  );
}
