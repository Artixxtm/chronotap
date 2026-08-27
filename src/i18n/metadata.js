import "server-only";

import { languageAlternates, localizedPath, LOCALE_META } from "./config";

const SITE_URL = "https://chronotap.co";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export function createMetadata(messages, locale, pathname = "/", page = null) {
  const meta = messages.meta;
  const title = page?.title || meta.title;
  const description = page?.description || meta.description;
  const url = localizedPath(locale, pathname);
  const alternateLocales = Object.values(LOCALE_META)
    .map((item) => item.ogLocale)
    .filter((item) => item !== LOCALE_META[locale].ogLocale);

  return {
    metadataBase: new URL(SITE_URL),
    title: page
      ? title
      : {
          default: title,
          template: "%s — ChronoTap",
        },
    description,
    applicationName: "ChronoTap",
    keywords: meta.keywords,
    authors: [{ name: "Artem Naumenko", url: SITE_URL }],
    creator: "Artem Naumenko",
    publisher: "ChronoTap",
    category: "technology",
    alternates: {
      canonical: url,
      languages: languageAlternates(pathname),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: "ChronoTap",
      title,
      description,
      locale: LOCALE_META[locale].ogLocale,
      alternateLocale: alternateLocales,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png", sizes: "32x32" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
  };
}
