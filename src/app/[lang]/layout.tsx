import type { Metadata } from "next";
import { dirOf, locales, Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../globals.css";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "ar";
  const dict = getDictionary(lang);

  return {
    title: {
      default: dict.meta.title,
      template: `%s | ${dict.meta.title}`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: "https://codera.tech",
      siteName: "Codera",
      locale: lang === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    icons: {
      icon: "/brand/logo-vertical.jpg",
      apple: "/brand/logo-vertical.jpg",
    },
  };
}

export default async function RootLangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "ar";
  const dict = getDictionary(lang);
  const dir = dirOf(lang);

  return (
    <html lang={lang} dir={dir} className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 font-arabic antialiased selection:bg-brand-cyan/20 selection:text-brand-navy">
        <Navbar lang={lang} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
