"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import FaqAccordion from "@/components/faq/FaqAccordion";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Modal from "@/components/Modal";
import useConsent from "@/hooks/useConsent";
import { useI18n } from "@/i18n/I18nProvider";
import { localizedPath } from "@/i18n/config";
import { getFaqCopy } from "@/i18n/faq";
import { trackEvent } from "@/lib/analytics";

const EASE = [0.22, 1, 0.36, 1];

function ChronoMark() {
  return (
    <svg
      viewBox="0 0 938 771"
      fill="none"
      aria-hidden="true"
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
  );
}

export default function FaqClient() {
  const { locale, messages } = useI18n();
  const copy = getFaqCopy(locale);
  const shouldReduceMotion = useReducedMotion();
  const [modalState, setModalState] = useState({ isOpen: false });
  const { consent } = useConsent();
  let numberOffset = 0;

  const handleWaitlistClick = () => {
    trackEvent("waitlist_opened", consent);
    setModalState({ isOpen: true });
  };

  return (
    <>
      <main className="relative min-h-dvh w-full overflow-x-clip bg-white text-black">
        <Link
          href={localizedPath(locale)}
          className="absolute left-6 top-6 z-20 font-main text-sm font-medium md:left-10 md:top-10"
        >
          [ ← {messages.common.homePage} ]
        </Link>

        <span className="pointer-events-none absolute right-6 top-6 z-20 select-none font-main text-sm font-medium opacity-60 md:right-10 md:top-10">
          [ {copy.page.label} ]
        </span>

        <LanguageSwitcher className="absolute right-6 top-14 z-20 md:right-10 md:top-16" />

        <header className="relative flex min-h-[76svh] items-center justify-center px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative z-2 flex max-w-5xl flex-col items-center text-center"
          >
            <p className="font-second text-sm tracking-[0.08em] text-black/60 md:text-lg">
              {copy.page.eyebrow}
            </p>
            <h1 className="mt-5 max-w-5xl font-main text-[clamp(2.75rem,8.5vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.055em]">
              {copy.page.heading}
            </h1>
            <p className="mt-7 max-w-xl font-second text-base leading-relaxed tracking-wide text-black/55 md:text-xl">
              {copy.page.intro}
            </p>
          </motion.div>

          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 0.035, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.15, ease: EASE }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[min(74vw,760px)] -translate-x-1/2 -translate-y-1/2"
          >
            <ChronoMark />
          </motion.div>
        </header>

        <nav
          aria-label={copy.page.contents}
          className="relative z-2 mx-auto flex w-full flex-wrap justify-center gap-x-5 gap-y-3 border-y border-black/15 px-6 py-6 md:px-10"
        >
          {copy.categories.map((category, index) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="font-main text-xs uppercase tracking-[0.08em] text-black/45 transition-colors duration-300 hover:text-black md:text-sm"
            >
              <span className="mr-1.5 text-black/25">
                {String(index + 1).padStart(2, "0")}
              </span>
              {category.title}
            </a>
          ))}
        </nav>

        <div className="relative z-2 mx-auto w-full px-6 pb-28 pt-20 md:px-10 md:pb-40 md:pt-32">
          {copy.categories.map((category, categoryIndex) => {
            const offset = numberOffset;
            numberOffset += category.items.length;

            return (
              <section
                key={category.id}
                id={category.id}
                className="grid scroll-mt-8 gap-8 pb-24 md:pb-32 lg:grid-cols-[minmax(240px,0.62fr)_minmax(560px,1.38fr)] lg:gap-16 xl:gap-24"
              >
                <div>
                  <div className="lg:sticky lg:top-10">
                    <span className="font-main text-xs tracking-[0.16em] text-black/30">
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 max-w-sm font-main text-[clamp(1.75rem,3.6vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.035em]">
                      {category.title}
                    </h2>
                    <p className="mt-4 font-second text-sm tracking-wide text-black/38 md:text-base">
                      {category.items.length} {copy.page.questionCount}
                    </p>
                  </div>
                </div>

                <FaqAccordion
                  items={category.items}
                  idPrefix={`page-faq-${locale}-${category.id}`}
                  numberOffset={offset}
                />
              </section>
            );
          })}

          <section className="flex flex-col items-center border-t border-black/15 pb-4 pt-20 text-center md:pt-28">
            <h2 className="max-w-3xl font-main text-[clamp(2rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.04em]">
              {copy.page.closing}
            </h2>
            <p className="mt-5 max-w-lg font-second text-base leading-relaxed tracking-wide text-black/55 md:text-lg">
              {copy.page.closingText}
            </p>
            <button
              type="button"
              onClick={handleWaitlistClick}
              className="mt-8 cursor-pointer font-main text-base font-medium underline decoration-black/20 underline-offset-4 transition hover:decoration-black md:text-lg"
            >
              {copy.page.closingCta} →
            </button>
          </section>
        </div>

        <footer className="flex w-full items-center justify-between px-6 pb-6 font-main text-sm font-medium uppercase text-black/30 md:px-10 md:pb-10">
          <span>ChronoTap™</span>
          <span>© 2026</span>
        </footer>
      </main>

      <Modal modalState={modalState} setModalState={setModalState} />
    </>
  );
}
