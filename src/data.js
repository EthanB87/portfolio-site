// All site content lives here — edit this file to update the portfolio.

export const LINKS = {
  email: "ethanabrockman@gmail.com",
  linkedin: "https://linkedin.com/in/ethanbrockman",
  github: "https://github.com/EthanB87",
};

export const PROJECTS = [
  {
    title: "Siren's Grotto Book Boutique",
    status: "Live",
    live: true,
    link: "https://sirensgrotto.ca",
    blurb:
      "A phone-first bookshop for an independent Canadian seller. You arrive through a hand-built underwater loader, then browse by category or trope and check out in CAD. It's a real store, built mobile-first and fast enough to feel like one.",
    feats: [
      "Hand-rolled SVG/canvas 'descent into the grotto' loader — 60fps, reduced-motion aware",
      "Phone-first purchase path: category → trope filter → themed cart → Stripe (CAD)",
      "WCAG AA + Lighthouse mobile 90+ — ≥44px targets, focus rings, transform/opacity-only animation",
      "Locked six-hex brand system enforced via design tokens — no hardcoded colors or fonts",
    ],
    stack: ["React", "TypeScript", "Vite", "Framer Motion", "Stripe (CAD)"],
  },
  {
    title: "Apsis",
    status: "In build",
    live: true,
    link: "https://apsistraining.com",
    repo: "https://github.com/EthanB87/Apsis",
    blurb:
      "A training tracker for hybrid athletes on iOS. It logs your lifting and running in one place, then rolls both into a single training-load score you can actually act on.",
    feats: [
      "Hybrid Stress Score (HSS) — one training-load number across lifting & running",
      "Green/amber/red readiness bands + Apple Health integration",
      "Nutrition tracking with barcode scanning & shareable summary cards",
      "Offline-first — fully functional with no connection",
    ],
    stack: ["Swift", "SwiftUI", "HealthKit", "Offline-first"],
  },
  {
    title: "Waveover",
    status: "In build",
    live: false,
    repo: "https://github.com/EthanB87/Waveover",
    blurb:
      "One inbox on your phone for every AI agent that needs a human. It's open-source and self-hostable, and the notifications carry one-tap respond and approve, so you can unblock an agent from anywhere.",
    feats: [
      "Vendor-neutral — any agent that can hit a webhook: Claude Code, Codex, n8n, GitHub Actions",
      "Fully self-hostable, zero third-party services (Web Push via standard VAPID)",
      "Installable PWA with iOS push + add-to-home-screen flow",
      "One-tap respond/approve unblocks the agent live in its terminal",
    ],
    stack: ["TypeScript", "Node / Drizzle", "React + Vite PWA", "Web Push (VAPID)", "CLI (Commander)"],
  },
];

export const TIMELINE = [
  {
    when: "2023 — PRESENT",
    now: true,
    role: "Software Engineer",
    org: "Equitable Life of Canada · Waterloo, ON",
    body: "Full-stack work on insurance products used by thousands of advisors and policyholders. I build React and TypeScript front ends over .NET services on Azure. I'm also on call for what I ship, so the monitoring is mine and so are the incidents when something breaks at 2am.",
  },
  {
    when: "ONGOING",
    now: false,
    role: "Independent Builder",
    org: "Own Products & Client Work",
    body: "Designing and building products end to end, for myself and for clients. Recent work runs from a storefront for an indie bookseller to an iOS training tracker to an open-source tool for other developers. When it's my own, I handle all of it — the UI, the APIs behind it, the billing, and the slow work of getting anyone to use it.",
  },
  {
    when: "2023 — 2026",
    now: false,
    role: "Diploma, Computer Programming & Analysis",
    org: "Conestoga College · 3.9 GPA",
    body: "Coursework in cloud-native development — Node.js, Docker, .NET APIs — plus IT entrepreneurship, where I wrote a full B2B SaaS business plan and pitched it to investors.",
  },
];

export const FACTS = [
  ["FOCUS", "Front-end-leaning full stack"],
  ["DAILY DRIVERS", "React · TypeScript · .NET"],
  ["CLOUD", "Azure · Docker · CI/CD"],
  ["ON-CALL", "Yes — and I own incidents"],
  ["BASED IN", "Waterloo, Ontario"],
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
      ["Swift", ""],
      ["SwiftUI", ""],
    ],
  },
  {
    head: "Back end",
    items: [
      [".NET / C#", "APIs", true],
      ["Node.js", ""],
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
