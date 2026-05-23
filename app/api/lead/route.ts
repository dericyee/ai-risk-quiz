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

  console.log("[lead] received submission", {
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

  // Track integration results so we can return them to the client for debugging.
  const integrations: Record<string, unknown> = {};

  // ─────────────────────────────────────────────────────────────
  // AIRTABLE
  // ─────────────────────────────────────────────────────────────
  const hasKey = !!process.env.AIRTABLE_API_KEY;
  const hasBase = !!process.env.AIRTABLE_BASE_ID;
  const hasTable = !!process.env.AIRTABLE_TABLE;

  console.log("[lead] airtable env check:", {
    AIRTABLE_API_KEY: hasKey ? "set" : "missing",
    AIRTABLE_BASE_ID: hasBase
      ? process.env.AIRTABLE_BASE_ID?.startsWith("app")
        ? "set (valid format)"
        : "set (⚠ does not start with 'app' — likely wrong)"
      : "missing",
    AIRTABLE_TABLE: hasTable ? `set ("${process.env.AIRTABLE_TABLE}")` : "missing",
  });

  if (hasKey && hasBase && hasTable) {
    const baseId = process.env.AIRTABLE_BASE_ID!;
    const table = process.env.AIRTABLE_TABLE!;
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`;

    const fields = {
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
      // Sent as "Yes"/"No" text so it works with Single line text,
      // Long text, or Single select columns. If your Consent column
      // is a Checkbox, change this to `body.consent` (boolean).
      Consent: body.consent ? "Yes" : "No",
      "Submitted At": new Date().toISOString(),
    };

    console.log("[lead] airtable POST →", url);
    console.log("[lead] airtable fields →", fields);

    try {
      const airtableRes = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [{ fields }],
          // typecast=true tells Airtable to accept new single-select values etc.
          // rather than rejecting if the option doesn't already exist.
          typecast: true,
        }),
      });

      const responseText = await airtableRes.text();
      if (!airtableRes.ok) {
        console.error(
          "[lead] airtable FAILED",
          airtableRes.status,
          airtableRes.statusText,
          responseText
        );
        integrations.airtable = {
          ok: false,
          status: airtableRes.status,
          error: responseText,
        };
      } else {
        console.log("[lead] airtable OK", airtableRes.status);
        integrations.airtable = { ok: true, status: airtableRes.status };
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[lead] airtable threw:", msg);
      integrations.airtable = { ok: false, error: msg };
    }
  } else {
    integrations.airtable = {
      ok: false,
      error: "Missing one or more env vars (see server logs)",
    };
  }

  // ─────────────────────────────────────────────────────────────
  // Generic webhook (Zapier / Make / n8n / your backend) — optional
  // ─────────────────────────────────────────────────────────────
  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      const webhookRes = await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      integrations.webhook = { ok: webhookRes.ok, status: webhookRes.status };
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[lead] webhook failed:", msg);
      integrations.webhook = { ok: false, error: msg };
    }
  }

  // Always return 200 (we don't want to block the user's result page)
  // but include integration results so we can debug from DevTools.
  return NextResponse.json({ ok: true, integrations });
}
