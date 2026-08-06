"use client";

import { motion, useReducedMotion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";
import FaqAccordion from "@/components/faq/FaqAccordion";
import { useI18n } from "@/i18n/I18nProvider";
import { localizedPath } from "@/i18n/config";
import { getFaqCopy, getFeaturedFaqItems } from "@/i18n/faq";

const EASE = [0.22, 1, 0.36, 1];

export default function Faq() {
  const { locale } = useI18n();
  const shouldReduceMotion = useReducedMotion();
  const copy = getFaqCopy(locale);
  const items = getFeaturedFaqItems(copy);

  return (
    <section
      id="faq"
      data-nav-theme="dark"
      className="relative isolate w-full overflow-hidden px-6 py-24 text-black md:px-10 md:py-36 lg:py-44"
    >
      <div className="relative z-1 mx-auto flex w-full max-w-312.5 flex-col items-center gap-10 md:gap-14 lg:gap-16 xl:gap-28">
        <div className="relative w-full lg:min-h-full">
          <div className="flex w-full flex-col items-center gap-3 md:flex-row md:items-end md:justify-between md:gap-4">
            <div>
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="text-center font-second text-sm tracking-[0.08em] text-black/80 md:text-left md:text-lg"
              >
                {copy.section.eyebrow}
              </motion.p>
              <motion.h2
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
                className="mt-1 w-fit font-main text-[clamp(1.5rem,5.6vw,2.25rem)] font-medium leading-[135%] max-[360px]:text-[clamp(1.25rem,4vw,2.25rem)] md:text-3xl md:leading-[130%] lg:text-4xl 2xl:text-5xl"
              >
                {copy.section.heading}
              </motion.h2>
            </div>
            <p className="mb-1.5 w-fit max-w-60 text-center font-second text-sm leading-relaxed tracking-wide text-black/42 md:max-w-xs md:text-right md:text-base xl:text-lg">
              {copy.section.description}
            </p>
          </div>
        </div>

        <FaqAccordion items={items} idPrefix={`home-faq-${locale}`} />

        <div className="relative flex h-auto w-full items-center justify-between gap-4">
          <h2 className="font-main text-[clamp(1.4rem,5.6vw,2.25rem)] font-medium max-[360px]:text-[clamp(1.25rem,4vw,2.25rem)] md:text-3xl lg:text-4xl 2xl:text-5xl">
            {copy.section.footerHeading}
          </h2>
          <Link
            href={localizedPath(locale, "/faq")}
            className="inline-flex items-center gap-0.5 font-main text-xs opacity-60 transition-all duration-400 hover:opacity-100 sm:gap-2 md:text-base xl:text-lg"
          >
            {copy.section.footerCta} <IoMdArrowForward />
          </Link>
        </div>
      </div>
    </section>
  );
}
