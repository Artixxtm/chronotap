import ShopClient from "@/app/shop/ShopClient";
import PageJsonLd from "@/components/PageJsonLd";
import { getDictionary } from "@/i18n/dictionaries";
import { createMetadata } from "@/i18n/metadata";

export async function generateMetadata() {
  const messages = await getDictionary("en");
  return createMetadata(messages, "en", "/shop", {
    title: messages.meta.shopTitle,
    description: messages.meta.shopDescription,
  });
}

export default async function Shop() {
  const messages = await getDictionary("en");

  return (
    <>
      <PageJsonLd
        locale="en"
        pathname="/shop"
        name={messages.meta.shopTitle}
        description={messages.meta.shopDescription}
      />
      <ShopClient />
    </>
  );
}
