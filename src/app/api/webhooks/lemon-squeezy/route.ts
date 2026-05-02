import { db, schema } from "@/db/client";
import { eq } from "drizzle-orm";
import { sendPurchaseEmail } from "@/lib/email";
import { createMagicLink } from "@/lib/auth";
import { verifyLemonSqueezySignature } from "@/lib/lemon-squeezy";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type WebhookBody = {
  meta: {
    event_name: string;
    custom_data?: Record<string, string>;
  };
  data: {
    id: string;
    type: string;
    attributes: Record<string, unknown>;
  };
};

export async function POST(request: Request) {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) {
    return Response.json({ error: "webhook secret not configured" }, { status: 500 });
  }

  const rawBody = await request.text();
  const sig = request.headers.get("x-signature");
  if (!verifyLemonSqueezySignature(rawBody, sig, secret)) {
    return Response.json({ error: "invalid signature" }, { status: 401 });
  }

  let body: WebhookBody;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: "invalid json" }, { status: 400 });
  }

  const event = body.meta?.event_name;
  const orderId = body.data?.id;
  const attrs = body.data?.attributes ?? {};

  if (!event || !orderId) {
    return Response.json({ error: "missing event or id" }, { status: 400 });
  }

  if (event === "order_created") {
    const email = String(attrs["user_email"] ?? "").toLowerCase().trim();
    const productId = String(
      (attrs["first_order_item"] as Record<string, unknown> | undefined)?.[
        "product_id"
      ] ?? attrs["product_id"] ?? ""
    );
    const productName = String(
      (attrs["first_order_item"] as Record<string, unknown> | undefined)?.[
        "product_name"
      ] ?? attrs["product_name"] ?? "your purchase"
    );

    if (!email || !productId) {
      return Response.json({ error: "missing email or product_id" }, { status: 400 });
    }

    // Idempotent insert keyed on order_id.
    try {
      await db.insert(schema.purchases).values({
        email,
        productId,
        productName,
        orderId,
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (!/duplicate|unique/i.test(msg)) throw err;
      // Already processed — ack.
      return Response.json({ ok: true, deduped: true });
    }

    const siteUrl = process.env.SITE_URL ?? "https://valkononoff.com";
    const loginUrl = await createMagicLink({ email, siteUrl });
    await sendPurchaseEmail({ to: email, productName, loginUrl });

    return Response.json({ ok: true });
  }

  if (event === "order_refunded") {
    await db
      .update(schema.purchases)
      .set({ refundedAt: new Date() })
      .where(eq(schema.purchases.orderId, orderId));
    return Response.json({ ok: true });
  }

  // Unhandled event — ack so LS doesn't retry forever.
  return Response.json({ ok: true, ignored: event });
}
