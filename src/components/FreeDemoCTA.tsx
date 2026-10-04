import Link from "next/link";
import Image from "next/image";
import { Sparkles, MessageCircle, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";
import type { Dictionary } from "@/i18n/get-dictionary";

interface FreeDemoCTAProps {
  lang: string;
  dict: Dictionary;
}

export default function FreeDemoCTA({ lang, dict }: FreeDemoCTAProps) {
  const isAr = lang === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-brand-navy-dark overflow-hidden p-8 sm:p-14 text-white border border-brand-cyan/30 shadow-2xl">
          {/* Background image overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="/brand/banner-circuits.jpg"
              alt="Circuits Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan-glow text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{dict.freeDemoBanner.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {dict.freeDemoBanner.title}
            </h2>

            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {dict.freeDemoBanner.subtitle}
            </p>

            {/* Guarantees */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                <span>{isAr ? "ديمو مجاني مخصص لشركتك" : "Custom Demo For Your Business"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{isAr ? "بدون أي التزام مالي مسبق" : "Zero Financial Obligation"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                <span>{isAr ? "تسليم سريع خلال 3-5 أيام" : "Quick Delivery (3-5 Days)"}</span>
              </div>
            </div>

            {/* CTA Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  isAr
                    ? "مرحباً كوديرا 👋، أرغب في الاستفادة من عرض الديمو المجاني لمشروعي."
                    : "Hello Codera 👋, I would like to request a Free Tailored Demo for my project."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-cyan hover:bg-white text-brand-navy font-black text-base shadow-luxury transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{dict.freeDemoBanner.button}</span>
              </a>

              <Link
                href={`/${lang}#contact`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all"
              >
                <span>{isAr ? "احجز جلسة استشارة" : "Book Discovery Session"}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
