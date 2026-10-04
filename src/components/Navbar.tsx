"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, Sparkles, Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/site";
import type { Dictionary } from "@/i18n/get-dictionary";

interface NavbarProps {
  lang: string;
  dict: Dictionary;
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const otherLang = lang === "ar" ? "en" : "ar";
  const otherLangLabel = lang === "ar" ? "English" : "العربية";
  
  // Calculate target path for language switcher
  const pathWithoutLang = pathname.replace(`/${lang}`, "") || "";
  const langSwitchPath = `/${otherLang}${pathWithoutLang}`;

  const navLinks = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}#services`, label: dict.nav.services },
    { href: `/${lang}#portfolio`, label: dict.nav.portfolio },
    { href: `/${lang}#estimator`, label: dict.nav.estimator },
    { href: `/${lang}#contact`, label: dict.nav.contact },
  ];

  const ArrowIcon = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-3 group">
            <div className="relative h-10 w-36 sm:h-12 sm:w-44 overflow-hidden rounded-lg">
              <Image
                src="/brand/logo-horizontal.jpg"
                alt="Codera Logo"
                fill
                className="object-contain object-left rtl:object-right transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-cyan hover:bg-slate-50/80 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <Link
              href={langSwitchPath}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-brand-navy bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-all"
              title={otherLangLabel}
            >
              <Globe className="w-4 h-4 text-brand-cyan" />
              <span>{otherLangLabel}</span>
            </Link>

            {/* Direct WhatsApp Call */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                lang === "ar" ? "مرحباً كوديرا، أرغب في استشارة هندسية لمشروعي." : "Hello Codera, I'd like a technical consultation."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-brand-navy border border-brand-navy/20 hover:border-brand-navy hover:bg-brand-navy/5 rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-brand-navy" />
              <span>{dict.nav.callUs}</span>
            </a>

            {/* Free Demo CTA */}
            <Link
              href={`/${lang}#estimator`}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-brand-navy to-brand-navy-light hover:from-brand-navy-light hover:to-brand-cyan rounded-lg shadow-sm hover:shadow-glow-cyan transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan-glow" />
              <span>{dict.nav.freeDemo}</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={langSwitchPath}
              className="p-2 text-xs font-bold text-slate-700 bg-slate-100 rounded-lg"
            >
              {otherLang.toUpperCase()}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-navy rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-semibold text-slate-800 hover:text-brand-cyan hover:bg-slate-50 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href={`/${lang}#estimator`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-brand-navy rounded-lg shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-brand-cyan-glow" />
              <span>{dict.nav.freeDemo}</span>
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-brand-navy border border-slate-300 rounded-lg"
            >
              <Phone className="w-4 h-4 text-brand-cyan" />
              <span>{dict.nav.callUs} ({siteConfig.displayPhone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
