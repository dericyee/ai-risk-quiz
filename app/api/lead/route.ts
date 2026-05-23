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

  if (!body.email || !body.email.includes("@") || !body.name) {
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
      // "Submitted At" is a computed field (Created Time) in Airtable,
      // so we don't send it — Airtable populates it on insert.
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
  // AIRTABLE — Freebies Signup (master lead list, same base)
  // Mirrors every quiz submission with normalised first/last name
  // and a "Source" tag so you can segment leads by entry point.
  // Table name overridable via AIRTABLE_FREEBIES_TABLE.
  // ─────────────────────────────────────────────────────────────
  if (hasKey && hasBase) {
    // Accept either env var name and trim defensively in case Vercel
    // env-var input picked up a trailing space or newline.
    const freebiesTableRaw =
      process.env.AIRTABLE_FREEBIES_TABLE_NAME ||
      process.env.AIRTABLE_FREEBIES_TABLE ||
      "Freebies Signups";
    const freebiesTable = freebiesTableRaw.trim();

    console.log("[lead] freebies env →", {
      AIRTABLE_FREEBIES_TABLE_NAME: process.env.AIRTABLE_FREEBIES_TABLE_NAME ?? "(unset)",
      AIRTABLE_FREEBIES_TABLE: process.env.AIRTABLE_FREEBIES_TABLE ?? "(unset)",
      resolved: freebiesTable,
      resolvedLength: freebiesTable.length,
    });

    const baseId = (process.env.AIRTABLE_BASE_ID || "").trim();
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(freebiesTable)}`;

    // Split "Deric Yee" → first="Deric", last="Yee"
    // "Mary Jane Smith" → first="Mary", last="Jane Smith"
    // Single word → first=word, last=""
    const trimmedName = body.name.trim();
    const firstSpace = trimmedName.indexOf(" ");
    const firstName = firstSpace === -1 ? trimmedName : trimmedName.slice(0, firstSpace);
    const lastName = firstSpace === -1 ? "" : trimmedName.slice(firstSpace + 1).trim();

    const freebiesFields = {
      "First Name": firstName,
      "Last Name": lastName,
      Email: body.email,
      Phone: body.whatsapp || "",
      Source: "ai-risk-quiz",
    };

    console.log("[lead] freebies POST →", url);
    console.log("[lead] freebies fields →", freebiesFields);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [{ fields: freebiesFields }],
          typecast: true,
        }),
      });
      const responseText = await res.text();
      if (!res.ok) {
        console.error(
          "[lead] freebies FAILED",
          res.status,
          res.statusText,
          responseText
        );
        // 403 + INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND has two common causes:
        // (a) the PAT is scoped to specific tables and Freebies isn't one, OR
        // (b) the table name doesn't match exactly (case / spacing).
        let hint: string | undefined;
        if (res.status === 403) {
          hint =
            "Either your PAT doesn't include this table in its scope " +
            "(open the token at airtable.com/create/tokens and give it " +
            `access to the whole base, not specific tables), or the table ` +
            `name "${freebiesTable}" doesn't match exactly. Try using the ` +
            "table ID (tbl...) instead of the name to rule out spelling.";
        }
        integrations.freebies = {
          ok: false,
          status: res.status,
          error: responseText,
          ...(hint ? { hint } : {}),
        };
      } else {
        console.log("[lead] freebies OK", res.status);
        integrations.freebies = { ok: true, status: res.status };
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[lead] freebies threw:", msg);
      integrations.freebies = { ok: false, error: msg };
    }
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
