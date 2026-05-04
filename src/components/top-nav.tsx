import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function TopNav() {
  return (
    <header
      className="sticky top-0 z-10"
      style={{
        background: "var(--paper)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div
        className="mx-auto vk-nav-inner"
        style={{
          maxWidth: 1280,
          padding: "20px 56px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 40,
        }}
      >
        <Link
          href="/"
          className="flex items-center"
          style={{ gap: 14, textDecoration: "none" }}
        >
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              background: "var(--accent)",
            }}
            aria-hidden
          />
          <span
            className="font-[var(--font-serif)] vk-wordmark"
            style={{
              fontSize: 17,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
            }}
          >
            Val Kononoff
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex vk-nav-links"
          style={{ gap: 36 }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:opacity-60 transition-opacity"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13.5,
                fontWeight: 500,
                letterSpacing: "-0.005em",
                color: "var(--ink)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div
          className="flex items-center"
          style={{ justifySelf: "end", gap: 12 }}
        >
          <ThemeToggle />
          <a
            href="#contact"
            className="hover:opacity-90 transition-opacity vk-nav-cta"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13.5,
              fontWeight: 500,
              color: "var(--ink)",
              textDecoration: "none",
              padding: "10px 18px",
              border: "1px solid var(--ink)",
            }}
          >
            Get in touch →
          </a>
        </div>
      </div>
    </header>
  );
}
