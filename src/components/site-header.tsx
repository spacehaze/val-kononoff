import Link from "next/link";
import { TabNav } from "./tab-nav";
import { MailIcon, CalendarIcon, LinkedInIcon, GitHubIcon } from "./icons";
import { SITE, bookingHref } from "@/content/products";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="utility-inner">
          <a href={`mailto:${SITE.email}`} className="icon-link" aria-label="Email">
            <MailIcon />
          </a>
          <a href={bookingHref()} className="utility-cta">
            <CalendarIcon />
            <span>Book a consultation</span>
          </a>
          <span className="utility-divider" aria-hidden />
          <a
            href={SITE.socials.linkedin}
            className="icon-link"
            aria-label="LinkedIn (opens in a new tab)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href={SITE.socials.github}
            className="icon-link"
            aria-label="GitHub (opens in a new tab)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>

      <div className="brand-bar">
        <Link href="/" className="wordmark">
          Val Kononoff
        </Link>
        <TabNav />
      </div>
    </header>
  );
}
