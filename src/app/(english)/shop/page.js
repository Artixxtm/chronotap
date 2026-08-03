import ShopClient from "@/app/shop/ShopClient";
import { getDictionary } from "@/i18n/dictionaries";
import { createMetadata } from "@/i18n/metadata";

export async function generateMetadata() {
  const messages = await getDictionary("en");
  return createMetadata(messages, "en", "/shop", {
    title: messages.meta.shopTitle,
    description: messages.meta.shopDescription,
  });
}

export default function Shop() {
  return <ShopClient />;
}
