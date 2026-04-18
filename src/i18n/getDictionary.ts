import type { Locale, Dictionary } from "./config";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  es: () => import("./dictionaries/es.json").then((m) => m.default),
  pt: () => import("./dictionaries/pt.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale];
  if (!loader) {
    return dictionaries.en();
  }
  return loader();
}

/**
 * Synchronous version for client components.
 * Import the dictionary JSON directly instead of using dynamic import.
 */
export function getDictionarySync(locale: Locale): Dictionary {
  /* eslint-disable @typescript-eslint/no-require-imports */
  switch (locale) {
    case "es":
      return require("./dictionaries/es.json") as Dictionary;
    case "pt":
      return require("./dictionaries/pt.json") as Dictionary;
    case "en":
    default:
      return require("./dictionaries/en.json") as Dictionary;
  }
}
