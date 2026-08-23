"use client";

import { useEffect, useState } from "react";

export const PHONE_MEDIA_QUERY = "(max-width: 767px)";

function getIsPhone() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(PHONE_MEDIA_QUERY).matches
  );
}

export default function useIsPhone() {
  const [isPhone, setIsPhone] = useState(getIsPhone);

  useEffect(() => {
    const media = window.matchMedia(PHONE_MEDIA_QUERY);
    const update = () => setIsPhone(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isPhone;
}
