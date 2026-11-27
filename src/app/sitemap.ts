import type { MetadataRoute } from "next";
import { PRODUCTS, SITE } from "@/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/courses", "/materials", "/consultations", "/about", "/contact"];
  return [
    ...pages.map((p) => ({
      url: `${SITE.url}${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1.0 : 0.8,
    })),
    ...PRODUCTS.map((p) => ({
      url: `${SITE.url}/products/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
