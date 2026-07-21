import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pb-24">
      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-primary to-primary p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to check if a message is a scam?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          It takes less time to analyze than it does to fall for it.
        </p>
        <Link
          href="/analyze"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-accent text-slate-900 font-semibold hover:bg-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/25"
        >
          Analyze Now <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
