import Link from "next/link";
import { ChatIcon } from "./icons";
import { SITE, questionHref } from "@/content/products";

export function AskButton() {
  return (
    <a href={questionHref()} className="ask-btn">
      <ChatIcon />
      <span>Ask a question</span>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">Val Kononoff</div>
          <p className="footer-note">
            QA &amp; quality engineering — courses, materials and
            consultations. Toronto · worldwide.
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <Link href="/courses">Courses</Link>
          <Link href="/materials">Materials</Link>
          <Link href="/consultations">Consultations</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={SITE.phoneHref}>{SITE.phone}</a>
        </div>
      </div>
      <div className="footer-legal">
        © {new Date().getFullYear()} Val Kononoff. Digital products are
        delivered by email after payment.
      </div>
    </footer>
  );
}
