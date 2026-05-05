import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeScript } from "@/components/theme-script";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
  "Val Kononoff — QA & Quality Engineering Consultant · Toronto / Remote";
const DESCRIPTION =
  "Independent QA and Quality Engineering consultant for engineering leaders. Strategic QA transformation, test automation framework design, AI-augmented testing workflows, and team enablement. Based in Toronto, working with teams worldwide. 12+ years across 8+ scrum teams; 40% faster time to market on average.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · Val Kononoff" },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
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
  category: "consulting",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F2EC" },
    { media: "(prefers-color-scheme: dark)", color: "#15151A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
