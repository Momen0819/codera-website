import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Mail, Phone, MapPin, MessageCircle, Heart } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import type { Dictionary } from "@/i18n/get-dictionary";

interface FooterProps {
  lang: string;
  dict: Dictionary;
}

export default function Footer({ lang, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle Circuit Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-brand-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-12 w-48 bg-white/5 p-2 rounded-xl border border-white/10 backdrop-blur-sm">
              <Image
                src="/brand/logo-horizontal.jpg"
                alt="Codera Logo"
                fill
                className="object-contain p-1 rounded-lg"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              {dict.footer.about}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800/80 hover:bg-brand-cyan hover:text-brand-navy rounded-lg transition-all text-slate-300"
                aria-label="Codera GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800/80 hover:bg-brand-cyan hover:text-brand-navy rounded-lg transition-all text-slate-300"
                aria-label="Codera LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800/80 hover:bg-brand-cyan hover:text-brand-navy rounded-lg transition-all text-slate-300"
                aria-label="Codera WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base">{dict.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${lang}`} className="hover:text-brand-cyan transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}#services`} className="hover:text-brand-cyan transition-colors">
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}#portfolio`} className="hover:text-brand-cyan transition-colors">
                  {dict.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}#estimator`} className="hover:text-brand-cyan transition-colors">
                  {dict.nav.estimator}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}#contact`} className="hover:text-brand-cyan transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Engineering Services */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base">{dict.footer.servicesTitle}</h3>
            <ul className="space-y-2 text-sm">
              {dict.services.list.map((service) => (
                <li key={service.id}>
                  <Link href={`/${lang}#services`} className="hover:text-brand-cyan transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & HQ */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base">{dict.contact.channels.directTitle}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan mt-1 shrink-0" />
                <span className="text-xs text-slate-300">{siteConfig.address[lang === "ar" ? "ar" : "en"]}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-cyan font-mono text-xs">
                  {siteConfig.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-cyan text-xs">
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% NDA & Code Ownership</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{dict.footer.rights}</p>
          <div className="flex items-center gap-1.5">
            <span>{dict.footer.madeWithLove}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
