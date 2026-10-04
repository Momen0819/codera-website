import { Cloud, Smartphone, Layout, TrendingUp, Check, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";

interface BentoServicesProps {
  lang: string;
  dict: Dictionary;
}

export default function BentoServices({ lang, dict }: BentoServicesProps) {
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const iconMap = {
    Cloud: Cloud,
    Smartphone: Smartphone,
    Layout: Layout,
    TrendingUp: TrendingUp,
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan-light text-brand-navy text-xs font-bold">
            <span>{dict.services.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-brand-navy">
            {dict.services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {dict.services.subtitle}
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Hero Card (Takes 2 cols on LG) */}
          <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900 p-8 sm:p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-xl border border-slate-800">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center">
                <Cloud className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {dict.services.list[0].title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                {dict.services.list[0].desc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 relative z-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {dict.services.list[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-slate-800/80 text-brand-cyan-light border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/${lang}#estimator`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan hover:text-white transition-colors"
              >
                <span>{lang === "ar" ? "ابدأ مشروع سحابي" : "Start Cloud Project"}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Web & Mobile Apps */}
          <div className="rounded-3xl bg-white p-8 border border-slate-200/80 shadow-luxury hover:shadow-luxury-hover hover:border-brand-cyan/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan-light text-brand-navy flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">
                {dict.services.list[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {dict.services.list[1].desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
              {dict.services.list[1].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-[11px] font-mono font-semibold rounded-md bg-slate-100 text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: UI/UX & Design Systems */}
          <div className="rounded-3xl bg-white p-8 border border-slate-200/80 shadow-luxury hover:shadow-luxury-hover hover:border-brand-cyan/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">
                {dict.services.list[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {dict.services.list[2].desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
              {dict.services.list[2].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-[11px] font-mono font-semibold rounded-md bg-slate-100 text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Digital Marketing & Growth (Takes 2 cols on LG) */}
          <div className="lg:col-span-2 rounded-3xl bg-gradient-to-r from-brand-navy-light/10 via-slate-50 to-brand-cyan-light/20 p-8 sm:p-10 border border-slate-200/80 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-navy text-brand-cyan flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
                {dict.services.list[3].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                {dict.services.list[3].desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {dict.services.list[3].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-white border border-slate-200 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/${lang}#contact`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-cyan transition-colors"
              >
                <span>{lang === "ar" ? "طلب خطة تسويقية" : "Request Growth Plan"}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
