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
    id: "trades",
    label: "Trades (electrician, plumber, etc.)",
    exposedTasks: [
      "Job estimates and quotes",
      "Scheduling and customer follow-ups",
      "Inventory and parts tracking",
    ],
    saferSkills: [
      "Hands-on problem solving on site",
      "Customer trust and word-of-mouth",
      "Working with new tools and tech in your trade",
    ],
    aiTools: [
      { name: "ChatGPT", useFor: "Draft quotes, invoices, and customer replies in seconds" },
      { name: "Jobber / Housecall Pro", useFor: "Scheduling, job tracking, and quotes" },
      { name: "Google Lens / Claude", useFor: "Snap a photo to get instant info on parts or codes" },
    ],
  },
  {
    id: "driver",
    label: "Driver / Delivery",
    exposedTasks: [
      "Route planning",
      "Customer communication and updates",
      "Logging trips and expenses",
    ],
    saferSkills: [
      "Local knowledge and on-the-fly decisions",
      "Customer service in person",
      "Adapting to new platforms and tools",
    ],
    aiTools: [
      { name: "ChatGPT", useFor: "Help with messages, taxes, and side-business ideas" },
      { name: "Google Maps / Waze AI", useFor: "Smarter routes and time savings" },
      { name: "Spending tracker apps", useFor: "Auto-categorise your fuel and expenses" },
    ],
  },
  {
    id: "caregiver",
    label: "Caregiver / Childcare",
    exposedTasks: [
      "Scheduling and family communication",
      "Logging meals, naps, or care notes",
      "Researching activities and learning ideas",
    ],
    saferSkills: [
      "Emotional support and presence",
      "Patience and one-on-one care",
      "Real-world judgment in tough moments",
    ],
    aiTools: [
      { name: "ChatGPT", useFor: "Quick activity ideas, recipes, and family messages" },
      { name: "Khanmigo / Khan Academy", useFor: "Help kids with homework, your way" },
      { name: "Notion / Google Keep AI", useFor: "Track schedules, milestones, and notes" },
    ],
  },
  {
    id: "construction",
    label: "Construction / Manual work",
    exposedTasks: [
      "Site reports and admin",
      "Material ordering",
      "Scheduling subcontractors",
    ],
    saferSkills: [
      "Physical skill and safety on site",
      "Leading a team in person",
      "Knowing your trade better than any AI does",
    ],
    aiTools: [
      { name: "ChatGPT", useFor: "Draft reports, emails, and material lists fast" },
      { name: "Procore / Buildertrend", useFor: "Project tracking with AI features built in" },
      { name: "Camera + Google Lens", useFor: "Identify parts or problems on the spot" },
    ],
  },
  {
    id: "artist",
    label: "Artist / Musician / Creator",
    exposedTasks: [
      "Basic stock-style art or background music",
      "Routine editing and resizing",
      "Captions and social media posts",
    ],
    saferSkills: [
      "Your unique style and voice",
      "Live performance or events",
      "Building a real audience that follows YOU",
    ],
    aiTools: [
      { name: "Midjourney / Ideogram", useFor: "Concept art and moodboards in minutes" },
      { name: "Suno / Udio", useFor: "Sketch song ideas and demos fast" },
      { name: "CapCut / Descript", useFor: "Edit video and audio in a fraction of the time" },
    ],
  },
  {
    id: "parent",
    label: "Stay-at-home parent",
    exposedTasks: [
      "Meal planning and shopping lists",
      "Schedules and family admin",
      "Homework help and learning prep",
    ],
    saferSkills: [
      "Being present for your kids",
      "Real-world life skills nobody can outsource",
      "Building anything you want to start, with AI as a helper",
    ],
    aiTools: [
      { name: "ChatGPT", useFor: "Meal plans, family schedules, homework explanations" },
      { name: "Khanmigo", useFor: "A patient tutor for the kids" },
      { name: "Canva AI", useFor: "Make printables, invites, and projects in minutes" },
    ],
  },
  {
    id: "retired",
    label: "Retired",
    exposedTasks: [
      "Paperwork and admin (taxes, bills, forms)",
      "Travel planning",
      "Researching health, finance, or hobbies",
    ],
    saferSkills: [
      "Lifetime experience nobody else has",
      "Mentoring younger people",
      "Choosing what to spend time on",
    ],
    aiTools: [
      { name: "ChatGPT", useFor: "Help with forms, research, and writing letters" },
      { name: "Perplexity", useFor: "Plain-English answers with sources" },
      { name: "Google Translate AI", useFor: "Travel, recipes, and connecting with family" },
    ],
  },
  {
    id: "jobseeker",
    label: "Looking for work",
    exposedTasks: [
      "Generic CVs and cover letters",
      "Repetitive online applications",
      "Standard interview prep",
    ],
    saferSkills: [
      "Real projects and proof of work",
      "Reaching out to humans directly",
      "Using AI to apply smarter, not just more",
    ],
    aiTools: [
      { name: "ChatGPT / Claude", useFor: "Tailor each application to the role in minutes" },
      { name: "LinkedIn AI", useFor: "Profile, job search, and cold outreach" },
      { name: "Teal / Huntr", useFor: "Track jobs and improve your CV with AI feedback" },
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
    title: "Low",
    shortSummary:
      "Your work needs things AI is bad at — being there in person, real judgment, and trust with people. The main part of your job is safer than most.",
    realTalk:
      "Low does not mean none. The parts of your job you don't think about much — emails, reports, planning, looking things up — those will get done in 5 minutes instead of 5 hours.\n\nThe people who learn to use AI for these parts get noticed. You have more time than most to pick it up. Don't waste it.",
    primaryCTA: { label: "Get the Beginner AI Skills Guide", href: "https://sigmaschool.co" },
    secondaryCTA: { label: "Free Masterclass: AI for Your Career", href: "https://sigmaschool.co" },
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    gaugeColor: "#10b981",
    percentileCopy: "You scored lower than about 62% of people who took this quiz.",
  },
  Medium: {
    level: "Medium",
    title: "Medium",
    shortSummary:
      "Big parts of your job — writing, organizing, reporting, replying — can already be done much faster with AI. Your job is not going away. The simple version of it is getting cheaper.",
    realTalk:
      "Your job probably won't be replaced. Some of your tasks will. The person still doing those tasks by hand in 2 years will look like the person still printing emails in 2010.\n\nThe move: stop being the one doing the task. Become the one deciding how the task gets done. That's a different job — and a more valuable one.",
    primaryCTA: { label: "Get the AI Career Roadmap", href: "https://sigmaschool.co" },
    secondaryCTA: { label: "Join the Free Masterclass", href: "https://sigmaschool.co" },
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    gaugeColor: "#f59e0b",
    percentileCopy: "You scored higher than about 48% of people who took this quiz.",
  },
  High: {
    level: "High",
    title: "High",
    shortSummary:
      "A big chunk of your job is on a computer, repeats often, and can be written as steps. That's exactly the kind of work AI is now really good at — and where bosses will look first to do more with less.",
    realTalk:
      "This isn't doom. But the math is real: your boss will expect more from you, faster, with smaller teams.\n\n\"Learn ChatGPT\" isn't enough anymore. Build something AI can't easily copy — technical skills, automation, and real projects you can show. That's how your work becomes worth more, not less.",
    primaryCTA: { label: "Join the Free AI Career Masterclass", href: "https://sigmaschool.co" },
    secondaryCTA: { label: "Get the Beginner Roadmap", href: "https://sigmaschool.co" },
    color: "text-orange-700",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    gaugeColor: "#ea580c",
    percentileCopy: "You scored higher than about 71% of people who took this quiz.",
  },
  "Very High": {
    level: "Very High",
    title: "Very High",
    shortSummary:
      "Most of what you do is on a computer, repeats often, and follows clear steps. That's exactly what AI is pointed at right now — not in some future, but with tools that already exist.",
    realTalk:
      "The honest version: if you wait 12 months, the gap between you and people who use AI well will be hard to close. The good news? Most people will wait. That's your edge — if you start now.\n\nDon't try to race AI doing your old tasks. You'll lose. Move up: pick a skill where AI is your tool, not your rival. Building things with AI is the clearest path right now.",
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
    { week: "Week 1", title: "Pick one AI tool and use it 4 times", detail: "Try ChatGPT or Claude. Use it for something real at work — not a toy task." },
    { week: "Week 2", title: "Replace one slow task with AI", detail: "Find one task that takes you more than 30 minutes a week. Cut it in half." },
    { week: "Week 3", title: "Learn one new skill", detail: "Pick one: simple coding, working with data, or using a tool like Zapier." },
    { week: "Week 4", title: "Share what you learned", detail: "Post a short note on LinkedIn or tell a friend. Teaching helps you remember." },
  ],
  Medium: [
    { week: "Week 1", title: "List your weekly tasks", detail: "Write down everything you do in a normal week. Mark the ones AI could help with." },
    { week: "Week 2", title: "Automate one of them", detail: "Use ChatGPT, Zapier, or a simple tool to do it for you. Save the time." },
    { week: "Week 3", title: "Make something you can show", detail: "A small project, template, or guide. Something you can point at and say 'I made that.'" },
    { week: "Week 4", title: "Talk to one person doing it well", detail: "A quick coffee or a message on LinkedIn. Ask how AI changed their week." },
  ],
  High: [
    { week: "Week 1", title: "Be honest about your tasks", detail: "Write down what you did last week. Circle anything AI could already do." },
    { week: "Week 2", title: "Start learning a real skill", detail: "Pick one: coding, data, or AI tools. Sign up for a real course — free or paid." },
    { week: "Week 3", title: "Make one small real thing", detail: "An app, automation, or analysis. Something working. Even tiny counts." },
    { week: "Week 4", title: "Look at a program", detail: "If you're serious, look at a course or bootcamp. Just to see what's there." },
  ],
  "Very High": [
    { week: "Week 1", title: "Block one hour a day", detail: "Same time every day. No phone. This is your hour to learn." },
    { week: "Week 2", title: "Join one course or masterclass", detail: "Move from thinking about it to being in something. Free is fine — what matters is starting." },
    { week: "Week 3", title: "Build your first real thing", detail: "Not a tutorial. Something you'd be proud to show a friend. Even tiny is fine." },
    { week: "Week 4", title: "Pick your next 6 months", detail: "New career or grow your current one? Pick one. The biggest risk now is not deciding." },
  ],
};

