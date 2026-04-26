import fs from "node:fs";
import path from "node:path";

export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

const writingDir = path.join(process.cwd(), "src", "content", "writing");

export function getArticleSlugs(): string[] {
  return fs
    .readdirSync(writingDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getArticles(): Promise<ArticleMeta[]> {
  const slugs = getArticleSlugs();
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/content/writing/${slug}.mdx`);
      return { slug, ...mod.metadata } as ArticleMeta;
    }),
  );
  return articles.sort((a, b) => b.date.localeCompare(a.date));
}
