"use client";

import { useLayoutEffect, useState } from "react";

export const PHONE_MEDIA_QUERY = "(max-width: 767px)";

export default function useIsPhone() {
  const [isPhone, setIsPhone] = useState(false);

  useLayoutEffect(() => {
    const media = window.matchMedia(PHONE_MEDIA_QUERY);
    const update = () => setIsPhone(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isPhone;
}
