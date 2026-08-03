import { languageAlternates, localizedPath, LOCALES } from "@/i18n/config";

const SITE_URL = "https://chronotap.co";

const ROUTES = [
  { pathname: "/", changeFrequency: "weekly", priority: 1 },
  { pathname: "/shop", changeFrequency: "weekly", priority: 0.7 },
  { pathname: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  const lastModified = new Date();

  return ROUTES.flatMap((route) => {
    const alternates = Object.fromEntries(
      Object.entries(languageAlternates(route.pathname)).map(([lang, path]) => [
        lang,
        `${SITE_URL}${path}`,
      ]),
    );

    return LOCALES.map((locale) => ({
      url: `${SITE_URL}${localizedPath(locale, route.pathname)}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages: alternates },
    }));
  });
}
