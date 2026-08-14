import { LOCALE_META, localizedPath } from "@/i18n/config";

const SITE_URL = "https://chronotap.co";

export default function PageJsonLd({
  locale,
  pathname,
  name,
  description,
  productIsMainEntity = false,
  aboutProduct = false,
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

  if (productIsMainEntity) {
    schema.mainEntity = { "@id": `${SITE_URL}/#product` };
  }

  if (aboutProduct) {
    schema.about = { "@id": `${SITE_URL}/#product` };
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
