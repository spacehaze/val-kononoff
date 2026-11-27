import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
import { CATEGORIES } from "@/content/products";

export const metadata: Metadata = {
  title: CATEGORIES.materials.nav,
  description: CATEGORIES.materials.lede,
  alternates: { canonical: "/materials" },
};

export default function MaterialsPage() {
  return <CategoryPage category="materials" />;
}
