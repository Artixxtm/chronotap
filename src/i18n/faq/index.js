import en from "./en";
import pl from "./pl";
import ru from "./ru";
import ua from "./ua";

const FAQ_BY_LOCALE = { en, pl, ru, ua };

export const FAQ_FEATURED_IDS = [
  "what-is-chronotap",
  "how-it-works",
  "what-can-i-leave",
  "where-files-live",
  "app",
  "charging",
  "future-date",
  "who-can-open",
  "gift",
  "storage-protection",
  "longevity",
  "availability-date",
];

export function getFaqCopy(locale) {
  return FAQ_BY_LOCALE[locale] ?? FAQ_BY_LOCALE.en;
}

export function flattenFaqItems(copy) {
  return copy.categories.flatMap((category) => category.items);
}

export function getFeaturedFaqItems(copy) {
  const byId = new Map(flattenFaqItems(copy).map((item) => [item.id, item]));
  return FAQ_FEATURED_IDS.map((id) => byId.get(id)).filter(Boolean);
}
