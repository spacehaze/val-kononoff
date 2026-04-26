import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Val Kononoff",
};

const articles = [
  {
    slug: "lorem-ipsum-dolor",
    title: "Lorem ipsum dolor sit amet",
    date: "2026-03-12",
    excerpt:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    slug: "consectetur-adipiscing",
    title: "Consectetur adipiscing elit",
    date: "2025-11-04",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    slug: "excepteur-sint",
    title: "Excepteur sint occaecat cupidatat",
    date: "2025-07-21",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];

export default function WritingPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Writing</h1>
        <p className="font-mono text-sm text-muted">
          Lorem ipsum dolor sit amet
        </p>
      </header>
      <ul className="space-y-8">
        {articles.map((entry) => (
          <li
            key={entry.slug}
            className="border-b border-rule pb-8 last:border-b-0"
          >
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h2 className="text-lg font-semibold">{entry.title}</h2>
              <time className="font-mono text-xs text-muted shrink-0">
                {entry.date}
              </time>
            </div>
            <p className="leading-relaxed text-foreground/90">
              {entry.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
