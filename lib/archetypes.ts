import type { RiskLevel } from "./quiz-data";

export interface Archetype {
  id: string;
  name: string;
  shortName: string;
  // Two-letter monogram for the geometric symbol
  monogram: string;
  tagline: string;
  verdict: string;
  // What they're best at — short noun phrases
  strengths: string[];
  // What's coming for them — short, specific
  threats: string[];
  // Rough % of takers who get this — used for "rarity" copy
  rarity: number;
  // Accent color for the archetype card (Tailwind/CSS color)
  accent: string;
  accentSoft: string;
  // What kind of mood — "endangered" | "shifting" | "rising" | "safe"
  trajectory: "endangered" | "shifting" | "rising" | "safe";
}

export const ARCHETYPES: Record<string, Archetype> = {
  spreadsheet_sherpa: {
    id: "spreadsheet_sherpa",
    name: "The Spreadsheet Sherpa",
    shortName: "Spreadsheet Sherpa",
    monogram: "SS",
    tagline: "You keep the org's spreadsheet alive. AI just learned spreadsheets.",
    verdict:
      "Your work runs on cells, formulas, and the quiet heroism of cleaning up other people's data. The good news: you've already automated 100 things by hand. The bad: that work just became a one-prompt task.",
    strengths: ["Data structure intuition", "Spotting messy inputs", "Cross-tab thinking"],
    threats: [
      "ChatGPT writes your formulas faster than you do",
      "Auto-categorisation kills the cleanup step",
      "Your monthly report is now a paragraph",
    ],
    rarity: 18,
    accent: "#f97316",
    accentSoft: "#fed7aa",
    trajectory: "endangered",
  },
  inbox_diplomat: {
    id: "inbox_diplomat",
    name: "The Inbox Diplomat",
    shortName: "Inbox Diplomat",
    monogram: "ID",
    tagline: "You write the polite version of what people meant to say. So does GPT.",
    verdict:
      "Your superpower is translating chaos into a calm, on-brand reply. AI has been trained on a billion polite emails. It's getting eerily good at sounding like you — but faster, at 3 AM, in 14 languages.",
    strengths: ["Tone calibration", "De-escalation", "Reading between the lines"],
    threats: [
      "Auto-replies that don't sound like auto-replies",
      "AI summarising entire threads in two lines",
      "Tier-1 tickets disappearing into bots",
    ],
    rarity: 14,
    accent: "#ec4899",
    accentSoft: "#fbcfe8",
    trajectory: "endangered",
  },
  template_wizard: {
    id: "template_wizard",
    name: "The Template Wizard",
    shortName: "Template Wizard",
    monogram: "TW",
    tagline: "You make 30 versions of the same thing. AI does it in 30 seconds.",
    verdict:
      "Captions, ad variants, banner resizes, blog drafts — you produce volume on demand. Volume is exactly what AI is built to make cheap. Your competitive edge is moving up the stack: taste, strategy, direction.",
    strengths: ["Pace under deadline", "Format fluency", "Iteration stamina"],
    threats: [
      "Midjourney does your moodboards",
      "Claude drafts your blogs in 90 seconds",
      "Clients expect 3x output for the same budget",
    ],
    rarity: 13,
    accent: "#a855f7",
    accentSoft: "#e9d5ff",
    trajectory: "endangered",
  },
  process_whisperer: {
    id: "process_whisperer",
    name: "The Process Whisperer",
    shortName: "Process Whisperer",
    monogram: "PW",
    tagline: "You make chaos run on rails. AI loves rails.",
    verdict:
      "SOPs, workflows, ticket routing, coordination — you make organisations function. That's a real skill, but it's also a written-down skill. Anything that can be documented can be prompted.",
    strengths: ["Systems thinking", "Calmness under chaos", "Documentation muscle"],
    threats: [
      "n8n / Zapier doing your handoffs",
      "AI agents picking up routine ops",
      "Headcount expected to shrink, output not",
    ],
    rarity: 11,
    accent: "#f59e0b",
    accentSoft: "#fde68a",
    trajectory: "shifting",
  },
  powerpoint_surgeon: {
    id: "powerpoint_surgeon",
    name: "The PowerPoint Surgeon",
    shortName: "PowerPoint Surgeon",
    monogram: "PS",
    tagline: "You turn rough thoughts into clean slides. That's now a one-prompt task.",
    verdict:
      "Decks, memos, briefs, frameworks — you make ideas legible. The synthesis itself is harder to automate than people think, but the slide assembly, the formatting, the executive summary? That's done.",
    strengths: ["Structuring fuzzy ideas", "Narrative framing", "Executive presence"],
    threats: [
      "Gamma / Tome generating decks from outlines",
      "Claude writing your exec summary",
      "Clients DIY-ing the framework you used to charge for",
    ],
    rarity: 12,
    accent: "#0ea5e9",
    accentSoft: "#bae6fd",
    trajectory: "shifting",
  },
  trust_broker: {
    id: "trust_broker",
    name: "The Trust Broker",
    shortName: "Trust Broker",
    monogram: "TB",
    tagline: "You sell trust, not transactions. AI can't shake hands.",
    verdict:
      "Your value is in the room, on the call, across the table. AI can prep your meeting and write your follow-up — but it can't be the person clients choose to work with. Lean harder into the part of the job that's actually you.",
    strengths: ["Reading the room", "Long-game relationships", "Closing what others can't"],
    threats: [
      "Junior versions of your role being absorbed by AI",
      "Buyers researching you with AI before you even meet",
      "Margins compressing on the routine deals",
    ],
    rarity: 10,
    accent: "#10b981",
    accentSoft: "#a7f3d0",
    trajectory: "safe",
  },
  field_captain: {
    id: "field_captain",
    name: "The Field Captain",
    shortName: "Field Captain",
    monogram: "FC",
    tagline: "Your job needs hands and presence. AI has neither.",
    verdict:
      "Healthcare, retail, hospitality, field ops — your work happens in the physical world with real people in front of you. That's the strongest moat AI doesn't cross. Your risk isn't replacement. It's that your admin gets automated and the human work gets squeezed harder.",
    strengths: ["Physical judgment", "Real-time decision making", "Human presence"],
    threats: [
      "Admin and scheduling getting consolidated",
      "AI scribes shrinking documentation time",
      "Expectation that you do more in the same shift",
    ],
    rarity: 9,
    accent: "#14b8a6",
    accentSoft: "#99f6e4",
    trajectory: "safe",
  },
  builder: {
    id: "builder",
    name: "The Builder",
    shortName: "Builder",
    monogram: "BU",
    tagline: "You don't have a risk score. You're the reason others do.",
    verdict:
      "You already ship with AI. You write code, you automate workflows, you ship MVPs in weekends. The risk for you isn't displacement — it's complacency. The compounding advantage goes to whoever keeps building, not whoever shipped first.",
    strengths: ["AI fluency", "Shipping reflex", "Tool-stack judgment"],
    threats: [
      "Faster builders making your edge temporary",
      "The 'wow' threshold rising every quarter",
      "Distribution mattering more than craft now",
    ],
    rarity: 8,
    accent: "#6366f1",
    accentSoft: "#c7d2fe",
    trajectory: "rising",
  },
  generalist: {
    id: "generalist",
    name: "The Quiet Generalist",
    shortName: "Quiet Generalist",
    monogram: "QG",
    tagline: "You wear ten hats. Half of them are about to get lighter.",
    verdict:
      "You're the person who does a bit of everything. That breadth is your edge — but it also means you have surface area exposed to AI in lots of small ways. The play is to pick two of your hats and go deep on the ones AI can't wear.",
    strengths: ["Range", "Adaptability", "Connecting dots between teams"],
    threats: [
      "Lots of small tasks getting nibbled at once",
      "Specialists with AI out-producing you",
      "Being the most replaceable person in a small team",
    ],
    rarity: 5,
    accent: "#64748b",
    accentSoft: "#cbd5e1",
    trajectory: "shifting",
  },
};

