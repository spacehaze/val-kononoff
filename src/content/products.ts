/**
 * Store catalog — edit this file to add, remove or re-price products.
 *
 * Payment / booking:
 *   - Set `checkoutUrl` to a Stripe Payment Link, Gumroad, Lemon Squeezy,
 *     Thinkific, etc. for courses and digital materials.
 *   - Set `checkoutUrl` to a Calendly / Cal.com / Stripe link for
 *     consultations (or set BOOKING_URL below for the general booking CTA).
 *   - While a URL is empty, the button falls back to an email order
 *     (mailto: with the product name pre-filled), so nothing is broken.
 *
 * Promo badge: set `badge` + `compareAtPrice` on any product to show a
 * sale pill and a struck-through old price. Remove both to end the promo.
 */

export const SITE = {
  name: "Val Kononoff",
  url: "https://valkononoff.com",
  email: "val.kono@proton.me",
  phone: "+1 (416) 877-8457",
  phoneHref: "tel:+14168778457",
  /** General "Book a consultation" link (Calendly, Cal.com…). Empty = email. */
  bookingUrl: "",
  /** Floating "Ask a question" button target (Telegram, WhatsApp…). Empty = email. */
  questionUrl: "",
  socials: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/spacehaze",
  },
  currency: "USD",
};

export type Category = "courses" | "materials" | "consultations";

export const CATEGORIES: Record<
  Category,
  { title: string; nav: string; lede: string; deliveryNote: string }
> = {
  courses: {
    title: "Online courses on QA & test automation",
    nav: "Courses",
    lede: "Self-paced video courses with exercises, code and templates you keep. Lifetime access, learn at your own speed.",
    deliveryNote: "Instant access after payment",
  },
  materials: {
    title: "Playbooks, templates & guides",
    nav: "Materials",
    lede: "Ready-to-use documents from 12+ years in quality engineering. Each one is a separate PDF or template pack, delivered to your email right after payment.",
    deliveryNote: "Delivered to your email after payment",
  },
  consultations: {
    title: "Consultations & mentoring",
    nav: "Consultations",
    lede: "Book a 1:1 call, a QA audit or a team workshop. Pick a slot online — we meet over video, anywhere in the world.",
    deliveryNote: "Book online · video call",
  },
};

export type Product = {
  slug: string;
  category: Category;
  title: string;
  subtitle: string;
  /** Short bullet points shown on the card and the product page. */
  highlights: string[];
  /** Longer description paragraphs for the product page. */
  description: string[];
  /** Price in whole currency units. Use `priceFrom` for "from $X". */
  price: number;
  priceFrom?: boolean;
  compareAtPrice?: number;
  /** e.g. "60 min", "6 modules · 8 h video", "PDF · 42 pages" */
  format: string;
  badge?: string;
  featured?: boolean;
  checkoutUrl?: string;
};

