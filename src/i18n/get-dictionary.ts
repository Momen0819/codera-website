import { ar } from "./dictionaries/ar";
import { en } from "./dictionaries/en";
import { Locale, defaultLocale } from "./config";

const dictionaries = {
  ar,
  en,
};

export function getDictionary(locale: string = defaultLocale) {
  if (locale === "en") return dictionaries.en;
  return dictionaries.ar;
}

export type Dictionary = typeof ar;
