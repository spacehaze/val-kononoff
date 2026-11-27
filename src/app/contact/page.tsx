import type { Metadata } from "next";
import { PageHero } from "@/components/category-page";
import { EmailRow } from "@/components/contact-email-button";
import { SITE, bookingHref } from "@/content/products";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about a course, an order or a consultation — get in touch with Val Kononoff.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="page">
      <PageHero
        title="Get in touch"
        lede="Questions about a course, an order, team pricing or a consultation — I usually reply within one business day."
      />
      <section className="contact-card">
        <EmailRow />
        <a href={SITE.phoneHref} className="contact-phone">
          {SITE.phone}
        </a>
        <a href={bookingHref()} className="btn btn-primary btn-block">
          Book a consultation
        </a>
      </section>
    </main>
  );
}
