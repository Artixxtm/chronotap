import en from "./en";
import pl from "./pl";
import ru from "./ru";
import ua from "./ua";

const WAYS_BY_LOCALE = { en, pl, ru, ua };

export function getWaysCopy(locale) {
  return WAYS_BY_LOCALE[locale] ?? WAYS_BY_LOCALE.en;
}

