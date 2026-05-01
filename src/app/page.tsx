import Link from "next/link";

export default function Home() {
  return (
    <article className="space-y-8">
      <div className="space-y-4 leading-relaxed text-foreground/90">
        <p className="text-xl">
          Fall in love with your guitar playing. Learn how guitar actually
          works.
        </p>
        <p>
          I built{" "}
          <Link
            href="https://easy-triads.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 hover:no-underline"
          >
            Easy Triads
          </Link>{" "}
          — a free, browser-based study tool for the small chord shapes that
          unlock the whole fretboard. Drag, drop, and play through every
          major, minor, and diminished triad on every string set. No signup,
          no paywall.
        </p>
      </div>
    </article>
  );
}
