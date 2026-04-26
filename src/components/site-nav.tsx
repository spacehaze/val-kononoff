import Link from "next/link";

const sections = [
  { href: "/work", label: "Work" },
  { href: "/music", label: "Music" },
  { href: "/writing", label: "Writing" },
  { href: "/interests", label: "Interests" },
];

export function SiteNav() {
  return (
    <header className="border-b border-rule">
      <nav className="mx-auto w-full max-w-2xl px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          Val Kononoff
        </Link>
        <ul className="flex items-center gap-5 text-sm text-muted">
          {sections.map((section) => (
            <li key={section.href}>
              <Link
                href={section.href}
                className="hover:text-foreground transition-colors"
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
