import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import portrait from "../../../public/portrait.jpg";
import { bookingHref } from "@/content/products";

export const metadata: Metadata = {
  title: "About",
  description:
    "Val Kononoff — QA & quality engineering consultant in Toronto. 12+ years building QA practices, test automation and AI-augmented testing workflows.",
  alternates: { canonical: "/about" },
};

const METRICS = [
  ["12+ yrs", "in QA & quality engineering"],
  ["8 teams", "led across scrum orgs"],
  ["40% faster", "time to market, average"],
  ["60% less", "manual test-authoring time with AI"],
] as const;

const FAQ = [
  {
    q: "How do I get a course or material after paying?",
    a: "Courses open instantly after payment. PDFs and templates are sent to the email you used at checkout — usually within minutes. If nothing arrives, check spam or write to me.",
  },
  {
    q: "How does booking a consultation work?",
    a: "Pick a consultation, choose a time slot and pay. You'll get a calendar invite with a video link and, for strategy calls, a short questionnaire so we can use the hour well.",
  },
  {
    q: "Can my company pay with an invoice?",
    a: "Yes. For team workshops, audits and team licences of courses, email me and I'll send an invoice.",
  },
  {
    q: "Do you offer refunds?",
    a: "If a course isn't for you, email me within 14 days of purchase. Consultations can be rescheduled up to 24 hours before the call.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="page">
      <section className="about">
        <div className="about-photo">
          <Image
            src={portrait}
            alt="Val Kononoff"
            fill
            placeholder="blur"
            sizes="(max-width: 860px) 90vw, 420px"
            priority
          />
        </div>
        <div className="about-text">
          <h1 className="hero-title about-title">Hi, I&apos;m Val</h1>
          <p>
            I&apos;m a QA &amp; quality engineering consultant based in
            Toronto. For more than 12 years I&apos;ve built QA practices,
            test-automation frameworks and, lately, AI-augmented testing
            workflows for engineering teams around the world.
          </p>
          <p>
            Everything in this store comes from that work: the courses teach
            what I&apos;ve rolled out across real teams, the playbooks are the
            documents I use in paid engagements, and the consultations are
            where we solve your specific problem together.
          </p>
          <div className="about-actions">
            <Link href="/courses" className="btn btn-primary">
              Browse courses
            </Link>
            <a href={bookingHref()} className="btn btn-ghost">
              Book a consultation
            </a>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Track record">
        {METRICS.map(([k, v]) => (
          <div key={k} className="metric">
            <div className="metric-k">{k}</div>
            <div className="metric-v">{v}</div>
          </div>
        ))}
      </section>

      <section className="shelf" aria-labelledby="faq">
        <h2 id="faq" className="shelf-title">
          Questions
        </h2>
        <div className="faq">
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
