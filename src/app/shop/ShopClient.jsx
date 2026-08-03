"use client";

import Modal from "@/components/Modal";
import useConsent from "@/hooks/useConsent";
import { trackEvent } from "@/lib/analytics";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import { localizedPath } from "@/i18n/config";

export default function ShopClient() {
  const { locale, messages } = useI18n();
  const [modalState, setModalState] = useState({
    isOpen: false,
  });

  const { consent } = useConsent();

  const handleWaitlistClick = () => {
    trackEvent("waitlist_opened", consent);
    setModalState({ isOpen: true });
  };

  return (
    <>
      <main className="relative min-h-dvh w-full overflow-hidden bg-white text-black">
        <Link
          href={localizedPath(locale)}
          className="absolute left-6 top-6 z-10 font-main text-sm font-medium md:left-10 md:top-10"
        >
          [ ← {messages.common.homePage} ]
        </Link>

        <span className="absolute right-6 top-6 z-10 font-main text-sm font-medium md:right-10 md:top-10 opacity-60 select-none pointer-events-none">
          [ {messages.shop.label} ]
        </span>

        <LanguageSwitcher className="absolute right-6 top-14 z-10 md:right-10 md:top-16" />

        <div className="flex min-h-dvh items-center justify-center px-6 relative z-2">
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-6 font-main text-5xl font-medium leading-none tracking-[-0.04em] md:text-7xl">
              {messages.shop.heading}
            </h1>

            <p className="mt-3 max-w-sm font-main text-sm leading-relaxed text-black/85 md:text-base">
              {messages.shop.text}
            </p>

            <button
              onClick={handleWaitlistClick}
              className="mt-7 font-main text-base font-medium cursor-pointer underline decoration-black/20 underline-offset-4 transition hover:decoration-black"
            >
              {messages.shop.cta}
            </button>
          </div>
        </div>

        <div className="absolute w-full bottom-6 left-0 md:px-10 px-6 flex items-center justify-between font-main font-medium text-sm uppercase text-black/30 md:bottom-10">
          <span>ChronoTap™</span>
          <span>© 2026</span>
        </div>

        <div className="w-full md:max-w-xl max-w-95 z-0 opacity-5 md:px-10 px-6 h-auto absolute left-1/2 top-1/2 -translate-1/2">
          <svg
            width="938"
            height="771"
            viewBox="0 0 938 771"
            fill="none"
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M705 114L660.5 158.722H204.5L161.684 201.5V568L203.5 609.289H659L705 655.258V771H96L0 675.513V92.3564L92.5 0H705V114Z"
              fill="black"
            />
            <path
              d="M938 771.002H823.5L776.949 724.5V464.857L278.5 463.857L233.5 420V347.5L277.5 303.104H776.949V44.5L821.5 0H938V771.002Z"
              fill="black"
            />
          </svg>
        </div>
      </main>

      <Modal modalState={modalState} setModalState={setModalState} />
    </>
  );
}
