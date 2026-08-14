import { Tektur, Dekko, Neucha } from "next/font/google";
import ClarityAnalytics from "@/lib/ClarityAnalytics";
import LayoutWrapper from "@/lib/LayoutWrapper";
import AnalyticsConsent from "@/components/AnalyticsConsent";
import JsonLd from "@/components/JsonLd";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getDictionary } from "@/i18n/dictionaries";
import { LOCALE_META } from "@/i18n/config";
import "../globals.css";

const tektur = Tektur({
  variable: "--font-tektur",
  display: "swap",
  preload: false,
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
});

const dekko = Dekko({
  weight: "400",
  variable: "--font-dekko",
  display: "swap",
  preload: false,
  subsets: ["latin", "latin-ext"],
});

const neucha = Neucha({
  weight: "400",
  variable: "--font-neucha",
  display: "swap",
  preload: false,
  subsets: ["latin", "cyrillic"],
});

export default async function SiteDocument({ children, locale }) {
  const messages = await getDictionary(locale);
  const { meta, privacy, ...clientMessages } = messages;

  return (
    <html
      lang={LOCALE_META[locale].htmlLang}
      className={`${tektur.variable} ${dekko.variable} ${neucha.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <I18nProvider locale={locale} messages={clientMessages}>
          <ClarityAnalytics />
          <LayoutWrapper>{children}</LayoutWrapper>
          <AnalyticsConsent />
        </I18nProvider>
        <JsonLd locale={locale} productDescription={meta.description} />
      </body>
    </html>
  );
}
