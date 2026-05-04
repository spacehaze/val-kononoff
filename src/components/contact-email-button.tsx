"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "val.kono@proton.me";

export function EmailRow() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    []
  );

  const onCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const ta = document.createElement("textarea");
        ta.value = EMAIL;
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
        } catch {
          /* ignore */
        }
        document.body.removeChild(ta);
      }
      setCopied(true);
    } catch {
      setCopied(true);
    }

    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setCopied(false);
      timerRef.current = null;
    }, 1600);
  };

  return (
    <div
      className="vk-contact-row-email"
      style={{
        display: "flex",
        alignItems: "stretch",
        border: "1px solid rgba(245,242,236,0.25)",
        color: "var(--contact-paper)",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 500,
      }}
    >
      <span
        className="vk-contact-email-cell"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "20px 24px",
          minWidth: 0,
        }}
      >
        <span
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {EMAIL}
        </span>
      </span>
      <button
        type="button"
        onClick={onCopy}
        aria-label={copied ? "Copied to clipboard" : "Copy email to clipboard"}
        className="vk-contact-copy-btn"
        style={{
          appearance: "none",
          borderLeft: "1px solid rgba(245,242,236,0.25)",
          borderTop: "none",
          borderRight: "none",
          borderBottom: "none",
          background: copied ? "var(--accent)" : "transparent",
          color: "var(--contact-paper)",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontWeight: 500,
          padding: "0 22px",
          cursor: "pointer",
          minWidth: 96,
          transition: "background 120ms ease",
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <a
        href={`mailto:${EMAIL}`}
        aria-label="Open in mail app"
        className="vk-contact-mail-launch"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "1px solid rgba(245,242,236,0.25)",
          color: "var(--contact-paper)",
          textDecoration: "none",
          fontFamily: "var(--font-mono)",
          fontSize: 14,
          padding: "0 22px",
          minWidth: 60,
          opacity: 0.7,
        }}
      >
        ↗
      </a>
    </div>
  );
}
