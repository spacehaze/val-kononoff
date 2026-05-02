import type { Metadata } from "next";
import { cookies } from "next/headers";
import { eq, isNull, and } from "drizzle-orm";
import { db, schema } from "@/db/client";
import { readSessionJWT, SESSION_COOKIE_NAME } from "@/lib/auth";
import { LibrarySignIn } from "./sign-in";

export const metadata: Metadata = {
  title: "Library — Val Kononoff",
};

export const dynamic = "force-dynamic";

export default async function LibraryPage() {
  const jar = await cookies();
  const email = await readSessionJWT(jar.get(SESSION_COOKIE_NAME)?.value);

  if (!email) {
    return (
      <article className="space-y-6 max-w-md">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Library</h1>
          <p className="text-foreground/80 text-sm">
            Enter the email you used at checkout. We&apos;ll send a sign-in
            link.
          </p>
        </header>
        <LibrarySignIn />
      </article>
    );
  }

  const purchases = await db
    .select()
    .from(schema.purchases)
    .where(
      and(eq(schema.purchases.email, email), isNull(schema.purchases.refundedAt))
    );

  return (
    <article className="space-y-8">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Library</h1>
        <p className="font-mono text-xs text-muted">{email}</p>
      </header>
      {purchases.length === 0 ? (
        <p className="text-foreground/80">No active purchases on this email.</p>
      ) : (
        <ul className="space-y-4">
          {purchases.map((p) => (
            <li
              key={p.id}
              className="border-b border-rule pb-4 last:border-b-0"
            >
              <h2 className="text-lg font-semibold">{p.productName}</h2>
              <p className="font-mono text-xs text-muted">
                Order {p.orderId} · {new Date(p.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
