import HomePage from "@/app/_pages/HomePage";
import FaqJsonLd from "@/components/faq/FaqJsonLd";
import PageJsonLd from "@/components/PageJsonLd";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Page() {
  const messages = await getDictionary("en");

  return (
    <>
      <PageJsonLd
        locale="en"
        pathname="/"
        name={messages.meta.title}
        description={messages.meta.description}
      />
      <FaqJsonLd locale="en" featured />
      <HomePage />
    </>
  );
}
