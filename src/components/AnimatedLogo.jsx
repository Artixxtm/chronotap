"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedLogo({
  size = 220,
  strokeWidth = 2,
}) {
  const svgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray(".logo-path");

      paths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fill: "transparent",
          strokeOpacity: 1,
        });
      });

      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: { ease: "power3.inOut" },
      });

      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.25,
      })

        .to(
          paths,
          {
            fill: "#ffffff",
            duration: 0.6,
          },
          "-=1"
        )

        .to(svgRef.current, {
          scale: 1.04,
          duration: 2,
          ease: "sine.inOut",
        });

    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative z-2 w-full sm:max-w-65 max-w-45">
      <svg
        ref={svgRef}
        viewBox="0 0 938 771"
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
      >
        <path
          className="logo-path"
          stroke="white"
          strokeWidth={strokeWidth}
          d="M705 114L660.5 158.722H204.5L161.684 201.5V568L203.5 609.289H659L705 655.258V771H96L0 675.513V92.3564L92.5 0H705V114Z"
        />

        <path
          className="logo-path"
          stroke="white"
          strokeWidth={strokeWidth}
          d="M938 771.002H823.5L776.949 724.5V464.857L278.5 463.857L233.5 420V347.5L277.5 303.104H776.949V44.5L821.5 0H938V771.002Z"
        />
      </svg>
    </div>
  );
}