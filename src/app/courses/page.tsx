import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
import { CATEGORIES } from "@/content/products";

export const metadata: Metadata = {
  title: CATEGORIES.courses.nav,
  description: CATEGORIES.courses.lede,
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return <CategoryPage category="courses" />;
}
