// All site content lives here. Edit this file to update the site.

// One source of truth for business details. Used in page copy, footer, forms and JSON-LD,
// so the name and contact details stay identical everywhere.
export const BUSINESS = {
  name: "Ethan Brockman",
  url: "https://ethanbrockman.tech",
  email: "ethanabrockman@gmail.com",
  area: "Greater Toronto Area, Ontario",
};

export const LINKS = {
  email: BUSINESS.email,
  linkedin: "https://linkedin.com/in/ethanbrockman",
  github: "https://github.com/EthanB87",
};

export const PROJECTS = [
  {
    // Flagship entry, written for small business owners, not developers.
    title: "Siren's Grotto Book Boutique",
    featured: true,
    eyebrow: "Featured · Client project",
    status: "Live",
    live: true,
    link: "https://sirensgrotto.ca",
    linkLabel: "sirensgrotto.ca",
    story: [
      "Sarah runs Siren's Grotto, a small independent bookshop in Canada. She was launching an online shop alongside her market pop-ups, with a mobile book trailer on the way in 2027. She needed a website that felt like her brand and actually sold books.",
      "Visitors arrive through a one-of-a-kind descent into the grotto, a short underwater animation that sets the mood before the shop opens up. From there, readers browse by genre or by mood, add books to a cart that looks like the rest of the shop, and check out securely in Canadian dollars.",
    ],
    feats: [
      "Made for phones first, because that's where almost all of Sarah's customers shop. It loads fast on any of them.",
      "Real, secure checkout in Canadian dollars, built right into the shop",
      "Sarah runs it herself. Inventory, her monthly featured pick, its blurb and its spice rating all live in a simple spreadsheet, and the site updates itself overnight. She doesn't need a developer for day-to-day changes.",
      "Built around the brand she already had (her colours, her hand-lettered logo, her voice) rather than a template",
    ],
    // Screenshots from Sarah's site on an iPhone, resized to 600px wide.
    shots: [
      { src: "/work/sirens-grotto/descent.jpg", caption: "Arriving in the grotto" },
      { src: "/work/sirens-grotto/shop.jpg", caption: "Browsing the shop on a phone" },
      { src: "/work/sirens-grotto/cart.jpg", caption: "Cart & secure checkout" },
    ],
    cta: "Have a shop, a brand, or an idea you want to bring online? I'd love to build it with you.",
    stack: ["React", "TypeScript", "Vite"],
  },
  {
    title: "Apsis",
    kind: "My own product",
    status: "In progress",
    live: false,
    link: "https://apsistraining.com",
    repo: "https://github.com/EthanB87/Apsis",
    blurb:
      "An iPhone app for people who both lift weights and run. It keeps all their training in one place and turns it into one simple score, so they know whether to push hard today or take it easy.",
    feats: [
      "Green, amber or red at a glance: how ready you are to train today",
      "Connects with Apple Health",
      "Food tracking with barcode scanning and shareable summaries",
      "Works fully offline, even with no signal",
    ],
    stack: ["Swift", "SwiftUI"],
  },
  {
    title: "Waveover",
    kind: "My own product",
    status: "In progress",
    live: false,
    repo: "https://github.com/EthanB87/Waveover",
    blurb:
      "One inbox on your phone for every AI assistant that needs a person to sign off. When an AI tool is waiting on a decision, you get a notification and can approve it with one tap, from anywhere.",
    feats: [
      "One-tap approve or reply, right from the notification",
      "Installs on your phone like an app",
      "Free and open source",
    ],
    stack: ["TypeScript", "React"],
  },
];

export const SERVICES = [
  {
    title: "Custom websites",
    body: "A site designed around your brand, with your colours, your logo and your voice, instead of a template that looks like everyone else's. Fast and good-looking on every phone.",
  },
  {
    title: "Online shops",
    body: "Sell online with real, secure checkout. Browsing and buying are designed to feel easy on a phone, because that's where most of your customers are.",
  },
  {
    title: "Updates you make yourself",
    body: "Change products, prices or your featured pick from something as simple as a spreadsheet. You don't need to call a developer for everyday changes.",
  },
  {
    title: "Help after launch",
    body: "I don't disappear once the site is live. If something needs fixing or you want to add something new, you know exactly who to call.",
  },
];

