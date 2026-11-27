import Link from "next/link";
import { CheckIcon } from "./icons";
import {
  type Product,
  checkoutHref,
  ctaLabel,
  formatPrice,
} from "@/content/products";

export function Price({ product, large }: { product: Product; large?: boolean }) {
  return (
    <div className={large ? "price price-lg" : "price"}>
      <span className="price-now">
        {product.priceFrom && <span className="price-from">from </span>}
        {formatPrice(product.price)}
      </span>
      {product.compareAtPrice && (
        <s className="price-was" aria-label={`was ${formatPrice(product.compareAtPrice)}`}>
          {formatPrice(product.compareAtPrice)}
        </s>
      )}
    </div>
  );
}

export function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((h) => (
        <li key={h}>
          <CheckIcon className="check" />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.slug}`;
  return (
    <article
      className={`card${product.featured || product.badge ? " card-featured" : ""}`}
    >
      {product.badge && <span className="badge">{product.badge}</span>}
      <h3 className="card-title">
        <Link href={href}>{product.title}</Link>
      </h3>
      <p className="card-sub">{product.subtitle}</p>
      <Highlights items={product.highlights} />
      <div className="card-foot">
        <div>
          <Price product={product} />
          <div className="card-format">{product.format}</div>
        </div>
        <div className="card-actions">
          <Link href={href} className="btn btn-ghost">
            Details
          </Link>
          <a href={checkoutHref(product)} className="btn btn-primary">
            {ctaLabel(product)}
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
