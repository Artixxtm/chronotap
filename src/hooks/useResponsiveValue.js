"use client";

import { useEffect, useState } from "react";

export function useResponsiveValue(breakpoints, fallback) {
  const [value, setValue] = useState(fallback);

  useEffect(() => {
    const resolve = () => {
      const w = window.innerWidth;
      const match = breakpoints.find((bp) => w >= bp.minWidth);
      return match ? match.value : fallback;
    };
    const onResize = () => setValue(resolve());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
}