import { NextResponse } from "next/server";

interface LeadPayload {
  name: string;
  email: string;
  whatsapp?: string;
  role?: string;
  country?: string;
  income?: string;
  painPoint?: string;
  consent: boolean;
  field: string;
  score: number;
  level: string;
  answers: Record<string, number>;
}

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.email || !body.email.includes("@") || !body.name || !body.consent) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  console.log("[lead]", {
    name: body.name,
    email: body.email,
    level: body.level,
    score: body.score,
    field: body.field,
    country: body.country,
    income: body.income,
    painPoint: body.painPoint,
    role: body.role,
    whatsapp: body.whatsapp,
  });

  // ─────────────────────────────────────────────────────────────
  // AIRTABLE — send the lead to your Airtable base
  // Set AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE in .env.local
  // ─────────────────────────────────────────────────────────────
  if (
    process.env.AIRTABLE_API_KEY &&
    process.env.AIRTABLE_BASE_ID &&
    process.env.AIRTABLE_TABLE
  ) {
    try {
      const airtableRes = await fetch(
        `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(
          process.env.AIRTABLE_TABLE
        )}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Name: body.name,
                  Email: body.email,
                  Phone: body.whatsapp || "",
                  Role: body.role || "",
                  Country: body.country || "",
                  Income: body.income || "",
                  "Pain Point": body.painPoint || "",
                  Field: body.field,
                  Score: body.score,
                  "Risk Level": body.level,
                  Consent: body.consent,
                  "Submitted At": new Date().toISOString(),
                },
              },
            ],
          }),
        }
      );
      if (!airtableRes.ok) {
        const errText = await airtableRes.text();
        console.error("[lead] airtable failed:", airtableRes.status, errText);
      }
    } catch (err) {
      console.error("[lead] airtable error:", err);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // INTEGRATION POINTS — uncomment one and set env vars to go live
  // ─────────────────────────────────────────────────────────────

  // OPTION 1 — Resend (recommended for transactional email)
  // 1. npm install resend
  // 2. Set RESEND_API_KEY in .env.local
  // 3. Uncomment below:
  //
  // const { Resend } = await import("resend");
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Sigma School <hello@sigmaschool.co>",
  //   to: body.email,
  //   subject: `Your AI Exposure Result: ${body.level}`,
  //   html: `<p>Hi ${body.name},</p><p>Your AI exposure is <strong>${body.level}</strong> (${body.score}/36).</p>...`,
  // });

  // OPTION 2 — ConvertKit / Kit
  // Set KIT_API_KEY and KIT_FORM_ID in .env.local
  //
  // await fetch(`https://api.convertkit.com/v3/forms/${process.env.KIT_FORM_ID}/subscribe`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     api_key: process.env.KIT_API_KEY,
  //     email: body.email,
  //     first_name: body.name,
  //     fields: { ai_exposure_level: body.level, ai_exposure_score: body.score },
  //   }),
  // });

  // OPTION 3 — Generic webhook (Zapier, Make, n8n, your own backend)
  // Set LEAD_WEBHOOK_URL in .env.local
  //
  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error("[lead] webhook failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
