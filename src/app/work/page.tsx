import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Val Kononoff",
};

const projects = [
  {
    name: "Lorem ipsum dolor",
    period: "2024 — present",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    name: "Consectetur adipiscing",
    period: "2022 — 2024",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Excepteur sint occaecat",
    period: "2020 — 2022",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

export default function WorkPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Work</h1>
        <p className="font-mono text-sm text-muted">
          Lorem ipsum dolor sit amet
        </p>
      </header>
      <ul className="space-y-8">
        {projects.map((project) => (
          <li
            key={project.name}
            className="border-b border-rule pb-8 last:border-b-0"
          >
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <span className="font-mono text-xs text-muted shrink-0">
                {project.period}
              </span>
            </div>
            <p className="leading-relaxed text-foreground/90">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
