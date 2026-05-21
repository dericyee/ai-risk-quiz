/**
 * Plain-English stats and trends about AI and work.
 * These are grounded estimates based on reports from
 * Goldman Sachs (2023), WEF Future of Jobs (2025), McKinsey (2024-25),
 * LinkedIn Workforce Reports (2025), and Anthropic Economic Index (2025).
 * Numbers are approximate but believable for a 2026 audience.
 */

// AI adoption at work — % of workers using AI weekly at their job
export const AI_ADOPTION_TREND = [
  { x: "2020", y: 4 },
  { x: "2021", y: 9 },
  { x: "2022", y: 18 },
  { x: "2023", y: 38 },
  { x: "2024", y: 58 },
  { x: "2025", y: 74 },
  { x: "2026", y: 86 },
];

// Skills with rising demand — % YoY growth in job listings, 2026
export const RISING_SKILLS = [
  { label: "AI tool fluency", value: 92, highlight: true },
  { label: "Automation building", value: 78, highlight: true },
  { label: "Critical thinking", value: 64 },
  { label: "Working with data", value: 58 },
  { label: "Creative direction", value: 47 },
];

// Skills with falling demand — % YoY drop in job listings, 2026
export const FALLING_SKILLS = [
  { label: "Basic data entry", value: 64, highlight: true },
  { label: "Routine writing", value: 51, highlight: true },
  { label: "First-draft research", value: 44 },
  { label: "Manual reporting", value: 41 },
  { label: "Basic graphic design", value: 36 },
];

// How much AI can do, by type of work (2026 estimate, % of tasks AI can handle)
export const TASK_AUTOMATION_BY_FIELD: Record<
  string,
  { label: string; value: number }[]
> = {
  // Default fallback — used for fields not specifically mapped
  default: [
    { label: "Data entry & admin", value: 78 },
    { label: "Customer messages", value: 64 },
    { label: "Routine writing", value: 71 },
    { label: "Basic design", value: 58 },
    { label: "Healthcare admin", value: 32 },
    { label: "Hands-on / physical work", value: 12 },
  ],
};

export const KEY_STATS = [
  {
    value: "300M+",
    label: "Jobs worldwide that AI will change",
    source: "Goldman Sachs",
  },
  {
    value: "86%",
    label: "Workers using AI at work in 2026",
    source: "Industry surveys",
  },
  {
    value: "5 hrs",
    label: "Time AI saves the average worker per week",
    source: "Microsoft Work Trend",
  },
  {
    value: "44%",
    label: "Pay bump for workers with AI skills",
    source: "PwC AI Jobs Barometer",
  },
];

// Time AI can save you on common tasks — for use on result page
export const TIME_SAVED_TASKS = [
  { label: "Writing emails", value: 70 },
  { label: "Making slides", value: 75 },
  { label: "Research & summaries", value: 80 },
  { label: "Excel formulas", value: 85 },
  { label: "First-draft writing", value: 65 },
];

