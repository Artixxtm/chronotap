import { localizedPath } from "@/i18n/config";

const SITE_URL = "https://chronotap.co";

export default function JsonLd({ locale, productDescription }) {
  const productPageUrl = `${SITE_URL}${localizedPath(locale)}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "ChronoTap",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon-512.png`,
          width: 512,
          height: 512,
        },
        founder: {
          "@type": "Person",
          name: "Artem Naumenko",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "ChronoTap",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["en", "uk", "ru", "pl"],
      },
      {
        "@type": "Product",
        "@id": `${SITE_URL}/#product`,
        name: "ChronoTap",
        url: productPageUrl,
        description: productDescription,
        category: "Physical NFC time capsule for digital memories",
        image: [
          `${SITE_URL}/og-image.jpg`,
          `${SITE_URL}/capsule.webp`,
        ],
        brand: { "@id": `${SITE_URL}/#organization` },
        manufacturer: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: { "@id": `${productPageUrl}#webpage` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
