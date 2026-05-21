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
  // Accent color for the archetype card
  accent: string;
  accentSoft: string;
  // Direction the role is heading
  trajectory: "shrinking" | "changing" | "growing" | "safe";
}

export const ARCHETYPES: Record<string, Archetype> = {
  spreadsheet_sherpa: {
    id: "spreadsheet_sherpa",
    name: "The Spreadsheet Sherpa",
    shortName: "Spreadsheet Sherpa",
    monogram: "SS",
    tagline: "You live in spreadsheets all day. AI just learned spreadsheets.",
    verdict:
      "Your day is full of numbers, tables, and tidying up other people's messy data. You're really good at this. But here's the truth: AI can now do most of this work in seconds. The skill that took you years to build is starting to feel cheap. The smart move is to learn how to use AI to do this stuff for you — and spend your time on harder things AI can't do.",
    strengths: [
      "Spotting messy data",
      "Building tables that make sense",
      "Cross-checking numbers nobody else catches",
    ],
    threats: [
      "AI writes your formulas faster than you can",
      "AI cleans data in seconds",
      "Your monthly report is now one paragraph",
    ],
    rarity: 18,
    accent: "#f97316",
    accentSoft: "#fed7aa",
    trajectory: "shrinking",
  },
  inbox_diplomat: {
    id: "inbox_diplomat",
    name: "The Inbox Diplomat",
    shortName: "Inbox Diplomat",
    monogram: "ID",
    tagline: "You reply to emails and chats all day. So does AI now.",
    verdict:
      "Your skill is writing friendly, clear replies — emails, chats, customer messages, internal updates. AI has read billions of these and is getting really good at it. It can reply faster than you, in any language, at 3 AM. The good news: you still know what people actually need better than AI does. Use AI to write the first draft and make it sound like you.",
    strengths: [
      "Finding the right tone",
      "Calming people down",
      "Reading what people really mean",
    ],
    threats: [
      "Auto-replies that don't feel like auto-replies",
      "AI summing up long chats in two lines",
      "Easy tickets disappearing into bots",
    ],
    rarity: 14,
    accent: "#ec4899",
    accentSoft: "#fbcfe8",
    trajectory: "shrinking",
  },
  template_wizard: {
    id: "template_wizard",
    name: "The Template Wizard",
    shortName: "Template Wizard",
    monogram: "TW",
    tagline: "You make 30 versions of the same thing. AI does it in 30 seconds.",
    verdict:
      "You make lots of stuff every day — captions, ads, designs, blog posts, resized banners. The skill is doing it fast and on-brand. AI can now make most of this in seconds. The way to stay ahead is to move up: be the one who decides what gets made and why, not just the one making it.",
    strengths: [
      "Working fast under deadlines",
      "Knowing what looks good",
      "Doing 10 versions when others give up at 2",
    ],
    threats: [
      "AI making your moodboards in seconds",
      "AI writing your blog drafts in 90 seconds",
      "Clients wanting 3x the work for the same money",
    ],
    rarity: 13,
    accent: "#a855f7",
    accentSoft: "#e9d5ff",
    trajectory: "shrinking",
  },
  process_whisperer: {
    id: "process_whisperer",
    name: "The Process Whisperer",
    shortName: "Process Whisperer",
    monogram: "PW",
    tagline: "You help things run smoothly. AI is great at following steps.",
    verdict:
      "You're the one who keeps the team running — setting up steps, fixing handoffs, making sure things don't fall through the cracks. That's a real skill. But it's also a written-down skill. Anything you can write into steps, AI can be told to do too. Your edge is the judgment calls that aren't in the SOP.",
    strengths: [
      "Seeing the whole system",
      "Staying calm when things break",
      "Writing down what others can't explain",
    ],
    threats: [
      "Tools like Zapier doing your handoffs",
      "AI agents picking up routine tasks",
      "Teams shrinking while output doesn't",
    ],
    rarity: 11,
    accent: "#f59e0b",
    accentSoft: "#fde68a",
    trajectory: "changing",
  },
  powerpoint_surgeon: {
    id: "powerpoint_surgeon",
    name: "The PowerPoint Surgeon",
    shortName: "PowerPoint Surgeon",
    monogram: "PS",
    tagline: "You turn ideas into clean slides. That's now a one-click job.",
    verdict:
      "Slides, decks, briefs, frameworks — you take rough ideas and make them clear. The thinking part is hard to copy. But the slide-making part? AI tools can do that in minutes. Your real value is the thinking, not the formatting. Lean into that.",
    strengths: [
      "Making fuzzy ideas clear",
      "Telling a story with structure",
      "Being calm in a boardroom",
    ],
    threats: [
      "Tools like Gamma making decks from outlines",
      "AI writing the exec summary you used to charge for",
      "Clients doing it themselves with one prompt",
    ],
    rarity: 12,
    accent: "#0ea5e9",
    accentSoft: "#bae6fd",
    trajectory: "changing",
  },
  trust_broker: {
    id: "trust_broker",
    name: "The Trust Broker",
    shortName: "Trust Broker",
    monogram: "TB",
    tagline: "Your job is trust and people. AI can't shake hands.",
    verdict:
      "Your job lives in the room — on the call, across the table, in the long lunch. AI can help you prep and follow up, but it can't be the person someone chooses to work with. The risk for you isn't being replaced. It's that the easier parts of your job get cheap, and the human parts get harder and more important.",
    strengths: [
      "Reading the room",
      "Long-term relationships",
      "Closing what others can't",
    ],
    threats: [
      "Junior versions of your job getting absorbed by AI",
      "Buyers using AI to research you before you meet",
      "Smaller deals shrinking in value",
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
    tagline: "Your job needs you there in person. AI can't be there.",
    verdict:
      "Healthcare, retail, food, trades, hands-on work — your job happens with real people in real places. That's the strongest moat AI doesn't cross. Your risk isn't getting replaced. It's that your paperwork gets faster, the human parts of the job get squeezed, and you're expected to do more in the same shift.",
    strengths: [
      "Being there in person",
      "Real-time decisions",
      "Your hands and your judgment",
    ],
    threats: [
      "Paperwork and scheduling getting automated",
      "AI cutting down your admin time (good and bad)",
      "Bigger workload in the same hours",
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
    tagline: "You already use AI to do real work. You're not the worried one.",
    verdict:
      "You ship things with AI. You write code, automate workflows, or build products. The risk for you isn't losing your job. It's getting comfortable. The advantage goes to whoever keeps building — not whoever shipped first. Stay sharp, learn faster than others, and don't let the next wave catch you flat-footed.",
    strengths: [
      "Knowing the tools",
      "Shipping fast",
      "Picking the right stack",
    ],
    threats: [
      "Faster builders catching up",
      "The bar for 'impressive' rising every quarter",
      "Distribution mattering more than the build itself",
    ],
    rarity: 8,
    accent: "#6366f1",
    accentSoft: "#c7d2fe",
    trajectory: "growing",
  },
  generalist: {
    id: "generalist",
    name: "The Quiet Generalist",
    shortName: "Quiet Generalist",
    monogram: "QG",
    tagline: "You do a bit of everything. AI will eat the bits one by one.",
    verdict:
      "You wear many hats. That's your edge — you can pick things up fast and fill gaps. But it also means you have lots of small tasks at risk of getting eaten by AI. The smart move is to pick two of your hats and go deep on the ones AI can't wear well.",
    strengths: [
      "Wide range",
      "Picks up new things fast",
      "Connects dots others miss",
    ],
    threats: [
      "Lots of small tasks getting nibbled at once",
      "Specialists using AI to outdo you",
      "Being the easiest person to replace on a small team",
    ],
    rarity: 5,
    accent: "#64748b",
    accentSoft: "#cbd5e1",
    trajectory: "changing",
  },
};

/**
 * Pick the archetype based on field, answer pattern, and risk level.
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

  // 2. Field Captain — physical work dominates or field is physical
  if (
    q("q10") <= 1 ||
    ["healthcare", "retail", "engineering", "trades", "driver", "caregiver", "construction"].includes(
      field
    )
  ) {
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
    ["design", "marketing", "writer", "education", "artist"].includes(field) ||
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
 * Calculate the "countdown" months — how long until roughly 60% of the role's
 * tasks could be done by AI. Believable shorthand, not a science.
 */
export function calculateHalfLife(score: number): number {
  const t = score / 36;
  const months = Math.round(120 * Math.pow(0.075, t));
  return Math.max(9, months);
}
