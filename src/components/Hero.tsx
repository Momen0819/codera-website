import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, Terminal, Code2, Cpu } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

interface HeroProps {
  lang: string;
  dict: Dictionary;
}

export default function Hero({ lang, dict }: HeroProps) {
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-slate-50/30">
      {/* Circuit Glow Background Layer */}
      <div className="absolute inset-0 bg-circuit-overlay pointer-events-none opacity-60" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan-light/60 border border-brand-cyan/30 text-brand-navy text-xs sm:text-sm font-bold shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-cyan" />
            <span>{dict.hero.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight leading-[1.2] sm:leading-[1.15]">
            <span>{dict.hero.titleStart} </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-navy via-brand-cyan to-brand-navy-light underline decoration-brand-cyan/40 decoration-wavy decoration-2">
              {dict.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            {dict.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href={`/${lang}#estimator`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold text-white bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy hover:to-brand-cyan rounded-xl shadow-luxury hover:shadow-glow-cyan transition-all transform hover:-translate-y-1"
            >
              <span>{dict.hero.primaryCta}</span>
              <ArrowIcon className="w-5 h-5 text-brand-cyan-glow" />
            </Link>

            <Link
              href={`/${lang}#portfolio`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-cyan rounded-xl shadow-sm transition-all"
            >
              <span>{dict.hero.secondaryCta}</span>
            </Link>
          </div>

          {/* Honest Guarantee Banner */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 border border-emerald-200 shadow-sm text-emerald-800 text-xs sm:text-sm font-semibold max-w-2xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{dict.hero.honestGuarantee}</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Code Preview / Banner Mockup */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white p-2">
            <div className="relative h-64 sm:h-96 md:h-[420px] w-full rounded-xl overflow-hidden bg-brand-navy-dark">
              <Image
                src="/brand/banner-main.jpg"
                alt="Codera Enterprise Tech"
                fill
                className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-transparent to-brand-navy-dark/30 pointer-events-none" />

              {/* Floating Code badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto bg-brand-navy/90 backdrop-blur-md p-4 rounded-xl border border-brand-cyan/30 text-white max-w-md shadow-glow-navy">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan mb-2">
                  <Terminal className="w-4 h-4" />
                  <span>Codera Full-Stack Architecture</span>
                </div>
                <div className="space-y-1 font-mono text-xs text-slate-300">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Clean Code & 100% Test Coverage</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Automated WhatsApp & Cloud API Sync</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-luxury text-center hover:border-brand-cyan/40 transition-all">
            <p className="text-3xl sm:text-4xl font-black text-brand-navy font-mono">
              {dict.hero.stats.exp}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
              {dict.hero.stats.expDesc}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-luxury text-center hover:border-brand-cyan/40 transition-all">
            <p className="text-3xl sm:text-4xl font-black text-brand-cyan font-mono">
              {dict.hero.stats.projects}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
              {dict.hero.stats.projectsDesc}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-luxury text-center hover:border-brand-cyan/40 transition-all">
            <p className="text-3xl sm:text-4xl font-black text-brand-navy font-mono">
              {dict.hero.stats.uptime}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
              {dict.hero.stats.uptimeDesc}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-luxury text-center hover:border-brand-cyan/40 transition-all">
            <p className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">
              {dict.hero.stats.guarantee}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
              {dict.hero.stats.guaranteeDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
