import "server-only";

const dictionaries = {
  en: () => import("./messages/en").then((module) => module.default),
  ua: () => import("./messages/ua").then((module) => module.default),
  ru: () => import("./messages/ru").then((module) => module.default),
  pl: () => import("./messages/pl").then((module) => module.default),
};

export async function getDictionary(locale) {
  return dictionaries[locale]();
}