export const PROCESS = [
  {
    title: "We talk",
    body: "Tell me about your business, your customers and what you want your website to do. No tech knowledge needed. That part's my job.",
  },
  {
    title: "I design",
    body: "You see how your site will look and feel before it's built, and we shape it together until it feels like yours.",
  },
  {
    title: "I build",
    body: "I build it properly: quick to load on phones, secure, and easy for you to look after. You'll see progress along the way.",
  },
  {
    title: "Launch & beyond",
    body: "We go live, I show you how to make your own updates, and I'm around whenever you need a hand.",
  },
];

export const FACTS = [
  ["Based in", BUSINESS.area],
  ["Works with", "Shops, makers & small businesses"],
  ["You deal with", "Me, start to finish"],
  ["By day", "Software engineer at Equitable Life"],
];

// ---------- services ----------

// The three services, used by the home page teaser and the /services overview.
export const SERVICE_LINES = [
  {
    key: "websites",
    title: "Websites & online shops",
    short: "Custom websites and online shops built around your brand, fast on every phone, and easy for you to update.",
    href: "/#contact",
    cta: "Talk to me about a website",
  },
  {
    key: "ai-visibility",
    title: "AI visibility",
    short: "When homeowners ask ChatGPT, Gemini or Claude who to call, I help your business be one of the names. Starting with roofing and exterior contractors in the GTA.",
    href: "/services/ai-visibility/",
    cta: "How AI visibility works",
    price: "Free snapshot, then from $850 CAD plus HST",
  },
  {
    key: "ai-consulting",
    title: "AI consulting",
    short: "I find where AI can save your team time, then build the automations, tools and approval-based AI agents to do it.",
    href: "/services/ai-consulting/",
    cta: "How AI consulting works",
  },
];

export const VISIBILITY = {
  problem: [
    "Homeowners can now ask ChatGPT, Gemini or Claude who to call for a new roof or new siding. The answer usually names only a few businesses.",
    "If yours isn't one of them, that homeowner may never hear your name.",
    "These tools build their answers from what they can find about you: your Google Business Profile, directory listings, reviews, your website, and what other sites say about you. When those facts are missing, out of date or don't match, you're easy to skip.",
  ],
  steps: [
    {
      title: "Measure",
      body: "I ask ChatGPT, Gemini and Claude the questions your customers ask, like \"who's the best roofer in Oakville?\", many times over. You get your recommendation rate: how often you're named, and who gets named instead.",
    },
    {
      title: "Fix",
      body: "I fix what AI reads about you: your Google Business Profile, directory listings, the key pages on your website, and the basic facts about your business, so they're complete and match everywhere.",
    },
    {
      title: "Re-test",
      body: "Every month I run the same questions again and show you what changed, so you can see whether it's working.",
    },
  ],
  tiers: [
    {
      name: "Free snapshot",
      price: 0,
      priceLabel: "Free",
      blurb: "Who AI names in your town, and whether you're on the list.",
      includes: [
        "The questions homeowners ask about your trade in your town",
        "Which businesses ChatGPT, Gemini and Claude name",
        "Whether you're named, and how often",
      ],
    },
    {
      name: "Audit and fix sprint",
      price: 850,
      priceLabel: "$850",
      unit: "CAD, one time",
      blurb: "A full test, then I fix what AI reads about your business.",
      includes: [
        "Your full recommendation rate across ChatGPT, Gemini and Claude",
        "A review of your Google Business Profile, listings, website pages and business facts",
        "Fixes to the listings, pages and facts AI reads",
        "A written report of what I found and what I changed",
      ],
      featured: true,
    },
    {
      name: "Monthly tracking",
      price: 299,
      priceLabel: "$299",
      unit: "CAD a month, 3-month minimum",
      monthly: true,
      blurb: "Re-test every month and keep improving.",
      includes: [
        "Your recommendation rate re-tested every month",
        "A monthly report on what changed and who's being named",
        "Ongoing fixes as your listings and pages need them",
        "If your recommendation rate hasn't clearly improved after 90 days, month four is free",
      ],
    },
  ],
  faq: [
    {
      q: "Can you guarantee that AI tools will recommend my business?",
      a: "No. Nobody controls what ChatGPT, Gemini or Claude say. What I can do is measure how often you're named, fix the information these tools rely on, and show you every month whether it's working.",
    },
    {
      q: "What is a recommendation rate?",
      a: "It's how often an AI tool names your business when asked a question a customer would ask. I ask each question many times, because the answers change from one try to the next.",
    },
    {
      q: "Is this the same as SEO?",
      a: "It overlaps, but it isn't the same. Regular SEO aims for a spot in Google's list of results. This focuses on being one of the few businesses an AI tool names in its answer. Many of the fixes, like accurate listings and clear pages, help with both.",
    },
    {
      q: "Who is this for?",
      a: "Right now, roofing and exterior contractors in the Greater Toronto Area. If you run a different local service business, get in touch anyway and I'll tell you honestly whether it's a fit.",
    },
    {
      q: "What if my recommendation rate doesn't improve?",
      a: "If it hasn't clearly improved after 90 days of monthly tracking, your fourth month is free. I'll also show you what I tried and what I'd change.",
    },
    {
      q: "How long do I have to commit?",
      a: "Monthly tracking has a 3-month minimum. The audit and fix sprint is a one-time payment with nothing to renew.",
    },
  ],
};

