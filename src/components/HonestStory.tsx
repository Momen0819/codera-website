import Link from "next/link";
import { MessageSquareQuote, ShieldAlert, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

interface HonestStoryProps {
  lang: string;
  dict: Dictionary;
}

export default function HonestStory({ lang, dict }: HonestStoryProps) {
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy p-8 sm:p-12 text-white overflow-hidden shadow-2xl border border-brand-cyan/20">
          {/* Circuit background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan-glow text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{dict.honestStory.badge}</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-black text-white leading-snug">
              {dict.honestStory.title}
            </h2>

            <div className="relative pl-6 rtl:pl-0 rtl:pr-6 border-l-2 rtl:border-l-0 rtl:border-r-2 border-brand-cyan/60">
              <p className="text-sm sm:text-lg text-slate-200 leading-relaxed italic">
                {dict.honestStory.quote}
              </p>
              <p className="mt-3 text-xs sm:text-sm font-semibold text-brand-cyan-glow">
                {dict.honestStory.author}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={`/${lang}#contact`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan text-brand-navy font-bold text-sm hover:bg-white hover:text-brand-navy transition-all shadow-md"
              >
                <span>{dict.honestStory.cta}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
