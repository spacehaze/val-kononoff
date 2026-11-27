import Link from "next/link";
import { PageHero } from "@/components/category-page";
import { ProductCard, ProductGrid } from "@/components/product-card";
import {
  CATEGORIES,
  PRODUCTS,
  SITE,
  type Category,
  formatPrice,
  productsIn,
} from "@/content/products";

const ORDER: Category[] = ["courses", "materials", "consultations"];

const storeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${SITE.name} — store`,
  itemListElement: PRODUCTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.title,
      description: p.subtitle,
      url: `${SITE.url}/products/${p.slug}`,
      offers: {
        "@type": "Offer",
        price: p.price,
        priceCurrency: SITE.currency,
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

export default function Shop() {
  const featured = PRODUCTS.filter((p) => p.featured);
  return (
    <main id="main-content" className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }}
      />
      <PageHero
        title="Courses, materials and consultations on QA & test automation"
        lede="Learn modern quality engineering — AI-augmented testing, automation and QA leadership — from 12+ years of practice. Buy a course, download a playbook or book a call."
      />

      {featured.length > 0 && (
        <div className="featured">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}

      {ORDER.map((cat) => {
        const items = productsIn(cat).filter((p) => !p.featured);
        if (items.length === 0) return null;
        const c = CATEGORIES[cat];
        const from = Math.min(...productsIn(cat).map((p) => p.price));
        return (
          <section key={cat} className="shelf" aria-labelledby={`shelf-${cat}`}>
            <div className="shelf-head">
              <div>
                <h2 id={`shelf-${cat}`} className="shelf-title">
                  {c.nav}
                </h2>
                <p className="shelf-note">
                  {c.deliveryNote} · from {formatPrice(from)}
                </p>
              </div>
              <Link href={`/${cat}`} className="shelf-link">
                See all
              </Link>
            </div>
            <ProductGrid products={items} />
          </section>
        );
      })}
    </main>
  );
}
