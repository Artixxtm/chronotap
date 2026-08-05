"use client";

import { forwardRef } from "react";
import NumberFlow from "@number-flow/react";

const HowIndexCounter = forwardRef(function HowIndexCounter(
  { value, total },
  ref,
) {
  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-1/2 top-13 max-[360px]:top-10 -translate-x-1/2 text-center opacity-0 md:left-10 md:top-1/2 md:translate-x-0 md:translate-y-14 md:text-left lg:left-17.5"
    >
      <span className="font-main font-medium text-xs max-[360px]:text-[10px] tracking-wide text-black/75 md:text-base">
        <NumberFlow value={value} format={{ minimumIntegerDigits: 2 }} />
        {" / "}
        {String(total).padStart(2, "0")}
      </span>
    </div>
  );
});

export default HowIndexCounter;