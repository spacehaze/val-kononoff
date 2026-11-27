import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Highlights, Price, ProductGrid } from "@/components/product-card";
import {
  CATEGORIES,
  PRODUCTS,
  SITE,
  checkoutHref,
  ctaLabel,
  getProduct,
  productsIn,
} from "@/content/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/products/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.subtitle,
    alternates: { canonical: `/products/${p.slug}` },
  };
}

export default async function ProductPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const p = getProduct(slug);
  if (!p) notFound();
  const cat = CATEGORIES[p.category];
  const related = productsIn(p.category).filter((x) => x.slug !== p.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.title,
    description: p.subtitle,
    url: `${SITE.url}/products/${p.slug}`,
    brand: { "@type": "Person", name: SITE.name },
    offers: {
      "@type": "Offer",
      price: p.price,
      priceCurrency: SITE.currency,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <main id="main-content" className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Shop</Link>
        <span aria-hidden>/</span>
        <Link href={`/${p.category}`}>{cat.nav}</Link>
      </nav>

      <article className="product">
        <div className="product-main">
          {p.badge && <span className="badge badge-inline">{p.badge}</span>}
          <h1 className="product-title">{p.title}</h1>
          <p className="product-sub">{p.subtitle}</p>
          <Highlights items={p.highlights} />
          <div className="product-body">
            {p.description.map((d) => (
              <p key={d}>{d}</p>
            ))}
          </div>
        </div>

        <aside className="buy-box card card-featured">
          <Price product={p} large />
          <dl className="buy-meta">
            <div>
              <dt>Format</dt>
              <dd>{p.format}</dd>
            </div>
            <div>
              <dt>Delivery</dt>
              <dd>{cat.deliveryNote}</dd>
            </div>
          </dl>
          <a href={checkoutHref(p)} className="btn btn-primary btn-block">
            {ctaLabel(p)} — {p.priceFrom ? "get a quote" : "secure checkout"}
          </a>
          <p className="buy-fine">
            Questions before buying?{" "}
            <a href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Question: ${p.title}`)}`}>
              Email me
            </a>
            .
          </p>
        </aside>
      </article>

      {related.length > 0 && (
        <section className="shelf">
          <div className="shelf-head">
            <h2 className="shelf-title">More {cat.nav.toLowerCase()}</h2>
            <Link href={`/${p.category}`} className="shelf-link">
              See all
            </Link>
          </div>
          <ProductGrid products={related} />
        </section>
      )}
    </main>
  );
}
