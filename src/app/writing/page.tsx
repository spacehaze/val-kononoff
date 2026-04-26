import Link from "next/link";
import type { Metadata } from "next";
import { getArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Writing — Val Kononoff",
};

export default async function WritingPage() {
  const articles = await getArticles();

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
            <Link href={`/writing/${entry.slug}`} className="block group">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h2 className="text-lg font-semibold group-hover:text-accent transition-colors">
                  {entry.title}
                </h2>
                <time className="font-mono text-xs text-muted shrink-0">
                  {entry.date}
                </time>
              </div>
              <p className="leading-relaxed text-foreground/90">
                {entry.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
