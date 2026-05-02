import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const from = process.env.EMAIL_FROM ?? "onboarding@resend.dev";

let client: Resend | null = null;
function getClient(): Resend {
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");
  if (!client) client = new Resend(apiKey);
  return client;
}

export async function sendMagicLinkEmail(opts: {
  to: string;
  url: string;
}): Promise<void> {
  const { to, url } = opts;
  await getClient().emails.send({
    from,
    to,
    subject: "Your sign-in link for valkononoff.com",
    text: `Click the link below to sign in. It expires in 15 minutes.\n\n${url}\n\nIf you didn't request this, you can ignore this email.`,
    html: `<p>Click the link below to sign in. It expires in 15 minutes.</p>
<p><a href="${url}">${url}</a></p>
<p style="color:#888;font-size:12px">If you didn't request this, you can ignore this email.</p>`,
  });
}

export async function sendPurchaseEmail(opts: {
  to: string;
  productName: string;
  loginUrl: string;
}): Promise<void> {
  const { to, productName, loginUrl } = opts;
  await getClient().emails.send({
    from,
    to,
    subject: `Your ${productName} access`,
    text: `Thanks for your purchase of ${productName}!\n\nClick the link below to access it. The link expires in 15 minutes; you can request a new one anytime from valkononoff.com/library.\n\n${loginUrl}`,
    html: `<p>Thanks for your purchase of <strong>${productName}</strong>!</p>
<p>Click the link below to access it. The link expires in 15 minutes; you can request a new one anytime from <a href="https://valkononoff.com/library">valkononoff.com/library</a>.</p>
<p><a href="${loginUrl}">${loginUrl}</a></p>`,
  });
}
