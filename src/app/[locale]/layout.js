import { notFound } from "next/navigation";
import SiteDocument from "@/app/_shared/SiteDocument";
import { getDictionary } from "@/i18n/dictionaries";
import { isPrefixedLocale, PREFIXED_LOCALES } from "@/i18n/config";
import { createMetadata, viewport } from "@/i18n/metadata";

export { viewport };
export const dynamicParams = false;

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return createMetadata(await getDictionary(locale), locale);
}

export default async function LocalizedLayout({ children, params }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return <SiteDocument locale={locale}>{children}</SiteDocument>;
}
