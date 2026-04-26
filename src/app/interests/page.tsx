import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interests — Val Kononoff",
};

const interests = [
  {
    name: "Lorem",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Ipsum",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    name: "Dolor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    name: "Consectetur",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
];

export default function InterestsPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Interests</h1>
        <p className="font-mono text-sm text-muted">
          Lorem ipsum dolor sit amet
        </p>
      </header>
      <ul className="space-y-8">
        {interests.map((item) => (
          <li
            key={item.name}
            className="border-b border-rule pb-8 last:border-b-0"
          >
            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
            <p className="leading-relaxed text-foreground/90">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
