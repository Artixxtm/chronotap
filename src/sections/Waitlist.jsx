"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FADE_UP_CONTAINER, FADE_UP_ITEM } from "@/constants/animations";
import WaitlistForm from "@/components/WaitlistForm";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";
import { localizedPath } from "@/i18n/config";

export default function Waitlist() {
  const { locale, messages } = useI18n();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      data-nav-theme="dark"
      id="waitlist"
      className="relative w-full min-h-svh text-black overflow-hidden flex items-center justify-center p-6 md:p-10"
    >
      <motion.div
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={FADE_UP_CONTAINER}
        className="relative flex text-center items-center w-full max-w-3xl flex-col gap-4 md:gap-6 lg:max-w-2xl xl:right-[-18vw] xl:top-[-16vh] md:top-[-20vh] top-[-10vh]"
      >
        <motion.p
          variants={FADE_UP_ITEM}
          className="font-second text-base md:text-lg xl:text-xl tracking-wide text-black/80"
        >
          {messages.waitlist.eyebrow}
        </motion.p>
        <motion.h2
          variants={FADE_UP_CONTAINER}
          className="font-main font-medium text-black text-[clamp(1.5rem,5.6vw,2.25rem)] leading-[135%] md:text-3xl lg:text-4xl 2xl:text-5xl md:leading-[130%]"
        >
          <motion.span variants={FADE_UP_ITEM} className="block">
            {messages.waitlist.heading}
          </motion.span>
        </motion.h2>

        <div className="w-full max-w-3xl flex-col gap-6 lg:max-w-xl flex justify-center relative mt-6">
          <WaitlistForm autoFocus={false} />

          <div className="w-full h-auto flex flex-row md:px-4 px-2 justify-between items-center gap-4">
            <span className="font-main md:text-[10px] text-[9px] opacity-60 select-none">{messages.common.copyright}</span>
            <Link href={localizedPath(locale, "/privacy")} className="font-main md:text-[10px] text-[9px] underline hover:no-underline hover:opacity-80 opacity-60">{messages.common.privacyPolicy}</Link>
          </div>
        </div>
      </motion.div>

      <Image
        src="/scene-waitlist.jpg"
        alt=""
        draggable={false}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto object-contain absolute left-0 bottom-0 z-[-1] pointer-events-none select-none"
      />
    </section>
  );
}
