"use client";

import { motion } from "framer-motion";
import { FADE_UP_CONTAINER, FADE_UP_ITEM } from "@/constants/animations";
import { HOW_STEPS, HOW_INDEXED_TOTAL } from "@/constants/how";
import { useI18n } from "@/i18n/I18nProvider";

export default function HowReducedMotionList() {
  const { messages } = useI18n();
  return (
    <section className="flex w-full flex-col gap-14 px-6 py-20">
      {HOW_STEPS.map((step) => {
        const content = messages.how.steps[step.id];
        return (
        <motion.div
          key={step.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={FADE_UP_CONTAINER}
          className="flex flex-col gap-2"
        >
          {step.index != null && (
            <motion.span
              variants={FADE_UP_ITEM}
              className="font-second text-sm tracking-wide text-black/50"
            >
              {String(step.index).padStart(2, "0")} /{" "}
              {String(HOW_INDEXED_TOTAL).padStart(2, "0")}
            </motion.span>
          )}

          <motion.h3
            variants={FADE_UP_ITEM}
            className="font-main font-medium leading-none text-black text-[clamp(2.5rem,15vw,3.5rem)]"
          >
            {content.heading}
          </motion.h3>

          <motion.p
            variants={FADE_UP_ITEM}
            className="mt-2 font-main text-xl font-medium text-black"
          >
            {content.title}
          </motion.p>

          {content.description && (
            <motion.p
              variants={FADE_UP_ITEM}
              className="font-second text-sm tracking-wide text-black/60"
            >
              {content.description}
            </motion.p>
          )}
        </motion.div>
        );
      })}
    </section>
  );
}
