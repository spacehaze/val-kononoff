import { SignJWT, jwtVerify } from "jose";
import { randomBytes } from "node:crypto";
import { eq } from "drizzle-orm";
import { db, schema } from "@/db/client";

const SESSION_COOKIE = "vk_session";
const MAGIC_LINK_TTL_MIN = 15;
const SESSION_TTL_DAYS = 60;

function getSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET is not set");
  return new TextEncoder().encode(secret);
}

export const SESSION_COOKIE_NAME = SESSION_COOKIE;

/**
 * Create a one-time magic-link token, store it in the DB, and return the
 * absolute URL the user should click. Token is opaque random bytes.
 */
export async function createMagicLink(opts: {
  email: string;
  siteUrl: string;
}): Promise<string> {
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + MAGIC_LINK_TTL_MIN * 60_000);
  await db.insert(schema.magicLinks).values({
    token,
    email: opts.email.toLowerCase().trim(),
    expiresAt,
  });
  const url = new URL("/api/auth/verify", opts.siteUrl);
  url.searchParams.set("token", token);
  return url.toString();
}

/**
 * Consume a magic-link token. Returns the email on success, or null if the
 * token is missing, expired, or already used.
 */
export async function consumeMagicLink(token: string): Promise<string | null> {
  if (!token) return null;
  const rows = await db
    .select()
    .from(schema.magicLinks)
    .where(eq(schema.magicLinks.token, token))
    .limit(1);
  const link = rows[0];
  if (!link) return null;
  if (link.consumedAt) return null;
  if (link.expiresAt.getTime() < Date.now()) return null;
  await db
    .update(schema.magicLinks)
    .set({ consumedAt: new Date() })
    .where(eq(schema.magicLinks.token, token));
  return link.email;
}

/**
 * Build a signed session JWT containing the user's email. Pair with
 * `Set-Cookie: vk_session=<jwt>; HttpOnly; Secure; SameSite=Lax`.
 */
export async function createSessionJWT(email: string): Promise<string> {
  return await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL_DAYS}d`)
    .sign(getSecret());
}

/**
 * Verify a session JWT. Returns the email payload or null if invalid/expired.
 */
export async function readSessionJWT(jwt: string | undefined): Promise<string | null> {
  if (!jwt) return null;
  try {
    const { payload } = await jwtVerify(jwt, getSecret());
    if (typeof payload.email !== "string") return null;
    return payload.email;
  } catch {
    return null;
  }
}
