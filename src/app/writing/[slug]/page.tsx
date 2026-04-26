import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticleSlugs } from "@/lib/articles";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const mod = await import(`@/content/writing/${slug}.mdx`);
    return {
      title: `${mod.metadata.title} — Val Kononoff`,
      description: mod.metadata.excerpt,
    };
  } catch {
    return { title: "Not Found — Val Kononoff" };
  }
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;

  let mod;
  try {
    mod = await import(`@/content/writing/${slug}.mdx`);
  } catch {
    notFound();
  }

  const { default: Article, metadata } = mod;

  return (
    <article>
      <header className="space-y-2 mb-10">
        <time className="font-mono text-sm text-muted block">
          {metadata.date}
        </time>
        <h1 className="text-3xl font-bold tracking-tight">{metadata.title}</h1>
      </header>
      <Article />
      <footer className="mt-16 pt-8 border-t border-rule">
        <Link
          href="/writing"
          className="font-mono text-sm text-muted hover:text-foreground transition-colors"
        >
          ← all writing
        </Link>
      </footer>
    </article>
  );
}
