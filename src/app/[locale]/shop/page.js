import { notFound } from "next/navigation";
import ShopClient from "@/app/shop/ShopClient";
import { getDictionary } from "@/i18n/dictionaries";
import { isPrefixedLocale } from "@/i18n/config";
import { createMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const messages = await getDictionary(locale);
  return createMetadata(messages, locale, "/shop", {
    title: messages.meta.shopTitle,
    description: messages.meta.shopDescription,
  });
}

export default async function Shop({ params }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return <ShopClient />;
}
