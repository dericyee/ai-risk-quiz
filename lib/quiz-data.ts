export type RiskLevel = "Low" | "Medium" | "High" | "Very High";

export interface QuizOption {
  label: string;
  score: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  subtext?: string;
  options: QuizOption[];
}

export interface FieldInfo {
  id: string;
  label: string;
  exposedTasks: string[];
  saferSkills: string[];
  aiTools: { name: string; useFor: string }[];
}

export const FIELDS: FieldInfo[] = [
  {
    id: "admin",
    label: "Admin / Operations",
    exposedTasks: [
      "Scheduling, calendar coordination, and meeting notes",
      "Data entry, document formatting, and report compilation",
      "SOP-based coordination and internal status updates",
    ],
    saferSkills: [
      "Workflow automation and process design",
      "Operations strategy and systems thinking",
      "No-code / low-code tool fluency (Zapier, Make, n8n)",
    ],
    aiTools: [
      { name: "Notion AI", useFor: "Draft meeting notes, summaries, and SOPs in seconds" },
      { name: "Zapier / Make", useFor: "Automate repetitive workflows between your tools" },
      { name: "Claude or ChatGPT", useFor: "Reply to emails 5x faster with templates that don't sound robotic" },
    ],
  },
  {
    id: "customer-service",
    label: "Customer Service",
    exposedTasks: [
      "Repeated FAQ replies and ticket classification",
      "Complaint summaries and CRM updates",
      "Chatbot handoff and standard response templates",
    ],
    saferSkills: [
      "Complex escalation handling and customer success strategy",
      "Automation design and technical product knowledge",
      "High-value relationship management",
    ],
    aiTools: [
      { name: "Intercom Fin / Zendesk AI", useFor: "Auto-resolve tier-1 tickets so you can focus on hard ones" },
      { name: "Claude", useFor: "Draft empathetic, on-brand replies in seconds" },
      { name: "Notion AI", useFor: "Build a self-updating FAQ knowledge base" },
    ],
  },
  {
    id: "sales",
    label: "Sales / BD",
    exposedTasks: [
      "Cold email drafts and lead research",
      "CRM updates, follow-up reminders, and call notes",
      "Basic proposal and quote generation",
    ],
    saferSkills: [
      "Consultative selling and objection handling",
      "Trust-building, negotiation, and account strategy",
      "Sales-engineering: pairing product knowledge with deals",
    ],
    aiTools: [
      { name: "Apollo / Clay", useFor: "Pull qualified leads and enrich them automatically" },
      { name: "Gong / Fireflies", useFor: "Auto-summarise calls and extract next steps" },
      { name: "Claude", useFor: "Write outbound that doesn't sound like outbound" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing / Content",
    exposedTasks: [
      "Basic captions, blog drafts, and email copy",
      "Ad variations, content repurposing, and competitor research",
      "Template-based creatives and report writing",
    ],
    saferSkills: [
      "Brand positioning, offer strategy, and audience research",
      "Creative direction and full-funnel thinking",
      "Analytics, experimentation, and attribution",
    ],
    aiTools: [
      { name: "Claude / ChatGPT", useFor: "Generate 20 ad variations in 5 minutes — then pick the 3 good ones" },
      { name: "Midjourney / Ideogram", useFor: "Produce on-brand visuals without a designer for every iteration" },
      { name: "Perplexity", useFor: "Real-time market and competitor research with sources" },
    ],
  },
  {
    id: "accounting",
    label: "Accounting / Finance",
    exposedTasks: [
      "Invoice processing, reconciliations, and expense categorisation",
      "Standard monthly reports and spreadsheet cleanup",
      "Routine bookkeeping and data entry",
    ],
    saferSkills: [
      "Financial analysis and business judgment",
      "Compliance, audit, and risk understanding",
      "Dashboard building and finance automation",
    ],
    aiTools: [
      { name: "ChatGPT (with Excel)", useFor: "Generate formulas, pivots, and macros without remembering syntax" },
      { name: "Dext / Hubdoc", useFor: "Auto-capture and categorise receipts and invoices" },
      { name: "Claude", useFor: "Turn raw numbers into a board-ready commentary draft" },
    ],
  },
  {
    id: "hr",
    label: "HR / People",
    exposedTasks: [
      "CV screening and interview scheduling",
      "Job description drafts and candidate summaries",
      "Onboarding documents and policy admin",
    ],
    saferSkills: [
      "Talent judgment, employer branding, and DEI strategy",
      "People operations design and structured interviewing",
      "People analytics and org design",
    ],
    aiTools: [
      { name: "Manatal / Paradox", useFor: "Auto-screen and rank candidates by fit" },
      { name: "Claude", useFor: "Draft job descriptions, interview scorecards, and policy docs" },
      { name: "Lattice / Leapsome AI", useFor: "Summarise reviews and surface engagement signals" },
    ],
  },
  {
    id: "education",
    label: "Education / Training",
    exposedTasks: [
      "Worksheet, quiz, and lesson-plan generation",
      "Routine grading and feedback templates",
      "Content explanation that follows a textbook",
    ],
    saferSkills: [
      "Curriculum design and learning experience",
      "1:1 mentorship, coaching, and classroom management",
      "EdTech, blended learning, and assessment design",
    ],
    aiTools: [
      { name: "NotebookLM", useFor: "Turn your slides and notes into instant study guides" },
      { name: "Khanmigo / Claude", useFor: "Personalise practice problems for each student" },
      { name: "Magicschool.ai", useFor: "Automate lesson plans, rubrics, and parent emails" },
    ],
  },
  {
    id: "retail",
    label: "Retail / F&B / Hospitality",
    exposedTasks: [
      "Inventory tracking and shift scheduling admin",
      "Customer reply templates and order processing",
      "Routine reporting and stock management",
    ],
    saferSkills: [
      "Customer experience design and on-the-floor leadership",
      "Tech-enabled operations and digital marketing",
      "Brand-building and community management",
    ],
    aiTools: [
      { name: "Square / Toast AI", useFor: "Forecast demand and auto-schedule shifts" },
      { name: "Canva AI", useFor: "Produce daily social content without a designer" },
      { name: "ChatGPT", useFor: "Write menu descriptions, promo copy, and Google review replies" },
    ],
  },
  {
    id: "design",
    label: "Design / Creative",
    exposedTasks: [
      "Template-based design work and asset resizing",
      "Stock-image sourcing, mockups, and simple layouts",
      "Routine content production and basic iterations",
    ],
    saferSkills: [
      "Creative direction and brand strategy",
      "UX research, product design, and design systems",
      "Motion, 3D, and interactive design",
    ],
    aiTools: [
      { name: "Figma AI / Make", useFor: "Generate, iterate, and prototype interfaces fast" },
      { name: "Midjourney / Ideogram", useFor: "Concept and moodboard at the speed of thought" },
      { name: "Runway / Kling", useFor: "Add video and motion to your toolkit" },
    ],
  },
  {
    id: "tech",
    label: "Software / Tech",
    exposedTasks: [
      "Boilerplate code, CRUD endpoints, and config",
      "Manual testing and documentation",
      "Repetitive bug fixes and routine refactors",
    ],
    saferSkills: [
      "System design, architecture, and product thinking",
      "AI-native development (RAG, agents, evals)",
      "Technical leadership and code-review judgment",
    ],
    aiTools: [
      { name: "Cursor / Claude Code", useFor: "Ship 5–10x faster without sacrificing quality" },
      { name: "v0 / Bolt", useFor: "Prototype full UIs from a prompt" },
      { name: "Claude with MCP", useFor: "Build internal agents that read your docs and tools" },
    ],
  },
  {
    id: "manager",
    label: "Manager / Team Lead",
    exposedTasks: [
      "Status reports, meeting notes, and 1:1 prep",
      "Performance review summaries and feedback drafts",
      "Standard project planning and timeline updates",
    ],
    saferSkills: [
      "Strategic decision-making and prioritisation",
      "Coaching, conflict resolution, and motivation",
      "Cross-functional alignment and stakeholder management",
    ],
    aiTools: [
      { name: "Otter / Fireflies", useFor: "Auto-summarise every meeting and extract action items" },
      { name: "Claude", useFor: "Turn rough thoughts into clear team comms and reviews" },
      { name: "Notion AI", useFor: "Roll up project status across docs without manual updates" },
    ],
  },
  {
    id: "founder",
    label: "Founder / Solopreneur",
    exposedTasks: [
      "Generic marketing copy, landing pages, and basic ops",
      "Research, summarisation, and competitive analysis",
      "First-draft strategy docs and pitch decks",
    ],
    saferSkills: [
      "Founder taste: judgment, positioning, and storytelling",
      "Customer development and distribution",
      "Building AI into the product, not just around it",
    ],
    aiTools: [
      { name: "Claude / ChatGPT", useFor: "Be your own analyst, copywriter, and chief of staff" },
      { name: "v0 / Lovable / Bolt", useFor: "Ship a working MVP this weekend, not next quarter" },
      { name: "Perplexity", useFor: "Customer and market research without paying an analyst" },
    ],
  },
  {
    id: "consultant",
    label: "Consultant / Analyst",
    exposedTasks: [
      "Slide decks, frameworks, and standard analyses",
      "Market research, benchmarking, and data summaries",
      "Meeting prep and client memo drafts",
    ],
    saferSkills: [
      "Insight generation that surprises clients",
      "Senior client relationships and trust",
      "Implementation muscle, not just recommendations",
    ],
    aiTools: [
      { name: "Claude", useFor: "Turn raw data into structured frameworks and narratives" },
      { name: "Perplexity Pro", useFor: "Deep research with citations in minutes" },
      { name: "ChatGPT Advanced Data Analysis", useFor: "Analyse spreadsheets without writing code" },
    ],
  },
  {
    id: "legal",
    label: "Legal / Compliance",
    exposedTasks: [
      "Contract review against templates and standard clauses",
      "Document discovery, summarisation, and tagging",
      "Routine compliance checklists and memo drafts",
    ],
    saferSkills: [
      "Strategic legal advice and judgment calls",
      "Negotiation, litigation, and client management",
      "Regulatory expertise in fast-changing areas (AI, data, crypto)",
    ],
    aiTools: [
      { name: "Harvey / Legora", useFor: "Auto-review contracts against your playbook" },
      { name: "Claude", useFor: "Summarise long documents and surface risk clauses" },
      { name: "DocuSign Insight", useFor: "Pattern-spot across thousands of contracts" },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare / Nursing",
    exposedTasks: [
      "Clinical note-taking and documentation",
      "Insurance, billing, and admin paperwork",
      "Triage summaries and routine patient communications",
    ],
    saferSkills: [
      "Clinical judgment and patient interaction",
      "Hands-on procedures and bedside care",
      "Health-tech and digital health workflows",
    ],
    aiTools: [
      { name: "Abridge / Heidi", useFor: "Auto-generate clinical notes from conversations" },
      { name: "ChatGPT", useFor: "Patient-friendly explanation drafts and admin emails" },
      { name: "Doximity GPT", useFor: "Clinician-tuned drafting and reference lookup" },
    ],
  },
  {
    id: "engineering",
    label: "Engineering / Manufacturing",
    exposedTasks: [
      "Standard design calculations and documentation",
      "Process reports, QA checklists, and routine drawings",
      "Supplier coordination and spec write-ups",
    ],
    saferSkills: [
      "Hands-on problem solving and site work",
      "Systems integration and cross-discipline design",
      "Robotics, automation, and AI-augmented engineering",
    ],
    aiTools: [
      { name: "ChatGPT / Claude", useFor: "Calc checks, spec drafts, and standards lookup" },
      { name: "Autodesk Forma / Generative Design", useFor: "Explore design options 10x faster" },
      { name: "Notion AI", useFor: "Centralise and search project documentation" },
    ],
  },
  {
    id: "writer",
    label: "Writer / Journalist",
    exposedTasks: [
      "Aggregation, rewrites, and listicle-style content",
      "Standard press releases and SEO articles",
      "Routine research summaries and transcription",
    ],
    saferSkills: [
      "Original reporting and source-building",
      "Narrative craft and investigative depth",
      "Distinct voice, opinion, and audience-building",
    ],
    aiTools: [
      { name: "Claude", useFor: "Outline, edit, and tighten without losing your voice" },
      { name: "Otter / Whisper", useFor: "Transcribe interviews in minutes, not hours" },
      { name: "Perplexity", useFor: "Background research with traceable sources" },
    ],
  },
  {
    id: "student",
    label: "Student / Fresh Grad",
    exposedTasks: [
      "Generic assignments, reports, and standard research",
      "Basic admin and entry-level execution tasks",
      "Template-style cover letters and CVs",
    ],
    saferSkills: [
      "A real portfolio of shipped work",
      "AI-native workflow fluency",
      "Technical fundamentals + proof of ability",
    ],
    aiTools: [
      { name: "NotebookLM", useFor: "Turn lecture notes and PDFs into instant study aids" },
      { name: "Claude", useFor: "A patient tutor that explains anything 3 ways" },
      { name: "Cursor / v0", useFor: "Build real projects you can show employers" },
    ],
  },
  {
    id: "other",
    label: "Other",
    exposedTasks: [
      "Any repetitive, template-based, or SOP-driven work",
      "Digital information handling and data entry",
      "Routine communication and report generation",
    ],
    saferSkills: [
      "Technical thinking and problem-solving",
      "AI tool fluency and automation skills",
      "High-judgment and relationship-based work",
    ],
    aiTools: [
      { name: "Claude / ChatGPT", useFor: "The Swiss-army knife — start here for any role" },
      { name: "Perplexity", useFor: "Research, fact-check, and learn anything fast" },
      { name: "Zapier", useFor: "Automate any boring multi-step task you do weekly" },
    ],
  },
];

export const QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "What best describes your current work?",
    options: [
      { label: "Mostly physical or in-person work", score: 0 },
      { label: "Mix of physical and computer work", score: 1 },
      { label: "Mostly computer-based work", score: 2 },
      { label: "Almost fully laptop or office work", score: 3 },
    ],
  },
  {
    id: "q2",
    question: "How repetitive is your work?",
    options: [
      { label: "Every day is different", score: 0 },
      { label: "Some tasks repeat weekly", score: 1 },
      { label: "Many tasks repeat daily", score: 2 },
      { label: "Most of my work follows the same steps", score: 3 },
    ],
  },
  {
    id: "q3",
    question: "How much of your work involves writing, editing, or replying?",
    subtext: "Emails, reports, captions, proposals, customer replies, internal docs",
    options: [
      { label: "Almost none", score: 0 },
      { label: "A little", score: 1 },
      { label: "A lot", score: 2 },
      { label: "Most of my job", score: 3 },
    ],
  },
  {
    id: "q4",
    question: "How much of your work is copying, organising, or moving information?",
    subtext: "Data entry, spreadsheets, CRM updates, reports, invoices, forms",
    options: [
      { label: "Almost none", score: 0 },
      { label: "A little", score: 1 },
      { label: "A lot", score: 2 },
      { label: "Most of my job", score: 3 },
    ],
  },
  {
    id: "q5",
    question: "Can your work be explained as a step-by-step SOP?",
    options: [
      { label: "No — it needs context and judgment", score: 0 },
      { label: "Some parts can", score: 1 },
      { label: "Many parts can", score: 2 },
      { label: "Most parts can", score: 3 },
    ],
  },
  {
    id: "q6",
    question: "How much original decision-making do you do?",
    options: [
      { label: "I make complex calls often", score: 0 },
      { label: "I make some decisions", score: 1 },
      { label: "I mostly follow instructions", score: 2 },
      { label: "I mainly execute tasks others assign", score: 3 },
    ],
  },
  {
    id: "q7",
    question: "How much do you live in tools like Excel, Sheets, Canva, CRM, email, or chat?",
    options: [
      { label: "Rarely", score: 0 },
      { label: "Sometimes", score: 1 },
      { label: "Daily", score: 2 },
      { label: "Almost all day", score: 3 },
    ],
  },
  {
    id: "q8",
    question: "How easy is it for someone to check your output?",
    options: [
      { label: "Hard — quality is subjective or strategic", score: 0 },
      { label: "Somewhat hard", score: 1 },
      { label: "Easy with a checklist", score: 2 },
      { label: "Very easy — compare against a template or result", score: 3 },
    ],
  },
  {
    id: "q9",
    question: "Does your job require deep trust, persuasion, or relationships?",
    subtext: "High-ticket sales, leadership, negotiation, counselling, key clients",
    options: [
      { label: "Yes — most of the job", score: 0 },
      { label: "Some of the job", score: 1 },
      { label: "Not much", score: 2 },
      { label: "Almost none", score: 3 },
    ],
  },
  {
    id: "q10",
    question: "Does your job require hands-on physical presence?",
    subtext: "Nursing, repairs, construction, cooking, events, field work",
    options: [
      { label: "Yes — most of the job", score: 0 },
      { label: "Some of the job", score: 1 },
      { label: "Rarely", score: 2 },
      { label: "Not at all", score: 3 },
    ],
  },
  {
    id: "q11",
    question: "If your company adopted AI tools tomorrow, how much of your work could be done faster?",
    options: [
      { label: "Less than 20%", score: 0 },
      { label: "20–40%", score: 1 },
      { label: "40–60%", score: 2 },
      { label: "More than 60%", score: 3 },
    ],
  },
  {
    id: "q12",
    question: "Honestly — how good are you with AI tools today?",
    options: [
      { label: "I don't really use them", score: 3 },
      { label: "I dabble with ChatGPT sometimes", score: 2 },
      { label: "I use AI weekly for real work", score: 1 },
      { label: "I use AI daily and automate parts of my job", score: 0 },
    ],
  },
];

export interface RiskResult {
  level: RiskLevel;
  title: string;
  shortSummary: string;
  realTalk: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  color: string;
  bgColor: string;
  borderColor: string;
  gaugeColor: string;
  percentileCopy: string;
}

export const RISK_RESULTS: Record<RiskLevel, RiskResult> = {
  Low: {
    level: "Low",
    title: "Low Exposure",
    shortSummary:
      "Your work depends on things AI is genuinely bad at — physical presence, real judgment, or human trust. The core of your job is safer than most.",
    realTalk:
      "Real talk: \"low exposure\" is not \"no exposure.\" The parts of your job you don't think about — emails, reports, planning, research — those will get done in 5 minutes instead of 5 hours. The people who learn to use AI here will get promoted past the ones who don't.\n\nYour edge: you're not on the front line of disruption, so you have more time to learn. Don't waste it.",
    primaryCTA: { label: "Get the Beginner AI Skills Roadmap", href: "https://sigmaschool.co" },
    secondaryCTA: { label: "Free Masterclass: AI for Your Career", href: "https://sigmaschool.co" },
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    gaugeColor: "#10b981",
    percentileCopy: "You scored lower than about 62% of people who took this quiz.",
  },
  Medium: {
    level: "Medium",
    title: "Medium Exposure",
    shortSummary:
      "Real chunks of your job — writing, organising, reporting, replying — can already be done in a fraction of the time with AI. Your role isn't disappearing. The basic version of it is getting cheaper.",
    realTalk:
      "Here's the thing — your job probably won't be replaced. Your tasks will. The person still doing those tasks manually in 2 years will look like the one still printing emails in 2010.\n\nThe move: stop being the person who does the task. Become the person who designs how the task gets done. That's a different — and more valuable — job.",
    primaryCTA: { label: "Get the AI Software Developer Roadmap", href: "https://sigmaschool.co" },
    secondaryCTA: { label: "Join the Free AI-Native Masterclass", href: "https://sigmaschool.co" },
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    gaugeColor: "#f59e0b",
    percentileCopy: "You scored higher than about 48% of people who took this quiz.",
  },
  High: {
    level: "High",
    title: "High Exposure",
    shortSummary:
      "A big slice of your work is digital, repetitive, and easy to describe step-by-step. That's exactly the shape AI tools are getting really good at — and where employers will look first to do more with less.",
    realTalk:
      "Look — this isn't a doom prediction. But the calculus is real: your employer is going to expect more output, with less budget for the basic stuff, faster. Wage pressure, fewer entry-level openings, and one person expected to do the work of three with AI.\n\nYour move isn't \"learn ChatGPT\" — that's table stakes now. Your move is to build something AI can't easily commoditise: technical thinking, automation, real projects you can point to. That's how you reprice your work upward instead of being repriced down.",
    primaryCTA: { label: "Join the Free AI-Native Developer Masterclass", href: "https://sigmaschool.co" },
    secondaryCTA: { label: "Get the Beginner Roadmap", href: "https://sigmaschool.co" },
    color: "text-orange-700",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    gaugeColor: "#ea580c",
    percentileCopy: "You scored higher than about 71% of people who took this quiz.",
  },
  "Very High": {
    level: "Very High",
    title: "Very High Exposure",
    shortSummary:
      "Most of what you do is computer-based, repetitive, and follows steps. That's the exact profile AI is being pointed at right now — not as a future threat, but in tools already shipped.",
    realTalk:
      "Direct version: if you wait 12 months, the gap between you and AI-native workers will be hard to close. The good news? Most people will wait. That's your edge — if you start now.\n\nDon't try to \"keep up\" with AI doing your current tasks. That's a losing race. Move up the stack: build skills where AI is your tool, not your competitor. Software thinking, automation, and real project-building are the clearest path right now.",
    primaryCTA: { label: "Join the Free Masterclass — Start Now", href: "https://sigmaschool.co" },
    secondaryCTA: { label: "Apply to Sigma School", href: "https://sigmaschool.co" },
    color: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    gaugeColor: "#dc2626",
    percentileCopy: "You scored higher than about 86% of people who took this quiz.",
  },
};

export interface MicroAction {
  week: string;
  title: string;
  detail: string;
}

export const THIRTY_DAY_PLAN: Record<RiskLevel, MicroAction[]> = {
  Low: [
    { week: "Week 1", title: "Pick one AI tool and use it 4 times", detail: "Claude or ChatGPT. For a real task at work, not a toy." },
    { week: "Week 2", title: "Replace one manual workflow", detail: "Find one weekly task that takes >30 min. Cut it in half with AI." },
    { week: "Week 3", title: "Learn one technical skill adjacent to your role", detail: "SQL, Python basics, no-code automation — pick one." },
    { week: "Week 4", title: "Teach what you learned", detail: "Post a short LinkedIn write-up. Public learning compounds." },
  ],
  Medium: [
    { week: "Week 1", title: "Audit your week", detail: "List every recurring task. Mark which ones could be 80% done by AI." },
    { week: "Week 2", title: "Automate one of them end-to-end", detail: "Use Zapier, Claude, or a script. Save the time. Don't tell your boss yet." },
    { week: "Week 3", title: "Build one public artifact", detail: "A small project, template, or guide that shows you can build with AI, not just use it." },
    { week: "Week 4", title: "Talk to one person who already moved up", detail: "Coffee chat or LinkedIn DM. Ask what their week looks like now." },
  ],
  High: [
    { week: "Week 1", title: "Be brutally honest about your tasks", detail: "Write down what you actually did last week. Highlight what AI could already do." },
    { week: "Week 2", title: "Commit to learning one new stack", detail: "Software, data, or AI development. Pick one and start a real course or bootcamp track." },
    { week: "Week 3", title: "Ship something small but real", detail: "A working app, automation, or analysis. Anything you can point at and say 'I built that.'" },
    { week: "Week 4", title: "Apply or talk to a program", detail: "If you're serious, talk to admissions at a bootcamp. Even just to scope timelines." },
  ],
  "Very High": [
    { week: "Week 1", title: "Stop scrolling, start scoping", detail: "Block 1 hour a day this week. No exceptions. This is your runway." },
    { week: "Week 2", title: "Join one masterclass or intro course", detail: "Move from \"thinking about it\" to \"in something.\" Free is fine — committed is the point." },
    { week: "Week 3", title: "Build your first real project", detail: "Not a tutorial. Something you'd be proud to show someone. Even tiny counts." },
    { week: "Week 4", title: "Decide your 6-month path", detail: "Career pivot or skill stack-up? Pick one. The biggest risk now is no decision." },
  ],
};

export interface DriverInsight {
  questionId: string;
  whyItMatters: string;
}

export const DRIVER_INSIGHTS: Record<string, string> = {
  q1: "Computer-based work is where AI is strongest today. The more your work lives on a screen, the more of it AI can do.",
  q2: "Repetitive work is the lowest-hanging fruit for AI. Anything that looks the same every week is a candidate for automation.",
  q3: "Writing is one of AI's strongest skills. The 'just write this email/report/post' part of your job is already done in seconds.",
  q4: "Moving and organising information is where AI quietly eats hours of your week. Spreadsheets, CRMs, forms — all targets.",
  q5: "If a task can be written as steps, it can usually be prompted as steps. SOP-heavy work is the most automatable kind.",
  q6: "Low decision-making roles are most exposed because AI is great at execution, not judgment. The fewer calls you make, the more your work looks like a script.",
  q7: "Heavy tool usage = heavy AI integration points. Most of these tools now have AI built in — you'll need to use them or fall behind.",
  q8: "If your output can be checked against a template, AI can usually produce it against a template too — faster and cheaper.",
  q9: "High-trust work is one of the safest moats. The less trust your role requires, the easier it is to swap in AI.",
  q10: "Physical presence is the strongest moat AI doesn't have. The less physical your job, the more exposed it is by default.",
  q11: "This is your own honest estimate. If you can already see 40%+ of your work going faster with AI, your employer can see it too.",
  q12: "This isn't about exposure — it's about adaptation. Low AI fluency is a personal risk on top of role risk. It's also the easiest one to fix.",
};

export function calculateRisk(answers: Record<string, number>): { score: number; level: RiskLevel } {
  const score = Object.values(answers).reduce((sum, v) => sum + v, 0);
  let level: RiskLevel;
  if (score <= 10) level = "Low";
  else if (score <= 20) level = "Medium";
  else if (score <= 28) level = "High";
  else level = "Very High";
  return { score, level };
}

// Returns the top N highest-scoring answers, used for "What's driving your score"
export function getTopDrivers(
  answers: Record<string, number>,
  n = 3
): { questionId: string; score: number; question: string; whyItMatters: string }[] {
  const entries = Object.entries(answers)
    .filter(([, score]) => score > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);

  return entries.map(([qid, score]) => {
    const q = QUESTIONS.find((q) => q.id === qid);
    return {
      questionId: qid,
      score,
      question: q?.question ?? "",
      whyItMatters: DRIVER_INSIGHTS[qid] ?? "",
    };
  });
}

export const INCOME_RANGES = [
  "Under $1,000 / mo",
  "$1,000 – $2,500 / mo",
  "$2,500 – $5,000 / mo",
  "$5,000 – $10,000 / mo",
  "$10,000+ / mo",
  "Prefer not to say",
];

export const PAIN_POINTS = [
  "I feel stuck in my career",
  "I'm worried about AI affecting my job",
  "I want higher income",
  "I want to change career",
  "I don't know what skill to learn",
  "I want remote or flexible work",
  "I'm just curious",
];

export const COUNTRIES = [
  "Malaysia",
  "Singapore",
  "Indonesia",
  "Philippines",
  "Thailand",
  "Vietnam",
  "India",
  "United States",
  "United Kingdom",
  "Australia",
  "Canada",
  "Other",
];
