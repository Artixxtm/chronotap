import clarity from "@microsoft/clarity";

export const trackEvent = (eventName, consent) => {
  if (typeof window === "undefined") return;
  
  if (consent !== "accepted") return;

  try {
    clarity.event(eventName);
  } catch (error) {
    console.warn(`Failed to track Clarity event: ${eventName}`, error);
  }
};