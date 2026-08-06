"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1];

function AnswerBlock({ block }) {
  if (block.type === "list") {
    return (
      <ul className="grid gap-1.5 md:grid-cols-2 md:gap-x-8">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-[#ffa200]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "emphasis") {
    return (
      <p className="font-main font-medium tracking-[0.04em] text-black">
        {block.text}
      </p>
    );
  }

  return <p>{block.text}</p>;
}

export default function FaqAccordion({
  items,
  idPrefix = "faq",
  numberOffset = 0,
  initialOpen = -1,
}) {
  const [openIndex, setOpenIndex] = useState(initialOpen);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const number = String(numberOffset + index + 1).padStart(2, "0");
        const answerId = `${idPrefix}-${item.id}-answer`;

        return (
          <motion.article
            key={item.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.7,
              delay: Math.min(index * 0.025, 0.14),
              ease: EASE,
            }}
            className="group relative border-t border-black/18"
          >
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-px bg-black"
              initial={false}
              animate={{
                width: isOpen ? "100%" : "0%",
                opacity: isOpen ? 1 : 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                ease: EASE,
              }}
            />

            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
              className="grid w-full cursor-pointer grid-cols-[2.25rem_1fr_2.5rem] items-start gap-3 py-5 text-left md:grid-cols-[3.5rem_1fr_3rem] md:gap-5 md:py-7"
            >
              <span className="pt-1 font-main text-[10px] tracking-[0.16em] text-black/35 md:text-xs">
                {number}
              </span>
              <span className="font-main text-[clamp(1.1rem,2.1vw,1.75rem)] font-medium leading-[1.2] text-black transition-colors duration-500 group-hover:text-black/65">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="relative mt-0.5 flex aspect-square w-9 items-center justify-center rounded-full border border-black/25 transition-colors duration-500 group-hover:border-black/50 md:w-11"
              >
                <motion.span
                  className="absolute h-px w-3.5 bg-black md:w-4"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    ease: EASE,
                  }}
                />
                <motion.span
                  className="absolute h-3.5 w-px bg-black md:h-4"
                  animate={{
                    rotate: isOpen ? 90 : 0,
                    opacity: isOpen ? 0 : 1,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    ease: EASE,
                  }}
                />
              </span>
            </button>

            <motion.div
              id={answerId}
              aria-hidden={!isOpen}
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{
                height: {
                  duration: shouldReduceMotion ? 0 : 0.6,
                  ease: EASE,
                },
                opacity: { duration: shouldReduceMotion ? 0 : 0.3 },
              }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-[2.25rem_1fr_2.5rem] gap-3 pb-7 md:grid-cols-[3.5rem_1fr_3rem] md:gap-5 md:pb-9">
                <div />
                <div className="max-w-2xl space-y-4 font-second text-base leading-[1.65] tracking-wide text-black/62 md:text-lg">
                  {item.blocks.map((block, blockIndex) => (
                    <AnswerBlock
                      key={`${block.type}-${blockIndex}`}
                      block={block}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.article>
        );
      })}
      <div className="border-t border-black/18" />
    </div>
  );
}
