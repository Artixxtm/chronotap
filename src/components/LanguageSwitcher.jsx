"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_META, localizedPath } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/cn";

export default function LanguageSwitcher({ className, onSelect }) {
  const pathname = usePathname();
  const { locale, messages } = useI18n();

  return (
    <nav
      aria-label={messages.common.languageSwitcher}
      className={cn("flex items-center gap-1 font-main text-xs", className)}
    >
      {LOCALES.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={localizedPath(item, pathname)}
            hrefLang={LOCALE_META[item].hreflang}
            aria-current={active ? "page" : undefined}
            onClick={onSelect}
            className={cn(
              "rounded-full px-2.5 py-1.5 transition-opacity hover:opacity-60",
              active ? "bg-current/10 opacity-100" : "opacity-45",
            )}
          >
            {LOCALE_META[item].label}
          </Link>
        );
      })}
    </nav>
  );
}