export const PRODUCTS: Product[] = [
  // ─── Courses ────────────────────────────────────────────────
  {
    slug: "ai-augmented-testing",
    category: "courses",
    title: "AI-Augmented Testing: from manual QA to LLM-powered workflows",
    subtitle:
      "How to use AI to write, maintain and triage tests — without losing control of your coverage",
    highlights: [
      "7 modules: from prompt basics to AI in your CI pipeline",
      "Generating test cases and automated specs with LLMs",
      "Automated flaky-test triage and failure analysis",
      "Ready prompt library + review checklist",
    ],
    description: [
      "This is the course I wish my teams had when we started bringing language models into QA. It covers what AI reliably speeds up today, where it fails quietly, and how to keep humans in charge of coverage decisions.",
      "You'll go from writing your first useful prompt for test design to wiring AI-assisted authoring and triage into a real CI pipeline — with the guardrails that keep it trustworthy.",
    ],
    price: 119,
    compareAtPrice: 299,
    format: "7 modules · ~9 h video · lifetime access",
    badge: "Black Friday −60%",
    featured: true,
  },
  {
    slug: "playwright-automation-bootcamp",
    category: "courses",
    title: "Playwright automation bootcamp",
    subtitle:
      "Build a maintainable end-to-end test framework from zero to CI",
    highlights: [
      "Project structure, fixtures and page objects that scale",
      "Stable selectors and how to kill flaky tests",
      "Running in parallel in GitHub Actions / GitLab CI",
      "Full source code of the course framework",
    ],
    description: [
      "A practical, code-along course for manual testers moving into automation and for developers who own their own tests.",
      "By the end you'll have a working framework in your own repository, running in CI, that you understand line by line.",
    ],
    price: 199,
    format: "10 modules · ~12 h video · lifetime access",
  },
  {
    slug: "qa-leadership",
    category: "courses",
    title: "QA leadership: building a quality engineering team",
    subtitle:
      "For new QA leads and engineering managers who own quality",
    highlights: [
      "Hiring, leveling and onboarding QA engineers",
      "Metrics that matter: lead time, escaped defects, confidence",
      "Rolling out standards across multiple scrum teams",
    ],
    description: [
      "Based on scaling QA practices across 8 scrum teams. Covers the people, process and metrics side of running quality — the part nobody teaches.",
    ],
    price: 249,
    format: "6 modules · ~6 h video · templates included",
  },

  // ─── Materials (PDF / templates) ────────────────────────────
  {
    slug: "qa-strategy-playbook",
    category: "materials",
    title: "QA strategy playbook",
    subtitle:
      "A step-by-step guide to auditing and rebuilding your team's QA process",
    highlights: [
      "Audit checklist with 60+ questions",
      "Roadmap and metrics templates",
      "Example strategy documents from real engagements",
    ],
    description: [
      "The same framework I use in paid QA audits, packaged so you can run it yourself.",
    ],
    price: 49,
    format: "PDF · 48 pages + Notion templates",
  },
  {
    slug: "test-documentation-templates",
    category: "materials",
    title: "Test documentation template pack",
    subtitle: "Test plan, test cases, bug report and release checklist",
    highlights: [
      "Test plan and test strategy templates",
      "Bug report template that developers actually read",
      "Release readiness checklist",
    ],
    description: [
      "Stop writing documents from a blank page. Copy, fill in, ship.",
    ],
    price: 19,
    format: "Google Docs / Notion / PDF",
  },
  {
    slug: "qa-interview-kit",
    category: "materials",
    title: "QA engineer interview kit",
    subtitle: "Prepare for — or run — QA and SDET interviews",
    highlights: [
      "120 real interview questions with model answers",
      "Take-home assignments with evaluation rubrics",
      "Salary negotiation notes",
    ],
    description: [
      "Useful on both sides of the table: for candidates preparing for interviews, and for leads building a fair hiring process.",
    ],
    price: 29,
    format: "PDF · 64 pages",
  },
  {
    slug: "ai-prompt-library-for-qa",
    category: "materials",
    title: "AI prompt library for testers",
    subtitle: "Tested prompts for test design, data generation and triage",
    highlights: [
      "80+ prompts grouped by task",
      "Examples of good and bad output",
      "Works with ChatGPT, Claude, Copilot",
    ],
    description: [
      "A practical companion to the AI-Augmented Testing course — or a quick start on its own.",
    ],
    price: 15,
    compareAtPrice: 29,
    badge: "Black Friday −50%",
    format: "PDF + Notion database",
  },

  // ─── Consultations ──────────────────────────────────────────
  {
    slug: "strategy-call",
    category: "consultations",
    title: "1:1 QA strategy call",
    subtitle: "One focused hour on your team's biggest quality problem",
    highlights: [
      "Short questionnaire before the call",
      "60-minute video call",
      "Written summary with next steps",
    ],
    description: [
      "Bring a concrete problem — slow releases, flaky automation, hiring, AI adoption — and leave with a clear plan.",
    ],
    price: 250,
    format: "60 min · video call",
  },
  {
    slug: "career-mentoring",
    category: "consultations",
    title: "Career mentoring session",
    subtitle: "For QA engineers moving into automation, SDET or lead roles",
    highlights: [
      "CV and LinkedIn review",
      "Growth plan for the next 6–12 months",
      "Mock interview on request",
    ],
    description: [
      "A practical session for individual engineers who want to grow faster.",
    ],
    price: 120,
    format: "45 min · video call",
  },
  {
    slug: "qa-audit",
    category: "consultations",
    title: "QA process audit",
    subtitle:
      "A two-week deep-dive into your QA process, automation and release pipeline",
    highlights: [
      "Interviews with the team and review of your pipeline",
      "Prioritized roadmap with quick wins",
      "Final presentation for engineering leadership",
    ],
    description: [
      "For engineering leaders who need an outside view on why delivery is slow and what to fix first.",
    ],
    price: 4800,
    priceFrom: true,
    format: "2 weeks · remote",
  },
  {
    slug: "team-workshop",
    category: "consultations",
    title: "Team workshop",
    subtitle: "Hands-on training for your QA and dev team",
    highlights: [
      "Topics: AI in testing, Playwright, QA strategy",
      "Tailored to your codebase and tools",
      "Recording and materials for the team",
    ],
    description: [
      "A half-day or full-day remote workshop, built around your team's real code and problems.",
    ],
    price: 2500,
    priceFrom: true,
    format: "Half or full day · remote",
  },
];

export function productsIn(category: Category) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: SITE.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function mailto(subject: string) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}

/** Where the buy / book button goes. */
export function checkoutHref(p: Product) {
  if (p.checkoutUrl) return p.checkoutUrl;
  return mailto(
    p.category === "consultations" ? `Booking: ${p.title}` : `Order: ${p.title}`,
  );
}

export function ctaLabel(p: Product) {
  if (p.category === "consultations") return "Book";
  if (p.category === "courses") return "Enroll";
  return "Buy";
}

export function bookingHref() {
  return SITE.bookingUrl || mailto("Consultation request");
}

export function questionHref() {
  return SITE.questionUrl || mailto("Question");
}