export const CONSULTING = {
  who: [
    "Small and mid-sized businesses that know AI could help, but aren't sure where to start",
    "Teams that lose hours to repetitive work, like copying data between systems, writing the same emails or chasing paperwork",
    "Owners who want AI to help, but want a person to check anything important before it happens",
  ],
  offers: [
    {
      title: "Find where AI saves time",
      body: "I look at how your team actually works and find the tasks where AI can help. You get a short, plain list of where it's worth doing and where it isn't.",
    },
    {
      title: "Build automations and internal tools",
      body: "I build the tools: automations that move information between your systems, internal tools your team uses every day, and AI features that fit how you already work.",
    },
    {
      title: "AI agents with a human approval step",
      body: "I set up AI agents that do real work, like drafting replies or updating records, but wait for a person to approve anything important before it happens.",
    },
  ],
  steps: [
    {
      title: "We talk",
      body: "You tell me how your business runs and where the time goes. If I don't think AI will help, I'll tell you.",
    },
    {
      title: "A clear plan",
      body: "I write up what I'd build, how long it will take and what it will cost, before any work starts.",
    },
    {
      title: "Build and hand over",
      body: "I build it, test it with your team, and show everyone how it works.",
    },
    {
      title: "Support",
      body: "I'm around after launch to fix problems and make changes as your needs grow.",
    },
  ],
  faq: [
    {
      q: "Do I need to be technical to work with you?",
      a: "No. You tell me how your business works and I handle the technical side, explained in plain language.",
    },
    {
      q: "Will AI replace my staff?",
      a: "That isn't the goal. The goal is to take repetitive work off your team so they can spend their time on work that needs a person.",
    },
    {
      q: "What does a human approval step mean?",
      a: "It means the AI can prepare the work, but a person approves it before anything is sent, changed or paid. You decide which actions need approval.",
    },
    {
      q: "Which AI tools do you use?",
      a: "Whichever fits the job. I'll recommend tools that suit the work, your budget and how you handle your data.",
    },
    {
      q: "How much does it cost?",
      a: "It depends on the project. You'll get a clear price in writing before any work starts.",
    },
  ],
};

// Areas served, used in JSON-LD. Together these make up the GTA.
export const GTA_AREAS = [
  "City of Toronto",
  "Peel Region",
  "York Region",
  "Durham Region",
  "Halton Region",
];
