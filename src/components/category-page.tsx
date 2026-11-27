import { ProductGrid } from "./product-card";
import { CATEGORIES, type Category, productsIn } from "@/content/products";

export function PageHero({ title, lede }: { title: string; lede: string }) {
  return (
    <section className="hero">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-lede">{lede}</p>
    </section>
  );
}

export function CategoryPage({ category }: { category: Category }) {
  const c = CATEGORIES[category];
  return (
    <main id="main-content" className="page">
      <PageHero title={c.title} lede={c.lede} />
      <ProductGrid products={productsIn(category)} />
    </main>
  );
}
