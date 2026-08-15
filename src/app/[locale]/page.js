import HomePage from "@/app/_pages/HomePage";
import FaqJsonLd from "@/components/faq/FaqJsonLd";
import PageJsonLd from "@/components/PageJsonLd";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Page({ params }) {
  const { locale } = await params;
  const messages = await getDictionary(locale);

  return (
    <>
      <PageJsonLd
        locale={locale}
        pathname="/"
        name={messages.meta.title}
        description={messages.meta.description}
        chronotapIsMainEntity
      />
      <FaqJsonLd locale={locale} featured />
      <HomePage />
    </>
  );
}
