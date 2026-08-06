import FaqClient from "@/app/faq/FaqClient";
import FaqJsonLd from "@/components/faq/FaqJsonLd";
import PageJsonLd from "@/components/PageJsonLd";
import { getDictionary } from "@/i18n/dictionaries";
import { getFaqCopy } from "@/i18n/faq";
import { createMetadata } from "@/i18n/metadata";

export async function generateMetadata() {
  const messages = await getDictionary("en");
  const copy = getFaqCopy("en");

  return createMetadata(messages, "en", "/faq", {
    title: `${copy.page.label} — ChronoTap`,
    description: copy.page.intro,
  });
}

export default async function FaqPage() {
  const copy = getFaqCopy("en");

  return (
    <>
      <PageJsonLd
        locale="en"
        pathname="/faq"
        name={`${copy.page.label} — ChronoTap`}
        description={copy.page.intro}
      />
      <FaqJsonLd locale="en" />
      <FaqClient />
    </>
  );
}
