const DEV_UA_ARTICLE_URL =
  "https://dev.ua/en/news/18-richnyi-ukrainets-stvoryv-chronotap-fizychnu-kapsulu-dlia-tsyfrovykh-spohadiv-vona-zberihaie-foto-video-holosovi-ta-lysty-1786682455";

const DEV_UA_ARTICLE_URL_UA =
  "https://dev.ua/news/18-richnyi-ukrainets-stvoryv-chronotap-fizychnu-kapsulu-dlia-tsyfrovykh-spohadiv-vona-zberihaie-foto-video-holosovi-ta-lysty-1786682455";

export const SHOTAM_ARTICLE_URL =
  "https://shotam.info/18-richnyy-ukrainets-stvoryv-fizychnu-kapsulu-chasu-dlia-zberihannia-tsyfrovykh-spohadiv/";

export function getDevUaArticleUrl(locale) {
  return locale === "ua" ? DEV_UA_ARTICLE_URL_UA : DEV_UA_ARTICLE_URL;
}
