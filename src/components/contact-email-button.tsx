"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "val.kono@proton.me";
const FEEDBACK_LABEL = "Copied — opening mail app…";
const FEEDBACK_FALLBACK = "Copied!";
const FEEDBACK_MS = 1500;
const MAILTO_DELAY_MS = 250;

export function ContactEmailButton() {
  const [feedback, setFeedback] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
  }, []);

  const onClick = async () => {
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
        copied = true;
      }
    } catch {
      // ignore — fall through to mailto
    }
    setFeedback(copied ? FEEDBACK_LABEL : FEEDBACK_FALLBACK);

    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setFeedback(null);
      timerRef.current = null;
    }, FEEDBACK_MS);

    // Fire mailto after the visual confirms; small delay so users see "Copied"
    // before the mail handler grabs focus.
    window.setTimeout(() => {
      window.location.href = `mailto:${EMAIL}`;
    }, MAILTO_DELAY_MS);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Copy ${EMAIL} and open mail app`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        padding: "20px 28px",
        border: "1px solid rgba(245,242,236,0.25)",
        background: "transparent",
        color: "var(--contact-paper)",
        textDecoration: "none",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 500,
        justifyContent: "space-between",
        cursor: "pointer",
        textAlign: "left",
        width: "100%",
      }}
    >
      <span>{feedback ?? EMAIL}</span>
      <span
        aria-hidden
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          opacity: 0.6,
        }}
      >
        {feedback ? "✓" : "↗"}
      </span>
    </button>
  );
}
