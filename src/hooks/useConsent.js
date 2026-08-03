"use client";

import { useCallback, useEffect, useState } from "react";
import {
  CONSENT_STORAGE_KEY,
  CONSENT_ACCEPTED,
  CONSENT_DECLINED,
  CONSENT_EVENT,
} from "@/constants/consent";

export default function useConsent() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    let stored;
    try {
      stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    } catch {
      stored = null;
    }
    setConsent(stored ?? "unset");

    const onChange = (e) => setConsent(e.detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  const setAndBroadcast = useCallback((value) => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
    } catch {}
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
    setConsent(value);
  }, []);

  return {
    consent,
    accept: () => setAndBroadcast(CONSENT_ACCEPTED),
    decline: () => setAndBroadcast(CONSENT_DECLINED),
  };
}