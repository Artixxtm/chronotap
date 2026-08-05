"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FADE_UP_CONTAINER, FADE_UP_ITEM } from "@/constants/animations";
import { useI18n } from "@/i18n/I18nProvider";

export default function About() {
  const { messages } = useI18n();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      data-nav-theme="dark"
      id="why"
      className="relative w-full min-h-dvh overflow-hidden flex items-center justify-center p-6 md:p-10"
    >
      <motion.div
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={FADE_UP_CONTAINER}
        className="relative flex w-full max-w-3xl flex-col gap-6 md:gap-8 lg:max-w-4xl"
      >
        <motion.p
          variants={FADE_UP_ITEM}
          className="font-second max-[360px]:text-xs text-base md:text-lg xl:text-xl tracking-wide text-black/80"
        >
          {messages.why.eyebrow}
        </motion.p>
        <motion.h2
          variants={FADE_UP_CONTAINER}
          className="font-main font-medium text-black max-[360px]:text-[clamp(1.25rem,4vw,2.25rem)] text-[clamp(1.5rem,5.6vw,2.25rem)] leading-[135%] md:text-3xl lg:text-4xl 2xl:text-5xl md:leading-[130%]"
        >
          {messages.why.lines.map((line, i) => (
            <motion.span
              key={i}
              variants={FADE_UP_ITEM}
              className="block mt-8 first:mt-0 md:mt-8 lg:mt-10"
            >
              {line.before}
              <span className="font-second tracking-wider opacity-60">
                {line.highlight}
              </span>
              {line.after}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>
    </section>
  );
}
