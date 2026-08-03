export const DEFAULT_LOCALE = "en";
export const PREFIXED_LOCALES = ["ua", "ru", "pl"];
export const LOCALES = [DEFAULT_LOCALE, ...PREFIXED_LOCALES];

export const LOCALE_META = {
  en: { htmlLang: "en", hreflang: "en", ogLocale: "en_US", label: "EN" },
  ua: { htmlLang: "uk", hreflang: "uk", ogLocale: "uk_UA", label: "UA" },
  ru: { htmlLang: "ru", hreflang: "ru", ogLocale: "ru_RU", label: "RU" },
  pl: { htmlLang: "pl", hreflang: "pl", ogLocale: "pl_PL", label: "PL" },
};

export function isLocale(locale) {
  return LOCALES.includes(locale);
}

export function isPrefixedLocale(locale) {
  return PREFIXED_LOCALES.includes(locale);
}

export function stripLocalePrefix(pathname = "/") {
  const segments = pathname.split("/").filter(Boolean);
  if (PREFIXED_LOCALES.includes(segments[0])) segments.shift();
  return segments.length ? `/${segments.join("/")}` : "/";
}

export function localizedPath(locale, pathname = "/") {
  const path = stripLocalePrefix(pathname);
  if (locale === DEFAULT_LOCALE) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function languageAlternates(pathname = "/") {
  return {
    en: localizedPath("en", pathname),
    uk: localizedPath("ua", pathname),
    ru: localizedPath("ru", pathname),
    pl: localizedPath("pl", pathname),
    "x-default": localizedPath("en", pathname),
  };
}
