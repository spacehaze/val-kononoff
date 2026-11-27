import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter, AskButton } from "@/components/site-footer";
import "./globals.css";

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://valkononoff.com";
const SITE_NAME = "Val Kononoff";
const TITLE =
  "Val Kononoff — QA & Test Automation Courses, Materials and Consultations";
const DESCRIPTION =
  "Online courses, PDF playbooks and 1:1 consultations on QA, test automation and AI-augmented testing by Val Kononoff — 12+ years in quality engineering. Toronto, worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · Val Kononoff" },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "QA course",
    "test automation course",
    "Playwright course",
    "AI testing course",
    "QA templates",
    "QA consultation",
    "QA consulting",
    "QA consultant",
    "quality engineering consultant",
    "test automation consultant",
    "AI in QA",
    "AI-augmented testing",
    "LLM test generation",
    "delivery acceleration",
    "QA transformation",
    "QA strategy",
    "QA audit",
    "test automation framework",
    "CI/CD testing",
    "release pipeline optimization",
    "QA team scaling",
    "engineering leadership",
    "Val Kononoff",
    "Toronto QA consultant",
    "remote QA consultant",
    "fractional QA lead",
  ],
  authors: [{ name: "Val Kononoff" }],
  creator: "Val Kononoff",
  publisher: "Val Kononoff",
  category: "education",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#F3F4F6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <AskButton />
        <Analytics />
      </body>
    </html>
  );
}
