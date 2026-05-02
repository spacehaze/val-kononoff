import { db, schema } from "@/db/client";
import { eq } from "drizzle-orm";
import { createMagicLink } from "@/lib/auth";
import { sendMagicLinkEmail } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: string };
    email = (body.email ?? "").toLowerCase().trim();
  } catch {
    return Response.json({ error: "invalid json" }, { status: 400 });
  }

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return Response.json({ error: "invalid email" }, { status: 400 });
  }

  // Only send a link if this email has at least one purchase. Don't reveal
  // which is which to the caller — both branches return the same response.
  const rows = await db
    .select({ email: schema.purchases.email })
    .from(schema.purchases)
    .where(eq(schema.purchases.email, email))
    .limit(1);

  if (rows.length > 0) {
    const siteUrl = process.env.SITE_URL ?? new URL(request.url).origin;
    const url = await createMagicLink({ email, siteUrl });
    await sendMagicLinkEmail({ to: email, url });
  }

  return Response.json({ ok: true });
}
