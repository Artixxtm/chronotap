import { LOCALE_META, localizedPath } from "@/i18n/config";

export default function JsonLd({ locale, description }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ChronoTap",
    url: `https://chronotap.co${localizedPath(locale)}`,
    description,
    inLanguage: LOCALE_META[locale].htmlLang,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "All",
    author: {
      "@type": "Person",
      name: "Artem Naumenko",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
