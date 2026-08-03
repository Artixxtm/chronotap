"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsap";

/**
 * Grows the bottom border-radius of a section as it scrolls out of view.
 *
 * @param {React.RefObject} ref - ref on the section element
 * @param {object} options
 * @param {string} options.from - starting radius (should match your CSS default)
 * @param {string} options.to - ending radius once scrolled past
 * @param {string} options.start - ScrollTrigger start
 * @param {string} options.end - ScrollTrigger end
 */
export default function useScrollRoundedBottom(
  ref,
  { from = "0rem", to = "3rem", start = "top top", end = "bottom top" } = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { borderBottomLeftRadius: from, borderBottomRightRadius: from },
        {
          borderBottomLeftRadius: to,
          borderBottomRightRadius: to,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [ref, from, to, start, end]);
}