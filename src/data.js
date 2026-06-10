// All site content lives here — edit this file to update the portfolio.

export const LINKS = {
  email: "ethanabrockman@gmail.com",
  linkedin: "https://linkedin.com/in/ethanbrockman",
  github: "https://github.com/EthanB87",
};

export const PROJECTS = [
  {
    title: "Restaurant BOH Platform",
    status: "In build",
    live: true,
    blurb:
      "Back-of-house intelligence for independent restaurants — turning invoices and POS data into food-cost answers owners actually act on.",
    feats: [
      "AI invoice ingestion & line-item food cost tracking",
      "Variance detection between theoretical & actual costs",
      "POS integrations: Square, Toast, Lightspeed, Clover",
      "Menu profitability analyzer + review-response autopilot",
    ],
    stack: ["React", "TypeScript", "Node", "PostgreSQL", "LLM pipelines"],
  },
  {
    title: "ScriptForge",
    status: "In build",
    live: false,
    blurb:
      "AI production studio for faceless YouTube channels — from idea to publish-ready script, with a full content pipeline on the roadmap.",
    feats: [
      "Multi-step AI script generation & planning workflows",
      "Modular studio architecture: research → script → schedule",
      "YouTube Data API integration for publishing & analytics",
    ],
    stack: ["React", "TypeScript", "YouTube API", "LLM orchestration"],
  },
];

export const TIMELINE = [
  {
    when: "2023 — PRESENT",
    now: true,
    role: "Software Engineer",
    org: "Equitable Life of Canada · Waterloo, ON",
    body: "Full-stack development on insurance products serving thousands of advisors and policyholders. Building React + TypeScript front ends over .NET services on Azure, with on-call ownership of what I ship — incident response, monitoring, and the discipline that comes with code that can't quietly fail.",
  },
  {
    when: "ONGOING",
    now: false,
    role: "Founder & Builder",
    org: "Independent SaaS · Self-funded",
    body: "Designing, building, and taking products to market solo: restaurant operations software and creator-economy tools. Everything from UI design and front-end architecture to APIs, billing, and go-to-market.",
  },
  {
    when: "2023 — 2026",
    now: false,
    role: "Diploma, Computer Programming & Analysis",
    org: "Conestoga College · 3.9 GPA",
    body: "Coursework spanning cloud-native development (Node.js, Docker, .NET APIs) and IT entrepreneurship — including a full B2B SaaS business plan, investor deck, and pitch.",
  },
];

export const FACTS = [
  ["FOCUS", "Front-end-leaning full stack"],
  ["DAILY DRIVERS", "React · TypeScript · .NET"],
  ["CLOUD", "Azure · Docker · CI/CD"],
  ["ON-CALL", "Yes — and I own incidents"],
  ["BASED IN", "Waterloo, Ontario"],
];

export const ABOUT_FACTS = [
  ["OFF-DUTY", "Trails, trips & tabletop"],
  ["NEXT SUMMIT", "Acatenango, Guatemala"],
  ["CURRENT CAMPAIGN", "D&D 5e, DM'ing"],
  ["DESIGN OPINION", "Strong, held loosely"],
];

export const SKILLS = [
  {
    head: "Front end",
    items: [
      ["React", "+ hooks & patterns", true],
      ["TypeScript", "", true],
      ["Nuxt 3 / Vue", ""],
      ["Tailwind CSS", ""],
      ["Vite, component systems", ""],
    ],
  },
  {
    head: "Back end",
    items: [
      [".NET / C#", "APIs", true],
      ["Node.js", ""],
      ["Python / FastAPI", ""],
      ["SQL & PostgreSQL", ""],
      ["REST design & integrations", ""],
    ],
  },
  {
    head: "Cloud & ops",
    items: [
      ["Azure", "", true],
      ["Docker & Compose", ""],
      ["CI/CD pipelines", ""],
      ["Monitoring & on-call", ""],
      ["GitHub Actions", ""],
    ],
  },
  {
    head: "Product",
    items: [
      ["LLM features", "in production", true],
      ["POS & third-party APIs", ""],
      ["Stripe billing", ""],
      ["UI/UX & brand sensibility", ""],
      ["Go-to-market research", ""],
    ],
  },
];
