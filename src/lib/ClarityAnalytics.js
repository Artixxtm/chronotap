"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";
import useConsent from "@/hooks/useConsent";

const ClarityAnalytics = () => {
  const { consent } = useConsent();

  useEffect(() => {
    if (consent !== "accepted") return;

    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
    if (!projectId) {
      console.warn("Clarity Project ID is missing");
      return;
    }

    clarity.init(projectId);
  }, [consent]);

  return null;
};

export default ClarityAnalytics;