export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export function dirOf(lang: string): "rtl" | "ltr" {
  return lang === "ar" ? "rtl" : "ltr";
}

export function hasLocale(lang: string): lang is Locale {
  return (locales as readonly string[]).includes(lang);
}
