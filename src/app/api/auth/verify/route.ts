import {
  consumeMagicLink,
  createSessionJWT,
  SESSION_COOKIE_NAME,
} from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SESSION_TTL_SECONDS = 60 * 60 * 24 * 60; // 60 days

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") ?? "";

  const email = await consumeMagicLink(token);
  if (!email) {
    return new Response(
      "<h1>Link invalid or expired</h1><p>Request a new one from <a href=\"/library\">/library</a>.</p>",
      { status: 400, headers: { "content-type": "text/html" } }
    );
  }

  const jwt = await createSessionJWT(email);
  const cookie = [
    `${SESSION_COOKIE_NAME}=${jwt}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${SESSION_TTL_SECONDS}`,
    process.env.NODE_ENV === "production" ? "Secure" : "",
  ]
    .filter(Boolean)
    .join("; ");

  return new Response(null, {
    status: 302,
    headers: { Location: "/library", "Set-Cookie": cookie },
  });
}
