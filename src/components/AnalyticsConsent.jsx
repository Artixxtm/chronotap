"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import useConsent from "@/hooks/useConsent";
import { BUTTON_RADIUS, BUTTON_RADIUS_S } from "@/constants/styles";
import { useI18n } from "@/i18n/I18nProvider";
import { localizedPath } from "@/i18n/config";

const TRANSITION = { duration: 0.4, ease: [0.23, 1, 0.32, 1] };

export default function AnalyticsConsent() {
  const { locale, messages } = useI18n();
  const { consent, accept, decline } = useConsent();
  const isVisible = consent === "unset";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="analytics-consent"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={TRANSITION}
          role="dialog"
          aria-live="polite"
          aria-label={messages.consent.ariaLabel}
          className={`fixed z-900 bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm ${BUTTON_RADIUS} border border-black/8 bg-white/94 backdrop-blur-xl p-5 shadow-[0_20px_80px_rgba(0,0,0,.18)] md:p-6`}
        >
          <p className="font-main text-sm font-medium leading-snug text-black">
            {messages.consent.text}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={accept}
              className={`font-main text-sm font-medium cursor-pointer bg-black text-white px-4 py-2.5 ${BUTTON_RADIUS_S} hover:opacity-80 transition-opacity`}
            >
              {messages.consent.accept}
            </button>
            <button
              type="button"
              onClick={decline}
              className="font-main text-sm font-medium cursor-pointer text-black/70 hover:text-black transition-colors px-2 py-2.5"
            >
              {messages.consent.decline}
            </button>
            <Link
              href={localizedPath(locale, "/privacy")}
              className="ml-auto font-main text-xs underline decoration-black/20 underline-offset-4 text-black/40 hover:decoration-black hover:text-black transition"
            >
              {messages.common.privacyPolicy}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
