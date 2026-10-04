import { ShieldCheck, HeartHandshake, Sparkles, CodeXml, CheckCircle } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

interface TrustPillarsProps {
  lang: string;
  dict: Dictionary;
}

export default function TrustPillars({ lang, dict }: TrustPillarsProps) {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    HeartHandshake: HeartHandshake,
    Sparkles: Sparkles,
    CodeXml: CodeXml,
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan-light text-brand-navy text-xs font-bold">
            <span>{dict.trustPillars.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy">
            {dict.trustPillars.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {dict.trustPillars.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.trustPillars.pillars.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon as keyof typeof iconMap] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury hover:shadow-luxury-hover hover:border-brand-cyan/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan-light/80 text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-cyan transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-cyan transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-brand-cyan">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{lang === "ar" ? "معيار معتمد" : "Verified Guarantee"}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
