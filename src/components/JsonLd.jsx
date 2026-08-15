const SITE_URL = "https://chronotap.co";

export default function JsonLd({ productDescription }) {
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
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/icon-512.png`,
          width: 512,
          height: 512,
        },
        founder: {
          "@id": `${SITE_URL}/#founder`,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder`,
        name: "Artem Naumenko",
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
        "@type": "Thing",
        "@id": `${SITE_URL}/#chronotap`,
        name: "ChronoTap",
        description: productDescription,
        disambiguatingDescription:
          "A physical NFC time capsule for digital memories.",
        url: SITE_URL,
        image: [
          `${SITE_URL}/og-image.jpg`,
          `${SITE_URL}/capsule.webp`,
        ],
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
