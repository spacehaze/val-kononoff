import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Val Kononoff",
  description:
    "Personal site of Val Kononoff — work, music, writing, and other things worth keeping in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteNav />
        <main
          id="main-content"
          className="flex-1 mx-auto w-full max-w-2xl px-6 py-16"
        >
          {children}
        </main>
        <footer className="mx-auto w-full max-w-2xl px-6 py-10 text-xs font-mono text-muted border-t border-rule">
          © 2026 Val Kononoff
        </footer>
      </body>
    </html>
  );
}
