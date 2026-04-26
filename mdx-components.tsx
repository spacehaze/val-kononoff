import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold tracking-tight mt-12 mb-4">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold tracking-tight mt-10 mb-3">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold mt-8 mb-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="leading-relaxed my-4 text-foreground/90">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent underline underline-offset-2 hover:no-underline"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="my-4 ml-5 list-disc space-y-1 text-foreground/90">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-5 list-decimal space-y-1 text-foreground/90">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 pl-4 border-l-2 border-rule italic text-muted">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="font-mono text-sm bg-foreground/5 px-1.5 py-0.5 rounded">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 p-4 bg-foreground/5 rounded font-mono text-sm overflow-x-auto">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-8 border-rule" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
