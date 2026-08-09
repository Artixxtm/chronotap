import { notFound } from "next/navigation";
import PressClient from "@/app/press/PressClient";
import PageJsonLd from "@/components/PageJsonLd";
import { getDictionary } from "@/i18n/dictionaries";
import { isPrefixedLocale } from "@/i18n/config";
import { createMetadata } from "@/i18n/metadata";
import { getPressCopy } from "@/i18n/press";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const messages = await getDictionary(locale);
  const copy = getPressCopy(locale);
  return createMetadata(messages, locale, "/press", {
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default async function PressPage({ params }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const copy = getPressCopy(locale);

  return (
    <>
      <PageJsonLd
        locale={locale}
        pathname="/press"
        name={`${copy.meta.title} — ChronoTap`}
        description={copy.meta.description}
      />
      <PressClient />
    </>
  );
}
