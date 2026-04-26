import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music — Val Kononoff",
};

const releases = [
  {
    title: "Lorem Ipsum",
    year: "2025",
    kind: "EP",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Dolor Sit Amet",
    year: "2023",
    kind: "Single",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    title: "Consectetur",
    year: "2021",
    kind: "Album",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
];

export default function MusicPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Music</h1>
        <p className="font-mono text-sm text-muted">
          Lorem ipsum dolor sit amet
        </p>
      </header>
      <ul className="space-y-8">
        {releases.map((release) => (
          <li
            key={release.title}
            className="border-b border-rule pb-8 last:border-b-0"
          >
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h2 className="text-lg font-semibold">{release.title}</h2>
              <span className="font-mono text-xs text-muted shrink-0">
                {release.kind} · {release.year}
              </span>
            </div>
            <p className="leading-relaxed text-foreground/90">
              {release.description}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
