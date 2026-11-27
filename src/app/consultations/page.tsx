import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
import { CATEGORIES } from "@/content/products";

export const metadata: Metadata = {
  title: CATEGORIES.consultations.nav,
  description: CATEGORIES.consultations.lede,
  alternates: { canonical: "/consultations" },
};

export default function ConsultationsPage() {
  return <CategoryPage category="consultations" />;
}
