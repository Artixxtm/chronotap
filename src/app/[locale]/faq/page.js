import { notFound } from "next/navigation";
import FaqClient from "@/app/faq/FaqClient";
import FaqJsonLd from "@/components/faq/FaqJsonLd";
import PageJsonLd from "@/components/PageJsonLd";
import { getDictionary } from "@/i18n/dictionaries";
import { isPrefixedLocale } from "@/i18n/config";
import { getFaqCopy } from "@/i18n/faq";
import { createMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();

  const messages = await getDictionary(locale);
  const copy = getFaqCopy(locale);

  return createMetadata(messages, locale, "/faq", {
    title: `${copy.page.label} — ChronoTap`,
    description: copy.page.intro,
  });
}

export default async function FaqPage({ params }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const copy = getFaqCopy(locale);

  return (
    <>
      <PageJsonLd
        locale={locale}
        pathname="/faq"
        name={`${copy.page.label} — ChronoTap`}
        description={copy.page.intro}
      />
      <FaqJsonLd locale={locale} />
      <FaqClient />
    </>
  );
}
