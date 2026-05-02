import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Verify the X-Signature header from a Lemon Squeezy webhook against the raw
 * body and the webhook secret. Returns true on match, false otherwise.
 *
 * LS docs: https://docs.lemonsqueezy.com/help/webhooks
 */
export function verifyLemonSqueezySignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string
): boolean {
  if (!signatureHeader) return false;
  const computed = createHmac("sha256", secret).update(rawBody).digest("hex");
  const a = Buffer.from(computed, "hex");
  const b = Buffer.from(signatureHeader, "hex");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export type LemonSqueezyEvent =
  | "order_created"
  | "order_refunded"
  | "subscription_created"
  | "subscription_updated"
  | "subscription_cancelled"
  | "subscription_resumed"
  | "subscription_expired"
  | "subscription_paused"
  | "subscription_unpaused"
  | "subscription_payment_success"
  | "subscription_payment_failed"
  | "subscription_payment_recovered"
  | "subscription_payment_refunded"
  | "license_key_created"
  | "license_key_updated";
