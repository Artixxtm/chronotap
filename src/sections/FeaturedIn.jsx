"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import {
  getDevUaArticleUrl,
  SHOTAM_ARTICLE_URL,
} from "@/constants/featured";

const EASE = [0.22, 1, 0.36, 1];

export default function FeaturedIn() {
  const { locale, messages } = useI18n();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      data-nav-theme="dark"
      aria-labelledby="featured-in-heading"
      className="relative w-full px-6 pb-20 text-black md:px-10 md:pb-28 lg:pb-32"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mx-auto flex w-full max-w-312.5 flex-col items-center justify-center gap-4 rounded-3xl border border-black/8 bg-[#f1f1ee] px-5 py-5 md:min-h-36 md:flex-row md:justify-between md:gap-6 md:px-9 md:py-7 lg:px-12"
      >
        <h2
          id="featured-in-heading"
          className="text-center font-main text-xl font-medium leading-none tracking-tight md:text-left md:text-[clamp(1.5rem,3.5vw,2.75rem)]"
        >
          {messages.featuredIn.heading}
        </h2>

        <div className="flex items-center justify-center gap-2.5 md:gap-5">
          <a
            href={getDevUaArticleUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={messages.featuredIn.linkLabel}
            className="rounded-lg transition-opacity duration-300 hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            <Image
              src="/featured/dev-ua-logo.svg"
              alt="dev.ua"
              width={596}
              height={168}
              className="h-auto w-24 md:w-40 lg:w-44"
            />
          </a>
          <a
            href={SHOTAM_ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={messages.featuredIn.shotamLinkLabel}
            className="rounded-lg transition-opacity duration-300 hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            <Image
              src="/featured/shotam-logo.svg"
              alt="#ШОТАМ"
              width={411}
              height={414}
              className="h-10 w-auto md:h-14"
            />
          </a>
          <span className="whitespace-nowrap font-second text-xs tracking-wide text-black/45 md:text-base">
            {messages.featuredIn.others}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
