import PrivacyPage from "@/app/_pages/PrivacyPage";
import PageJsonLd from "@/components/PageJsonLd";
import { getDictionary } from "@/i18n/dictionaries";
import { createMetadata } from "@/i18n/metadata";

export async function generateMetadata() {
  const messages = await getDictionary("en");
  return createMetadata(messages, "en", "/privacy", {
    title: messages.meta.privacyTitle,
    description: messages.meta.privacyDescription,
  });
}

export default async function Privacy() {
  const messages = await getDictionary("en");

  return (
    <>
      <PageJsonLd
        locale="en"
        pathname="/privacy"
        name={messages.meta.privacyTitle}
        description={messages.meta.privacyDescription}
      />
      <PrivacyPage locale="en" />
    </>
  );
}
