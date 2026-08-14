"use client";

import { useRef } from "react";
import { useLogoAnimation } from "@/hooks/useLogoAnimation";

const C_PATH =
  "M 192.249 192.251 L 0 384.502 -0 1600.153 L -0 2815.804 199.599 3014.402 L 399.198 3213 1668.433 3213 L 2937.668 3213 2938.334 2914.334 C 2939.197 2527.489, 2939.197 659.449, 2938.334 287.250 L 2937.668 -0 1661.083 -0 L 384.498 0 192.249 192.251 M 0.498 1600 C 0.498 2269.075, 0.612 2542.788, 0.750 2208.250 C 0.888 1873.713, 0.888 1326.288, 0.750 991.750 C 0.612 657.213, 0.498 930.925, 0.498 1600 M 2844.548 569 L 2751.690 662 1802.093 662 L 852.496 662 763.248 751.252 L 674 840.504 674 1603.623 L 674 2366.741 761.250 2452.855 L 848.500 2538.968 1797.498 2538.984 L 2746.496 2539 2842.248 2634.748 L 2938 2730.496 2938 1603.248 C 2938 983.262, 2937.867 476, 2937.703 476 C 2937.540 476, 2895.620 517.850, 2844.548 569";

const T_PATH =
  "M 2357.248 92.252 L 2265 184.504 2265 723.752 L 2265 1263 1224.204 1263 L 183.408 1263 91.704 1355.656 L 0 1448.312 0.046 1599.406 L 0.093 1750.500 94.296 1842.237 L 188.500 1933.975 355.500 1934.032 C 492.056 1934.080, 2263.911 1937.697, 2264.750 1937.930 C 2264.887 1937.969, 2265 2181.338, 2265 2478.752 L 2265 3019.504 2361.752 3116.252 L 2458.504 3213 2697.171 3213 L 2935.838 3213 2936.169 2405.750 C 2936.351 1961.763, 2936.351 1238.838, 2936.169 799.250 L 2935.837 0 2692.667 0 L 2449.496 0 2357.248 92.252 M 0.487 1599.500 C 0.487 1683.100, 0.605 1717.152, 0.750 1675.171 C 0.894 1633.191, 0.894 1564.791, 0.750 1523.171 C 0.605 1481.552, 0.487 1515.900, 0.487 1599.500";

const LINE_H = "md:h-[min(7cqw,13dvh)] h-[max(1.85rem,8.5cqw)]";
const WORDMARK_TEXT = `font-main font-semibold leading-[100%] ${LINE_H} md:text-[min(7cqw,13dvh)] text-[max(1.85rem,8.5cqw)] relative md:top-px whitespace-nowrap select-none [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]`;

const ChronoLogo = ({ isOpen = false, color = "#ffffff" }) => {
  const wrapperRef = useRef(null);
  const cRef = useRef(null);
  const hronoWrapRef = useRef(null);
  const hronoRef = useRef(null);
  const tSvgRef = useRef(null);
  const apWrapRef = useRef(null);
  const apRef = useRef(null);
  const tmRef = useRef(null);

  useLogoAnimation({
    wrapperRef,
    cRef,
    hronoWrapRef,
    hronoRef,
    tSvgRef,
    apWrapRef,
    apRef,
    tmRef,
  });

  return (
    <div
      ref={wrapperRef}
      className="flex items-center overflow-visible transition-colors relative md:top-0 top-2 duration-450 ease-[cubic-bezier(0.76,0,0.24,1)] opacity-0"
      style={{
        color,
        transitionDelay: isOpen ? "250ms" : "0ms",
      }}
      aria-label="ChronoTap"
    >
      <svg
        ref={cRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2938 3213"
        preserveAspectRatio="xMidYMin meet"
        className={`md:w-[min(4.5cqw,8.36dvh)] w-[5.48cqw] ${LINE_H} shrink-0 relative z-10`}
        aria-hidden="true"
      >
        <path d={C_PATH} fill="currentColor" fillRule="evenodd" stroke="none" />
      </svg>

      <div
        ref={hronoWrapRef}
        className="overflow-hidden flex items-center shrink-0 relative z-10"
        aria-hidden="true"
      >
        <span ref={hronoRef} className={WORDMARK_TEXT}>
          hrono
        </span>
      </div>

      <div
        className={`${LINE_H} shrink-0 relative z-10 overflow-visible flex items-center justify-center md:w-[min(4.95cqw,9.19dvh)] w-[6.03cqw]`}
      >
        <svg
          ref={tSvgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2936 3213"
          preserveAspectRatio="xMidYMid meet"
          className="h-full block md:w-[min(4.95cqw,9.19dvh)] w-[6.03cqw]"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "center center",
          }}
          aria-hidden="true"
        >
          <path
            d={T_PATH}
            fill="currentColor"
            fillRule="evenodd"
            stroke="none"
          />
        </svg>
      </div>

      <div
        ref={apWrapRef}
        className="overflow-hidden flex items-center shrink-0 relative z-10"
        aria-hidden="true"
      >
        <span ref={apRef} className={WORDMARK_TEXT}>
          ap
        </span>
      </div>

      <span
        ref={tmRef}
        className={`font-main font-normal ${LINE_H} leading-[100%] md:text-[min(7cqw,13dvh)] text-[8.25cqw] relative z-10 md:top-px shrink-0 select-none [text-box-trim:trim-both] [text-box-edge:cap_alphabetic]`}
        aria-hidden="true"
      >
        ™
      </span>
    </div>
  );
};

export default ChronoLogo;
