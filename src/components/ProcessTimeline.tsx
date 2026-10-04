import { Search, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

interface ProcessTimelineProps {
  lang: string;
  dict: Dictionary;
}

export default function ProcessTimeline({ lang, dict }: ProcessTimelineProps) {
  const icons = [Search, PenTool, Code2, ShieldCheck, Rocket];

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan-light text-brand-navy text-xs font-bold">
            <span>{dict.process.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-brand-navy">
            {dict.process.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {dict.process.subtitle}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {dict.process.steps.map((step, idx) => {
            const Icon = icons[idx] || Rocket;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-luxury hover:shadow-luxury-hover hover:border-brand-cyan/50 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-brand-cyan">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan-light flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-cyan transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
