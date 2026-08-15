import { LOCALE_META, localizedPath } from "@/i18n/config";

const SITE_URL = "https://chronotap.co";
const CHRONOTAP_ID = `${SITE_URL}/#chronotap`;

export default function PageJsonLd({
  locale,
  pathname,
  name,
  description,
  chronotapIsMainEntity = false,
  aboutChronotap = false,
}) {
  const url = `${SITE_URL}${localizedPath(locale, pathname)}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: LOCALE_META[locale].htmlLang,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  if (chronotapIsMainEntity) {
    schema.mainEntity = { "@id": CHRONOTAP_ID };
  }

  if (aboutChronotap) {
    schema.about = { "@id": CHRONOTAP_ID };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
