import {
  MonoLabel,
  SectionRule,
  PrimaryButton,
  GhostButton,
} from "@/components/sections";
import { TopNav } from "@/components/top-nav";

const SITE_URL = "https://valkononoff.com";

const FAQ_ITEMS = [
  {
    q: "What kind of engagements do you take?",
    a: "Project-based QA transformation, fractional Head of QA, test-automation framework builds, AI-in-QA integration pilots, and team training. Engagements range from a 2-week diagnostic audit to multi-quarter strategic partnerships.",
  },
  {
    q: "Do you work remote, or only on-site?",
    a: "Both. I'm based in Toronto, Canada, and work primarily with remote and distributed engineering teams worldwide. On-site visits during kick-off or training sprints are available where it makes sense.",
  },
  {
    q: "How is consulting different from hiring a full-time QA lead?",
    a: "A consultant brings cross-industry pattern recognition and an outside perspective with no internal politics. For most companies a senior QA hire takes 6–9 months to ramp up and start changing systems; an engagement starts producing roadmap and quick wins in week one. Consulting is also the right shape when you need transformation without the long-term headcount.",
  },
  {
    q: "What's your approach to AI in QA workflows?",
    a: "Pragmatic. AI tools today reliably accelerate test authoring, triage flake, and convert manual scenarios into automated specs — provided humans stay in the loop on coverage decisions. I help teams adopt LLM-assisted testing without losing the discipline of intentional coverage strategy.",
  },
  {
    q: "How do you measure success on a QA engagement?",
    a: "By delivery metrics, not test counts: time from feature merge to verified release, escaped-defect rate per quarter, automation maintenance cost, manual-authoring hours per sprint, and engineering confidence at deploy time.",
  },
  {
    q: "What size of company do you work with?",
    a: "Mostly Series A through enterprise — anywhere from 20-engineer scale-ups to 200+ engineer organizations rolling out QA practices across multiple scrum teams.",
  },
];

