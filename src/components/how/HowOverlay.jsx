"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { HOW_STEPS } from "@/constants/how";
import HowIndexCounter from "@/components/how/HowIndexCounter";
import { useI18n } from "@/i18n/I18nProvider";

const HowOverlay = forwardRef(function HowOverlay(
  { stepNumber, totalSteps },
  ref,
) {
  const { messages } = useI18n();
  const scrollDownRef = useRef(null);
  const ringRef = useRef(null);
  const counterRef = useRef(null);
  const stepRefs = useRef([]);
  stepRefs.current = [];

  useImperativeHandle(ref, () => ({
    scrollDown: scrollDownRef.current,
    ring: ringRef.current,
    counter: counterRef.current,
    steps: stepRefs.current,
  }));

  return (
    <div className="absolute inset-0 z-20">
      <span
        ref={scrollDownRef}
        className="pointer-events-none absolute left-1/2 top-auto md:bottom-auto bottom-[19.5%] -translate-x-1/2 font-second md:text-base text-lg tracking-wide text-black/50 md:top-[19.5%]"
      >
        {messages.how.scrollDown}
      </span>

      {HOW_STEPS.map((step, i) => {
        const content = messages.how.steps[step.id];
        return (
        <div
          key={step.id}
          ref={(el) => (stepRefs.current[i] = el)}
          className="pointer-events-none absolute inset-0"
        >
          {/* Mobile */}
          <div className={`flex h-full flex-col items-center px-6 ${step.index ? "pt-22" : "pt-20"} text-center md:hidden`}>
            <h3 className="font-main font-medium leading-none text-black text-[clamp(3rem,15vw,4.5rem)]">
              {content.heading}
            </h3>
            <p className={`mt-1 font-main ${!step.index && "max-w-45"} font-medium leading-[130%] ${step.index ? "mt-4" : "mt-2"} text-black text-[clamp(1.4rem,5vw,1.5rem)]`}>
              {content.title}
            </p>
            {content.description && (
              <p className="font-second text-base tracking-wide text-black/60">
                {content.description}
              </p>
            )}
          </div>

          {/* Desktop */}
          <div className="hidden h-full items-center justify-between px-10 md:flex lg:px-16">
            <h3 className="font-main font-medium leading-none text-black text-[clamp(3rem,9vw,7rem)]">
              {content.heading}
            </h3>

            <div className={`${step.index ? "max-w-sm" : "max-w-70"} text-right`}>
              <p className="font-main font-medium text-black text-[clamp(1.8rem,5.6vw,2.25rem)] leading-[135%] md:text-2xl lg:text-3xl 2xl:text-4xl md:leading-[130%]">
                {content.title}
              </p>
              {content.description && (
                <p className="mt-1 font-second text-lg tracking-wide text-black/60">
                  {content.description}
                </p>
              )}
            </div>
          </div>
        </div>
        );
      })}

      <HowIndexCounter ref={counterRef} value={stepNumber} total={totalSteps} />

      {/* radiating "tap" */}
      <span
        ref={ringRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 rounded-full border-3 border-[#A23BFF] md:h-32 md:w-32 blur-sm"
      />
    </div>
  );
});

export default HowOverlay;
