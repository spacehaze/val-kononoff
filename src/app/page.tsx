import Link from "next/link";

export default function Home() {
  return (
    <article className="space-y-4">
      {/* Live offer */}
      <div className="rounded-lg border border-rule bg-background/60 p-6 space-y-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-bold tracking-tight">Easy Triads</h3>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Free · Live
          </span>
        </div>
        <p className="text-xl leading-relaxed text-foreground/90">
          Fall in love with your guitar playing. Learn how guitar actually
          works.
        </p>
        <p className="leading-relaxed text-foreground/90">
          A free, browser-based study tool for the small chord shapes that
          unlock the whole fretboard. Drag, drop, and play through every
          major, minor, and diminished triad on every string set. No
          signup, no paywall.
        </p>
        <Link
          href="https://easy-triads.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Easy Triads (opens in a new tab)"
          className="inline-block text-accent underline underline-offset-4 hover:no-underline"
        >
          Open Easy Triads <span aria-hidden="true">↗</span>
        </Link>
      </div>

      {/* Placeholder 1 */}
      <div className="rounded-lg border border-dashed border-rule p-6 space-y-2">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-bold tracking-tight text-muted">
            Coming soon
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            In progress
          </span>
        </div>
        <p className="leading-relaxed text-muted">
          The next thing I&apos;m building.
        </p>
      </div>

      {/* Placeholder 2 */}
      <div className="rounded-lg border border-dashed border-rule p-6 space-y-2">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-bold tracking-tight text-muted">
            Coming soon
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Idea
          </span>
        </div>
        <p className="leading-relaxed text-muted">
          And the one after that.
        </p>
      </div>
    </article>
  );
}