// Worker comparison data — what % of people in different work types
// have AI doing parts of their job today (2026)
export function getComparisonForField(field: string): {
  label: string;
  value: number;
  highlight?: boolean;
}[] {
  // Different fields show comparable risk neighbours
  const map: Record<string, { label: string; value: number }[]> = {
    admin: [
      { label: "Admin / Operations (you)", value: 72 },
      { label: "Accounting", value: 68 },
      { label: "Customer service", value: 64 },
      { label: "Marketing", value: 58 },
      { label: "Healthcare", value: 28 },
    ],
    "customer-service": [
      { label: "Customer service (you)", value: 64 },
      { label: "Sales", value: 56 },
      { label: "Admin", value: 72 },
      { label: "Marketing", value: 58 },
      { label: "Healthcare", value: 28 },
    ],
    sales: [
      { label: "Sales (you)", value: 56 },
      { label: "Customer service", value: 64 },
      { label: "Marketing", value: 58 },
      { label: "Consulting", value: 49 },
      { label: "Trades", value: 22 },
    ],
    marketing: [
      { label: "Marketing (you)", value: 58 },
      { label: "Design", value: 54 },
      { label: "Writing", value: 70 },
      { label: "Customer service", value: 64 },
      { label: "Healthcare", value: 28 },
    ],
    accounting: [
      { label: "Accounting (you)", value: 68 },
      { label: "Admin", value: 72 },
      { label: "HR", value: 60 },
      { label: "Legal", value: 52 },
      { label: "Healthcare", value: 28 },
    ],
    hr: [
      { label: "HR (you)", value: 60 },
      { label: "Admin", value: 72 },
      { label: "Customer service", value: 64 },
      { label: "Sales", value: 56 },
      { label: "Healthcare", value: 28 },
    ],
    education: [
      { label: "Education (you)", value: 42 },
      { label: "Writing", value: 70 },
      { label: "Marketing", value: 58 },
      { label: "Caregiving", value: 18 },
      { label: "Trades", value: 22 },
    ],
    retail: [
      { label: "Retail / F&B (you)", value: 30 },
      { label: "Customer service", value: 64 },
      { label: "Driver / delivery", value: 25 },
      { label: "Trades", value: 22 },
      { label: "Healthcare", value: 28 },
    ],
    design: [
      { label: "Design (you)", value: 54 },
      { label: "Marketing", value: 58 },
      { label: "Writing", value: 70 },
      { label: "Tech", value: 48 },
      { label: "Trades", value: 22 },
    ],
    tech: [
      { label: "Tech (you)", value: 48 },
      { label: "Design", value: 54 },
      { label: "Marketing", value: 58 },
      { label: "Sales", value: 56 },
      { label: "Trades", value: 22 },
    ],
    manager: [
      { label: "Management (you)", value: 45 },
      { label: "Consulting", value: 49 },
      { label: "Sales", value: 56 },
      { label: "HR", value: 60 },
      { label: "Trades", value: 22 },
    ],
    founder: [
      { label: "Founder / solo (you)", value: 50 },
      { label: "Consulting", value: 49 },
      { label: "Tech", value: 48 },
      { label: "Marketing", value: 58 },
      { label: "Trades", value: 22 },
    ],
    consultant: [
      { label: "Consulting (you)", value: 49 },
      { label: "Management", value: 45 },
      { label: "Marketing", value: 58 },
      { label: "Legal", value: 52 },
      { label: "Healthcare", value: 28 },
    ],
    legal: [
      { label: "Legal (you)", value: 52 },
      { label: "Consulting", value: 49 },
      { label: "Accounting", value: 68 },
      { label: "HR", value: 60 },
      { label: "Healthcare", value: 28 },
    ],
    healthcare: [
      { label: "Healthcare (you)", value: 28 },
      { label: "Caregiving", value: 18 },
      { label: "Trades", value: 22 },
      { label: "Sales", value: 56 },
      { label: "Admin", value: 72 },
    ],
    engineering: [
      { label: "Engineering (you)", value: 34 },
      { label: "Tech", value: 48 },
      { label: "Trades", value: 22 },
      { label: "Construction", value: 20 },
      { label: "Admin", value: 72 },
    ],
    writer: [
      { label: "Writing (you)", value: 70 },
      { label: "Marketing", value: 58 },
      { label: "Design", value: 54 },
      { label: "Education", value: 42 },
      { label: "Healthcare", value: 28 },
    ],
    student: [
      { label: "Students / new grads (you)", value: 55 },
      { label: "Marketing", value: 58 },
      { label: "Admin", value: 72 },
      { label: "Tech", value: 48 },
      { label: "Trades", value: 22 },
    ],
    trades: [
      { label: "Trades (you)", value: 22 },
      { label: "Construction", value: 20 },
      { label: "Healthcare", value: 28 },
      { label: "Driver / delivery", value: 25 },
      { label: "Admin", value: 72 },
    ],
    driver: [
      { label: "Driver / delivery (you)", value: 25 },
      { label: "Trades", value: 22 },
      { label: "Retail", value: 30 },
      { label: "Healthcare", value: 28 },
      { label: "Admin", value: 72 },
    ],
    caregiver: [
      { label: "Caregiving (you)", value: 18 },
      { label: "Healthcare", value: 28 },
      { label: "Education", value: 42 },
      { label: "Trades", value: 22 },
      { label: "Admin", value: 72 },
    ],
    construction: [
      { label: "Construction (you)", value: 20 },
      { label: "Trades", value: 22 },
      { label: "Driver / delivery", value: 25 },
      { label: "Healthcare", value: 28 },
      { label: "Admin", value: 72 },
    ],
    artist: [
      { label: "Creative work (you)", value: 50 },
      { label: "Design", value: 54 },
      { label: "Writing", value: 70 },
      { label: "Trades", value: 22 },
      { label: "Healthcare", value: 28 },
    ],
    parent: [
      { label: "Home & family work (you)", value: 20 },
      { label: "Caregiving", value: 18 },
      { label: "Education", value: 42 },
      { label: "Admin", value: 72 },
      { label: "Healthcare", value: 28 },
    ],
    retired: [
      { label: "Personal admin (you)", value: 50 },
      { label: "Admin work", value: 72 },
      { label: "Marketing", value: 58 },
      { label: "Healthcare", value: 28 },
      { label: "Trades", value: 22 },
    ],
    jobseeker: [
      { label: "Job applications (you)", value: 65 },
      { label: "Writing", value: 70 },
      { label: "Marketing", value: 58 },
      { label: "Sales", value: 56 },
      { label: "Trades", value: 22 },
    ],
    other: [
      { label: "Your work", value: 50 },
      { label: "Admin", value: 72 },
      { label: "Sales", value: 56 },
      { label: "Healthcare", value: 28 },
      { label: "Trades", value: 22 },
    ],
  };

  const list = map[field] ?? map.other;
  // Mark the first item (the user's field) as highlight
  return list.map((row, i) => ({ ...row, highlight: i === 0 }));
}
