import SiteDocument from "@/app/_shared/SiteDocument";
import { getDictionary } from "@/i18n/dictionaries";
import { createMetadata, viewport } from "@/i18n/metadata";

export { viewport };

export async function generateMetadata() {
  return createMetadata(await getDictionary("en"), "en");
}

export default function EnglishLayout({ children }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