const SERVICE_DEFS = [
  {
    n: "01",
    title: "Strategic QA Transformation",
    description:
      "Align your QA strategy with business goals and reduce time to market. Includes a quality-engineering audit, roadmap with metrics, and an org-structure recommendation.",
    serviceType: "QA Strategy Consulting",
  },
  {
    n: "02",
    title: "Test Automation",
    description:
      "Build reliable, maintainable automation that scales with your product. Framework selection, CI/CD integration, and a coverage strategy you can actually maintain.",
    serviceType: "Test Automation Consulting",
  },
  {
    n: "03",
    title: "AI in QA Workflows",
    description:
      "Leverage AI tooling to accelerate testing and reduce manual effort: LLM-assisted authoring, AI-generated test scenarios, and automated triage of flake.",
    serviceType: "AI-Augmented Testing Consulting",
  },
  {
    n: "04",
    title: "Team Enablement & Training",
    description:
      "Upskill QA and dev teams on modern practices and tools through hands-on workshops, pairing programs, and durable playbooks.",
    serviceType: "Engineering Team Training",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}#val-kononoff`,
      name: "Val Kononoff",
      jobTitle: "QA & Quality Engineering Consultant",
      url: SITE_URL,
      sameAs: [],
      description:
        "Independent QA and Quality Engineering consultant for engineering leaders.",
      knowsAbout: [
        "Quality Engineering",
        "Test Automation",
        "AI in QA",
        "Engineering Leadership",
        "QA Transformation",
        "CI/CD Testing",
        "Release Engineering",
      ],
      workLocation: { "@type": "Place", name: "Toronto, Canada" },
      email: "mailto:val.kono@proton.me",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}#service`,
      name: "Val Kononoff — QA & Quality Engineering Consulting",
      url: SITE_URL,
      description:
        "QA and Quality Engineering consulting for engineering leaders. Strategy, test automation, AI-augmented testing, and team enablement.",
      provider: { "@id": `${SITE_URL}#val-kononoff` },
      founder: { "@id": `${SITE_URL}#val-kononoff` },
      areaServed: { "@type": "Place", name: "Worldwide (remote)" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressCountry: "CA",
      },
      knowsAbout: [
        "QA strategy",
        "Test automation framework design",
        "LLM-assisted testing",
        "Continuous integration testing",
        "Release pipeline optimization",
        "QA team scaling",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Consulting services",
        itemListElement: SERVICE_DEFS.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.description,
            serviceType: s.serviceType,
            provider: { "@id": `${SITE_URL}#val-kononoff` },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Val Kononoff",
      publisher: { "@id": `${SITE_URL}#val-kononoff` },
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const SERVICES = [
  {
    n: "01",
    title: "Strategic QA Transformation",
    benefit:
      "Align your QA strategy with business goals and reduce time to market.",
    deliverables: [
      "Quality assessment audit",
      "Roadmap & metrics",
      "Org structure",
    ],
  },
  {
    n: "02",
    title: "Test Automation",
    benefit:
      "Build reliable, maintainable automation that scales with your product.",
    deliverables: [
      "Framework selection",
      "CI/CD integration",
      "Coverage strategy",
    ],
  },
  {
    n: "03",
    title: "AI in QA Workflows",
    benefit:
      "Leverage AI tooling to accelerate testing and reduce manual effort.",
    deliverables: [
      "LLM-assisted authoring",
      "Test generation",
      "Triage automation",
    ],
  },
  {
    n: "04",
    title: "Team Enablement & Training",
    benefit: "Upskill QA and dev teams on modern practices and tools.",
    deliverables: [
      "Hands-on workshops",
      "Pairing programs",
      "Playbooks & docs",
    ],
  },
];

const WORK = [
  {
    n: "01",
    title: "QA Team Leadership & Hiring",
    metric: "8 teams",
    metricLabel: "scaled across the org",
    body: "Built and scaled QA practices across multiple scrum teams. Hired and onboarded senior engineers, established quality engineering standards, and rolled them out org-wide.",
    tags: ["Leadership", "Hiring", "Standards"],
  },
  {
    n: "02",
    title: "AI Tooling Implementation",
    metric: "60% less",
    metricLabel: "manual authoring time",
    body: "Led rollout of AI and language-model tools across test automation workflows. Improved authoring efficiency, reduced flake, and decreased the path from feature merge to verified release.",
    tags: ["LLMs", "Automation", "Tooling"],
  },
  {
    n: "03",
    title: "Cultural Shift to AI-Driven QA",
    metric: "3 quarters",
    metricLabel: "to full team adoption",
    body: "Facilitated organizational adoption of language-model-based workflows. Shifted team mindset from traditional manual testing to AI-augmented quality engineering through pairing, playbooks, and embedded coaching.",
    tags: ["Change mgmt", "Enablement"],
  },
  {
    n: "04",
    title: "Accelerated Delivery",
    metric: "40% faster",
    metricLabel: "time to market",
    body: "Demonstrable reduction in time to market through process optimization, automation improvements, and removing the QA bottleneck from the release pipeline.",
    tags: ["Velocity", "Process"],
  },
];

const HERO_METRICS = [
  ["12+ yrs", "in QA & quality engineering"],
  ["8 teams", "led across scrum orgs"],
  ["40% faster", "time to market, average"],
  ["AI-native", "workflows shipped to prod"],
] as const;

const CONTACT_META = [
  ["Available", "Q3 2026 onward"],
  ["Engagement", "Project · hourly · training"],
  ["Based in", "Toronto, Canada"],
  ["Working with", "Teams worldwide, remote"],
] as const;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <TopNav />
      <main id="main-content">
        {/* § 00 Hero */}
        <section
          className="mx-auto"
          style={{ padding: "80px 56px 120px", maxWidth: 1280 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: 24,
              marginBottom: 56,
            }}
          >
            <MonoLabel>§ 00</MonoLabel>
            <div className="flex items-center" style={{ gap: 16, flexWrap: "wrap" }}>
              <MonoLabel style={{ color: "var(--ink)" }}>
                QA & Quality Engineering Consulting
              </MonoLabel>
              <span
                style={{
                  width: 40,
                  height: 1,
                  background: "var(--rule-strong)",
                }}
                aria-hidden
              />
              <MonoLabel>Toronto · Remote</MonoLabel>
            </div>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(56px, 7.2vw, 104px)",
              lineHeight: 0.96,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              color: "var(--ink)",
              margin: "0 0 48px",
              maxWidth: "14ch",
              textWrap: "pretty",
            }}
          >
            Accelerate your delivery.
            <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--accent)",
                fontWeight: 400,
              }}
            >
              Fix QA
            </em>{" "}
            before it becomes a bottleneck.
          </h1>

          <div
            className="hero-cta-row"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "start",
              marginBottom: 64,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 19,
                lineHeight: 1.55,
                color: "var(--ink-soft)",
                margin: 0,
                maxWidth: "46ch",
                fontWeight: 400,
              }}
            >
              I help engineering leaders ship faster by fixing the quality
              engineering layer — strategy, automation, and AI-driven
              workflows that scale with your team.
            </p>
            <div className="flex items-center" style={{ gap: 32, flexWrap: "wrap" }}>
              <PrimaryButton href="#contact">Get in touch</PrimaryButton>
              <GhostButton href="#services">See services</GhostButton>
            </div>
          </div>

          <div
            className="hero-metrics"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              background: "var(--rule)",
              border: "1px solid var(--rule)",
              marginTop: 24,
            }}
          >
            {HERO_METRICS.map(([k, v]) => (
              <div
                key={k}
                style={{ background: "var(--paper)", padding: "28px 24px" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 28,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: "var(--ink)",
                    marginBottom: 10,
                    fontWeight: 400,
                  }}
                >
                  {k}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    color: "var(--muted)",
                    lineHeight: 1.4,
                  }}
                >
                  {v}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* § 01 Services */}
        <section
          id="services"
          className="mx-auto"
          style={{ padding: "0 56px 120px", maxWidth: 1280 }}
        >
          <SectionRule label="Services" idx="01" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: 24,
              marginBottom: 64,
            }}
          >
            <div />
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 4.4vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                margin: 0,
                maxWidth: "20ch",
                fontWeight: 400,
                textWrap: "balance",
              }}
            >
              Four pillars to move quality from cost center to{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                delivery accelerator
              </em>
              .
            </h2>
          </div>

          <div
            className="service-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              background: "var(--rule)",
              border: "1px solid var(--rule)",
            }}
          >
            {SERVICES.map((s) => (
              <article
                key={s.n}
                style={{
                  background: "var(--paper)",
                  padding: "40px 40px 44px",
                  display: "grid",
                  gridTemplateRows: "auto 1fr auto",
                  gap: 24,
                  minHeight: 320,
                }}
              >
                <div className="flex items-baseline justify-between">
                  <MonoLabel style={{ color: "var(--accent)" }}>
                    — {s.n}
                  </MonoLabel>
                  <MonoLabel>Pillar</MonoLabel>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 30,
                      lineHeight: 1.1,
                      letterSpacing: "-0.015em",
                      color: "var(--ink)",
                      margin: "0 0 16px",
                      fontWeight: 400,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 16,
                      lineHeight: 1.55,
                      color: "var(--ink-soft)",
                      margin: 0,
                      maxWidth: "38ch",
                    }}
                  >
                    {s.benefit}
                  </p>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px 16px",
                    borderTop: "1px solid var(--rule)",
                    paddingTop: 16,
                  }}
                >
                  {s.deliverables.map((d, i) => (
                    <li
                      key={d}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.05em",
                        color: "var(--muted)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        gridColumn: i === 0 ? "1 / -1" : "auto",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          width: 4,
                          height: 4,
                          background: "var(--accent)",
                          flexShrink: 0,
                        }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* § 02 Selected work */}
        <section
          id="work"
          className="mx-auto"
          style={{ padding: "0 56px 120px", maxWidth: 1280 }}
        >
          <SectionRule label="Selected work" idx="02" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: 24,
              marginBottom: 64,
            }}
          >
            <div />
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 4.4vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                margin: 0,
                maxWidth: "22ch",
                fontWeight: 400,
                textWrap: "balance",
              }}
            >
              Engagements where the QA function moved the business — not just
              the test count.
            </h2>
          </div>

          <div className="flex flex-col">
            {WORK.map((w) => (
              <article
                key={w.n}
                className="work-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 1.4fr 1fr",
                  gap: 32,
                  padding: "40px 0",
                  borderTop: "1px solid var(--rule)",
                  alignItems: "start",
                }}
              >
                <MonoLabel>— {w.n}</MonoLabel>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 28,
                    lineHeight: 1.1,
                    letterSpacing: "-0.015em",
                    color: "var(--ink)",
                    margin: 0,
                    maxWidth: "14ch",
                    fontWeight: 400,
                  }}
                >
                  {w.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: "var(--ink-soft)",
                    margin: 0,
                    maxWidth: "52ch",
                  }}
                >
                  {w.body}
                </p>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 38,
                      lineHeight: 1,
                      letterSpacing: "-0.025em",
                      color: "var(--accent)",
                      marginBottom: 8,
                      fontWeight: 400,
                    }}
                  >
                    {w.metric}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      color: "var(--muted)",
                      lineHeight: 1.45,
                      marginBottom: 16,
                    }}
                  >
                    {w.metricLabel}
                  </div>
                  <div className="flex flex-wrap" style={{ gap: 8 }}>
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10.5,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "var(--ink)",
                          padding: "4px 9px",
                          border: "1px solid var(--rule-strong)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
            <div style={{ borderTop: "1px solid var(--rule)" }} />
          </div>
        </section>

        {/* § 03 About */}
        <section
          id="about"
          className="mx-auto"
          style={{ padding: "0 56px 120px", maxWidth: 1280 }}
        >
          <SectionRule label="About" idx="03" />
          <div
            className="about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1.1fr 1fr",
              gap: 48,
              alignItems: "start",
            }}
          >
            <div />
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(32px, 3.6vw, 44px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.015em",
                  color: "var(--ink)",
                  margin: "0 0 28px",
                  fontWeight: 400,
                  textWrap: "pretty",
                  maxWidth: "22ch",
                }}
              >
                I&apos;ve spent the last decade-plus building quality
                engineering practices that ship.
              </h2>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 16.5,
                  lineHeight: 1.65,
                  color: "var(--ink-soft)",
                  maxWidth: "54ch",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <p style={{ margin: 0 }}>
                  I work with engineering leaders to take quality from a
                  downstream cost center to an upstream accelerator —
                  through strategy, automation, and the careful introduction
                  of AI into testing workflows.
                </p>
                <p style={{ margin: 0 }}>
                  My engagements are pragmatic: built around the team you
                  have, the codebase you already ship, and the business
                  outcomes that matter to your roadmap.
                </p>
              </div>
            </div>

            <div
              style={{
                aspectRatio: "4 / 5",
                background: `repeating-linear-gradient(135deg, var(--rule) 0 1px, transparent 1px 12px), var(--paper-deep)`,
                border: "1px solid var(--rule-strong)",
                position: "relative",
              }}
              role="img"
              aria-label="Portrait placeholder. A photo of Val Kononoff will go here."
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MonoLabel>portrait · 4:5</MonoLabel>
              </div>
              <div
                style={{
                  position: "absolute",
                  left: 16,
                  bottom: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <MonoLabel style={{ color: "var(--ink)" }}>
                  Val Kononoff
                </MonoLabel>
                <MonoLabel>Quality Engineering Consultant</MonoLabel>
              </div>
            </div>
          </div>
        </section>

        {/* § 04 FAQ */}
        <section
          id="faq"
          className="mx-auto"
          style={{ padding: "0 56px 120px", maxWidth: 1280 }}
        >
          <SectionRule label="Common questions" idx="04" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: 24,
              marginBottom: 64,
            }}
          >
            <div />
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 4.4vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                margin: 0,
                maxWidth: "22ch",
                fontWeight: 400,
                textWrap: "balance",
              }}
            >
              Things engineering leaders ask before we{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                start
              </em>
              .
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: 24,
            }}
          >
            <div />
            <dl style={{ margin: 0 }}>
              {FAQ_ITEMS.map((f, i) => (
                <div
                  key={f.q}
                  style={{
                    borderTop: i === 0 ? "1px solid var(--rule)" : "none",
                    borderBottom: "1px solid var(--rule)",
                    padding: "28px 0",
                    display: "grid",
                    gridTemplateColumns: "1fr 1.4fr",
                    gap: 48,
                    alignItems: "start",
                  }}
                  className="faq-row"
                >
                  <dt
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 22,
                      lineHeight: 1.25,
                      letterSpacing: "-0.015em",
                      color: "var(--ink)",
                      fontWeight: 400,
                      maxWidth: "22ch",
                    }}
                  >
                    {f.q}
                  </dt>
                  <dd
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-sans)",
                      fontSize: 16,
                      lineHeight: 1.65,
                      color: "var(--ink-soft)",
                      maxWidth: "60ch",
                    }}
                  >
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* § 05 Get in touch */}
        <section
          id="contact"
          style={{
            background: "var(--contact-slab)",
            color: "var(--contact-paper)",
            padding: "120px 56px",
            marginTop: 40,
          }}
        >
          <div className="mx-auto" style={{ maxWidth: 1280 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: 24,
                marginBottom: 56,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(245,242,236,0.5)",
                }}
              >
                § 05
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(245,242,236,0.85)",
                }}
              >
                Get in touch
              </span>
            </div>

            <div
              className="contact-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1.5fr 1fr",
                gap: 48,
                alignItems: "end",
              }}
            >
              <div />
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(48px, 6vw, 88px)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "var(--contact-paper)",
                  margin: 0,
                  fontWeight: 400,
                  textWrap: "pretty",
                  maxWidth: "14ch",
                }}
              >
                Tell me what&apos;s slowing your release pipeline.
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  paddingBottom: 8,
                }}
              >
                <a
                  href="https://cal.com/val-kononoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Schedule a 30-minute call (opens in a new tab)"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "20px 28px",
                    background: "var(--accent)",
                    color: "var(--contact-paper)",
                    textDecoration: "none",
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    fontWeight: 500,
                    border: "1px solid var(--accent)",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Schedule a 30-min call</span>
                  <span
                    aria-hidden
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      opacity: 0.85,
                    }}
                  >
                    ↗
                  </span>
                </a>
                <a
                  href="mailto:val.kono@proton.me"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "20px 28px",
                    border: "1px solid rgba(245,242,236,0.25)",
                    color: "var(--contact-paper)",
                    textDecoration: "none",
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    fontWeight: 500,
                    justifyContent: "space-between",
                  }}
                >
                  <span>val.kono@proton.me</span>
                  <span
                    aria-hidden
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      opacity: 0.6,
                    }}
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div
              className="contact-meta-grid"
              style={{
                marginTop: 96,
                paddingTop: 32,
                borderTop: "1px solid rgba(245,242,236,0.15)",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 32,
              }}
            >
              {CONTACT_META.map(([k, v]) => (
                <div key={k}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10.5,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(245,242,236,0.45)",
                      marginBottom: 8,
                    }}
                  >
                    {k}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      color: "var(--contact-paper)",
                      lineHeight: 1.4,
                    }}
                  >
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--rule)",
          padding: "32px 56px",
        }}
      >
        <div
          className="mx-auto flex justify-between items-center flex-wrap"
          style={{ maxWidth: 1280, gap: 24 }}
        >
          <MonoLabel>
            © {new Date().getFullYear()} Val Kononoff · Quality Engineering
            Consulting
          </MonoLabel>
          <div className="flex" style={{ gap: 28 }}>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <MonoLabel style={{ color: "var(--ink)" }}>LinkedIn</MonoLabel>
            </a>
            <a
              href="https://github.com/spacehaze"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <MonoLabel style={{ color: "var(--ink)" }}>GitHub</MonoLabel>
            </a>
            <a href="mailto:val.kono@proton.me" aria-label="Email Val">
              <MonoLabel style={{ color: "var(--ink)" }}>Email</MonoLabel>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
