/**
 * Building blocks shared across sections.
 */
import type { CSSProperties, ReactNode } from "react";

export function MonoLabel({
  children,
  style,
  as: Tag = "span",
}: {
  children: ReactNode;
  style?: CSSProperties;
  as?: "span" | "div";
}) {
  return (
    <Tag
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--muted)",
        fontWeight: 500,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export function SectionRule({
  label,
  idx,
}: {
  label: string;
  idx: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr auto",
        alignItems: "baseline",
        gap: 24,
        padding: "0 0 28px",
        borderTop: "1px solid var(--rule)",
        paddingTop: 28,
      }}
    >
      <MonoLabel>§ {idx}</MonoLabel>
      <MonoLabel style={{ color: "var(--ink)" }}>{label}</MonoLabel>
      <MonoLabel>—</MonoLabel>
    </div>
  );
}

export function PrimaryButton({
  children,
  href = "#contact",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="vk-primary-btn"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        padding: "18px 28px 18px 32px",
        background: "var(--ink)",
        color: "var(--paper)",
        textDecoration: "none",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 500,
        letterSpacing: "-0.005em",
        borderRadius: 0,
        border: "1px solid var(--ink)",
      }}
    >
      <span>{children}</span>
      <span
        aria-hidden
        style={{
          width: 22,
          height: 1,
          background: "var(--paper)",
          display: "inline-block",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            right: 0,
            top: -3,
            width: 8,
            height: 8,
            borderRight: "1px solid var(--paper)",
            borderTop: "1px solid var(--paper)",
            transform: "rotate(45deg)",
          }}
        />
      </span>
    </a>
  );
}

export function GhostButton({
  children,
  href = "#",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="vk-ghost-btn"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "17px 0",
        color: "var(--ink)",
        textDecoration: "none",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 500,
        borderBottom: "1px solid var(--ink)",
      }}
    >
      {children}
    </a>
  );
}