/**
 * Pick the archetype based on field, answer pattern, and risk level.
 * Logic, in order of precedence:
 *  1. Already AI-fluent (q12=0) + tool-heavy → Builder
 *  2. Physical-first work (q10 low) → Field Captain
 *  3. High trust + high decision-making + low overall → Trust Broker
 *  4. Strategic / manager / consultant fields → PowerPoint Surgeon
 *  5. Highest driver = writing-heavy (q3) → Inbox Diplomat
 *  6. Highest driver = info-moving (q4) → Spreadsheet Sherpa
 *  7. Design / marketing field + high SOP score → Template Wizard
 *  8. Highest driver = SOP-able (q5) → Process Whisperer
 *  9. Fallback → Quiet Generalist
 */
export function determineArchetype(
  field: string,
  answers: Record<string, number>,
  level: RiskLevel
): Archetype {
  const q = (id: string) => answers[id] ?? 0;

  // 1. Builder — already AI-fluent + heavy tool use
  if (q("q12") === 0 && q("q7") >= 2) {
    return ARCHETYPES.builder;
  }

  // 2. Field Captain — physical work dominates
  if (q("q10") <= 1 || ["healthcare", "retail", "engineering"].includes(field)) {
    return ARCHETYPES.field_captain;
  }

  // 3. Trust Broker — high trust + high decision-making
  if (q("q9") <= 1 && q("q6") <= 1) {
    return ARCHETYPES.trust_broker;
  }

  // 4. PowerPoint Surgeon — strategic / management / consultant fields
  if (["manager", "consultant", "founder", "legal"].includes(field) && level !== "Very High") {
    return ARCHETYPES.powerpoint_surgeon;
  }

  // Find highest-scoring driver question
  const drivers: Array<[string, number]> = Object.entries(answers).filter(
    ([id]) => id !== "q12"
  );
  drivers.sort((a, b) => b[1] - a[1]);
  const topDriver = drivers[0]?.[0];

  // 5. Inbox Diplomat — writing-heavy is the top driver
  if (topDriver === "q3" || (q("q3") >= 2 && ["customer-service", "hr", "sales"].includes(field))) {
    return ARCHETYPES.inbox_diplomat;
  }

  // 6. Spreadsheet Sherpa — info-moving is the top driver
  if (topDriver === "q4" || (q("q4") >= 2 && ["admin", "accounting", "hr"].includes(field))) {
    return ARCHETYPES.spreadsheet_sherpa;
  }

  // 7. Template Wizard — design / marketing / writer / education
  if (
    ["design", "marketing", "writer", "education"].includes(field) ||
    (q("q5") >= 2 && q("q2") >= 2)
  ) {
    return ARCHETYPES.template_wizard;
  }

  // 8. Process Whisperer — SOP-driven
  if (topDriver === "q5" || q("q5") >= 2) {
    return ARCHETYPES.process_whisperer;
  }

  // 9. Fallback
  return ARCHETYPES.generalist;
}

/**
 * Calculate the "half-life" — months until roughly 60% of the role's
 * tasks could be done by AI, based on the user's risk score.
 * This is a believable shorthand, not a scientific prediction.
 * Score 0 → ~120 months. Score 36 → ~9 months.
 */
export function calculateHalfLife(score: number): number {
  const t = score / 36;
  // Exponential decay from 120 months down to ~9 months
  const months = Math.round(120 * Math.pow(0.075, t));
  return Math.max(9, months);
}
