import { localizedPath } from "@/i18n/config";
import {
  flattenFaqItems,
  getFaqCopy,
  getFeaturedFaqItems,
} from "@/i18n/faq";

export default function FaqJsonLd({ locale, featured = false }) {
  const copy = getFaqCopy(locale);
  const pathname = featured ? "/" : "/faq";
  const pageUrl = `https://chronotap.co${localizedPath(locale, pathname)}`;
  const items = featured ? getFeaturedFaqItems(copy) : flattenFaqItems(copy);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    inLanguage: locale === "ua" ? "uk" : locale,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.blocks
          .map((block) =>
            block.type === "list" ? block.items.join(", ") : block.text,
          )
          .join(" "),
      },
    })),
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
