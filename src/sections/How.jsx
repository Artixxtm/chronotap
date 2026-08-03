"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "@/utils/gsap";
import { buildHowTimeline } from "@/utils/howTimeline";
import { HOW_INDEXED_TOTAL } from "@/constants/how";
import What from "./What";
import HowOverlay from "@/components/how/HowOverlay";
import HowReducedMotionList from "@/components/how/HowReducedMotionList";

export default function How() {
  const shouldReduceMotion = useReducedMotion();

  const [mounted, setMounted] = useState(false);
  useLayoutEffect(() => setMounted(true), []);

  const enablePin = mounted && !shouldReduceMotion;

  const [stepNumber, setStepNumber] = useState(1);

  const whatHandleRef = useRef(null);
  const overlayHandleRef = useRef(null);

  useLayoutEffect(() => {
    if (!enablePin) return;

    const ctx = gsap.context(() => {
      buildHowTimeline({
        whatHandle: whatHandleRef.current,
        overlayHandle: overlayHandleRef.current,
        onStepChange: setStepNumber,
      });
    });

    return () => ctx.revert();
  }, [enablePin]);

  if (!enablePin) {
    return (
      <>
        <What />
        <HowReducedMotionList />
      </>
    );
  }

  return (
    <What ref={whatHandleRef}>
      <HowOverlay
        ref={overlayHandleRef}
        stepNumber={stepNumber}
        totalSteps={HOW_INDEXED_TOTAL}
      />
    </What>
  );
}