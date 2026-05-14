import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const RECIPIENT = "bookvsflow@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

interface LeadData {
  salonName?: string;
  ownerName?: string;
  phone?: string;
  email?: string;
  telegram?: string;
  city?: string;
  businessType?: string;
  numberOfStaff?: string;
  numberOfServices?: string;
  currentBookingSystem?: string;
  useOnlineBooking?: string;
  needOnlinePayments?: boolean;
  needFinancialReports?: boolean;
  preferredContact?: string;
  whyNeedIt?: string;
  businessPurpose?: string;
  biggestChallenge?: string;
  monthlyClients?: string;
  additionalComments?: string;
}

const LABELS: Record<keyof LeadData, string> = {
  salonName: "Salon name",
  ownerName: "Owner name",
  phone: "Phone",
  email: "Email",
  telegram: "Telegram",
  city: "City",
  businessType: "Business type",
  numberOfStaff: "Number of staff",
  numberOfServices: "Number of services",
  currentBookingSystem: "Current booking system",
  useOnlineBooking: "Uses online booking",
  needOnlinePayments: "Needs online payments",
  needFinancialReports: "Needs financial reports",
  preferredContact: "Preferred contact",
  whyNeedIt: "Why they need it",
  businessPurpose: "Business purpose",
  biggestChallenge: "Biggest challenge",
  monthlyClients: "Monthly clients",
  additionalComments: "Additional comments",
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatValue(v: unknown): string {
  if (v === true) return "Yes";
  if (v === false) return "No";
  if (v === null || v === undefined || v === "") return "—";
  return String(v);
}

function buildHtml(data: LeadData): string {
  const rows = (Object.keys(LABELS) as (keyof LeadData)[])
    .map((key) => {
      const label = LABELS[key];
      const value = formatValue(data[key]);
      return `<tr>
        <td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;vertical-align:top;width:220px;">${escapeHtml(label)}</td>
        <td style="padding:8px 12px;border:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(value)}</td>
      </tr>`;
    })
    .join("");
  return `<!doctype html><html><body style="font-family:Arial,sans-serif;color:#111827;">
    <h2 style="margin:0 0 16px;">New BookVSFlow Lead</h2>
    <p style="margin:0 0 16px;color:#6b7280;">Submitted ${new Date().toLocaleString()}</p>
    <table style="border-collapse:collapse;width:100%;max-width:720px;">${rows}</table>
  </body></html>`;
}

function buildPlain(data: LeadData): string {
  return (Object.keys(LABELS) as (keyof LeadData)[])
    .map((key) => `${LABELS[key]}: ${formatValue(data[key])}`)
    .join("\n");
}

function toBase64Url(s: string): string {
  // Use Buffer (Node compat) for UTF-8 safe encoding
  const b64 = Buffer.from(s, "utf8").toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function buildRawEmail(opts: {
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}): string {
  const boundary = `bvf_${Date.now().toString(36)}`;
  const headers = [
    `To: ${opts.to}`,
    opts.replyTo ? `Reply-To: ${opts.replyTo}` : null,
    `Subject: =?UTF-8?B?${Buffer.from(opts.subject, "utf8").toString("base64")}?=`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
  ].filter(Boolean) as string[];

  const body = [
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    opts.text,
    "",
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    opts.html,
    "",
    `--${boundary}--`,
    "",
  ].join("\r\n");

  return toBase64Url(headers.join("\r\n") + "\r\n\r\n" + body);
}

async function sendViaGmail(data: LeadData): Promise<void> {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const gmailKey = process.env.GOOGLE_MAIL_API_KEY;
  if (!lovableKey) throw new Error("LOVABLE_API_KEY is not configured");
  if (!gmailKey) throw new Error("GOOGLE_MAIL_API_KEY is not configured");

  const subject = `New Lead: ${data.salonName ?? "Unknown salon"} (${data.ownerName ?? "—"})`;
  const raw = buildRawEmail({
    to: RECIPIENT,
    replyTo: data.email,
    subject,
    html: buildHtml(data),
    text: buildPlain(data),
  });

  const res = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": gmailKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ raw }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Gmail send failed [${res.status}]: ${body}`);
  }
}

export const Route = createFileRoute("/api/lead")({
  server: {
    handlers: {
      GET: async () =>
        Response.json({
          status: "ok",
          endpoint: "/api/lead",
          methods: ["POST"],
          description: "Salon lead submission endpoint - emails to bookvsflow@gmail.com",
        }),
      POST: async ({ request }) => {
        try {
          const data = (await request.json()) as LeadData;
          const required: (keyof LeadData)[] = [
            "salonName",
            "ownerName",
            "phone",
            "email",
            "city",
            "businessType",
            "numberOfStaff",
            "numberOfServices",
            "preferredContact",
          ];
          for (const f of required) {
            if (!data[f]) {
              return Response.json(
                { error: `Missing required field: ${f}` },
                { status: 400 },
              );
            }
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email!)) {
            return Response.json({ error: "Invalid email format" }, { status: 400 });
          }

          await sendViaGmail(data);

          return Response.json({
            success: true,
            message: "Lead emailed successfully",
          });
        } catch (e) {
          console.error("Lead error", e);
          return Response.json(
            { error: e instanceof Error ? e.message : "Internal server error" },
            { status: 500 },
          );
        }
      },
    },
  },
});