export interface DriverInsight {
  questionId: string;
  whyItMatters: string;
}

export const DRIVER_INSIGHTS: Record<string, string> = {
  q1: "AI is best at work on a screen. The more your job lives on a computer, the more of it AI can do.",
  q2: "Tasks that repeat are the easiest for AI to take over. Anything that looks the same every week is at risk.",
  q3: "Writing is one of AI's strongest skills. If your job is writing emails, reports, or posts — AI can do it in seconds.",
  q4: "Moving info around (spreadsheets, forms, copying things into systems) is where AI quietly eats hours of your week.",
  q5: "If you can write your job as steps, AI can be told to do those steps. Steps are easy to copy.",
  q6: "Jobs with fewer decisions are easier for AI to do. The fewer calls you make on your own, the more your work looks like a script.",
  q7: "Tools like Excel, Canva, and CRMs all have AI built in now. If you use them a lot, you'll feel AI fast.",
  q8: "If your work can be checked against a template, AI can usually make it match that template too. Faster and cheaper.",
  q9: "Trust is one of AI's weak spots. The less trust your job needs, the easier it is to swap in AI.",
  q10: "Being there in person is something AI can't do. The less physical your job, the more open it is to AI.",
  q11: "This is your own honest guess. If you can see lots of your work going faster with AI, your boss can see it too.",
  q12: "This one is about you, not your job. Not using AI is a risk. The good news: it's the easiest one to fix.",
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
