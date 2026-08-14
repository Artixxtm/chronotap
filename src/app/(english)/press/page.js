import PressClient from "@/app/press/PressClient";
import PageJsonLd from "@/components/PageJsonLd";
import { getDictionary } from "@/i18n/dictionaries";
import { createMetadata } from "@/i18n/metadata";
import { getPressCopy } from "@/i18n/press";

export async function generateMetadata() {
  const messages = await getDictionary("en");
  const copy = getPressCopy("en");
  return createMetadata(messages, "en", "/press", {
    title: copy.meta.title,
    description: copy.meta.description,
  });
}

export default function PressPage() {
  const copy = getPressCopy("en");

  return (
    <>
      <PageJsonLd
        locale="en"
        pathname="/press"
        name={`${copy.meta.title} — ChronoTap`}
        description={copy.meta.description}
        aboutProduct
      />
      <PressClient />
    </>
  );
}
