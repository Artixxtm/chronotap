import { notFound } from "next/navigation";
import PrivacyPage from "@/app/_pages/PrivacyPage";
import { getDictionary } from "@/i18n/dictionaries";
import { isPrefixedLocale } from "@/i18n/config";
import { createMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const messages = await getDictionary(locale);
  return createMetadata(messages, locale, "/privacy", {
    title: messages.meta.privacyTitle,
    description: messages.meta.privacyDescription,
  });
}

export default async function Privacy({ params }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return <PrivacyPage locale={locale} />;
}
