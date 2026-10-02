// All site content lives here. Edit this file to update the site.

// One source of truth for business details. Used in page copy, footer, forms and JSON-LD,
// so the name and contact details stay identical everywhere. The phone number is not here
// on purpose: see src/components/CallButton.jsx.
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

// ---------- the three lines ----------
// Each service is a line on the route map, in the order a customer meets a business:
// they find it, they choose it, and the business runs well enough to keep up.
export const LINES = [
  {
    key: "ai-visibility",
    color: "orange",
    line: "Get found",
    title: "AI visibility",
    short: "When people ask ChatGPT, Gemini or Claude who to call, I help your business be one of the names they hear.",
    stops: ["Measure", "Fix", "Re-test"],
    href: "/services/ai-visibility/",
    linkLabel: "How AI visibility works",
    price: "Starts with a free snapshot",
  },
  {
    key: "websites",
    color: "steel",
    line: "Get chosen",
    title: "Websites & online shops",
    short: "A website built around your brand that's fast on every phone, makes it easy to book or buy, and lets you make your own updates.",
    stops: ["Design", "Build", "Launch"],
    href: "/services/#websites",
    linkLabel: "What a website includes",
    price: "Fixed quote after a free consultation",
  },
  {
    key: "ai-consulting",
    color: "charcoal",
    line: "Run smoother",
    title: "AI consulting",
    short: "I find the repetitive work eating your week, then build the automations and tools that take it off your plate, with a person approving anything important.",
    stops: ["Find", "Build", "Hand over"],
    href: "/services/ai-consulting/",
    linkLabel: "How AI consulting works",
    price: "Fixed quote after a free consultation",
  },
];

// What happens after someone gets in touch. Shown on every page next to the consultation form.
export const NEXT_STEPS = [
  {
    title: "Free consultation",
    body: "We talk about your business and what you need. There's no cost and no obligation.",
  },
  {
    title: "A fixed quote",
    body: "You get a plan and a fixed price in writing before any work starts.",
  },
  {
    title: "I do the work",
    body: "I keep you updated along the way, in plain language.",
  },
  {
    title: "Ongoing help",
    body: "I'm around afterwards for fixes, changes and questions.",
  },
];

// ---------- work ----------

export const PROJECTS = [
  {
    // Flagship entry, written for small business owners, not developers.
    title: "Siren's Grotto Book Boutique",
    featured: true,
    kind: "Client project",
    line: "steel",
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
      "Readable by AI assistants and search engines, with a plain-text version of the shop and up-to-date facts they can trust",
    ],
    caseStudy: { href: "/services/ai-visibility/#case-study", label: "How I made it readable to AI" },
    // Screenshots from Sarah's site on an iPhone, resized to 600px wide.
    shots: [
      { src: "/work/sirens-grotto/descent.jpg", caption: "Arriving in the grotto" },
      { src: "/work/sirens-grotto/shop.jpg", caption: "Browsing the shop on a phone" },
      { src: "/work/sirens-grotto/cart.jpg", caption: "Cart and secure checkout" },
    ],
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
    stack: ["React Native"],
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

// What a website includes. Shown on /services.
export const WEBSITE_FEATURES = [
  {
    title: "Built around your brand",
    body: "Your colours, your logo and your voice, instead of a template that looks like everyone else's.",
  },
  {
    title: "Fast on every phone",
    body: "Most of your customers will find you on a phone, so that's where I design first.",
  },
  {
    title: "Booking, buying or calling, made easy",
    body: "Whatever you want visitors to do next, the site makes it the obvious thing to do. Online shops get real, secure checkout.",
  },
  {
    title: "Updates you make yourself",
    body: "Change products, prices or hours from something as simple as a spreadsheet, without calling a developer.",
  },
];

export const FACTS = [
  ["Based in", BUSINESS.area],
  ["Works with", "Local and service businesses"],
  ["You deal with", "Me, start to finish"],
  ["By day", "Software engineer"],
];

// ---------- AI visibility ----------

export const VISIBILITY = {
  problem: [
    "People can now ask ChatGPT, Gemini or Claude who to call for a plumber, a dentist, an accountant or a cleaner. The answer usually names only a few businesses.",
    "If yours isn't one of them, that customer may never hear your name.",
    "These tools build their answers from what they can find about you: your Google Business Profile, directory listings, reviews, your website, and what other sites say about you. When those facts are missing, out of date or don't match, you're easy to skip.",
  ],
  steps: [
    {
      title: "Measure",
      body: "I ask ChatGPT, Gemini and Claude the questions your customers ask, like \"who's the best plumber in Mississauga?\", many times over. You get your recommendation rate: how often you're named, and who gets named instead.",
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
        "The questions customers ask about your service in your town",
        "Which businesses ChatGPT, Gemini and Claude name",
        "Whether you're named, and how often",
      ],
    },
    {
      name: "Audit and fix sprint",
      price: 850,
      priceLabel: "$850",
      unit: "one time",
      blurb: "A full test, then I fix what AI reads about your business.",
      includes: [
        "Your full recommendation rate across ChatGPT, Gemini and Claude",
        "A review of your Google Business Profile, listings, website pages and business facts",
        "Fixes to the listings, pages and facts AI reads",
        "A written report of what I found and what I changed",
      ],
    },
    {
      name: "Monthly tracking",
      price: 299,
      priceLabel: "$299",
      unit: "a month, 3-month minimum",
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
  // Real client work. Keep it to what's actually been done; add numbers (Search Console,
  // first AI answer that names the shop) to `outcome` once they exist.
  caseStudy: {
    title: "Making Siren's Grotto readable to AI",
    client: "Siren's Grotto Book Boutique, an independent Canadian online bookshop",
    link: "https://sirensgrotto.ca",
    linkLabel: "Visit sirensgrotto.ca",
    problem: [
      "Shoppers saw a polished, animated bookshop. The programs that read the web for AI tools saw an empty page, because the shop is built with code that most AI crawlers, including those behind ChatGPT, Claude and Perplexity, don't run.",
      "So when someone asked an AI assistant where to buy romantasy books in Canada, the shop was invisible. And because the catalogue changes all the time, anything written by hand would go out of date within days.",
    ],
    fixes: [
      {
        title: "A version of the shop AI can read",
        body: "Every in-stock book with its author and price in Canadian dollars, plus categories, upcoming market dates, an FAQ and contact details, in plain text that crawlers can read. Shoppers still get the animated store.",
      },
      {
        title: "The facts, in a format machines understand",
        body: "Structured data that tells search engines and AI assistants what the store sells, who it serves, what things cost, what's in stock, and when the next pop-up markets are.",
      },
      {
        title: "Files written for AI assistants",
        body: "A plain-language summary of the business and a full catalogue file for AI assistants to read, a sitemap that includes book covers, and a robots.txt that welcomes AI and search crawlers.",
      },
      {
        title: "Links that preview properly",
        body: "Shared links show the right title, image and description on Instagram, Facebook, iMessage and similar.",
      },
    ],
    upkeep: "All of it is rebuilt from the same inventory the shop runs on, every time the site updates. Sarah doesn't have to maintain any of it.",
    outcome: "The shop went from invisible to AI crawlers to giving them a complete, accurate picture of its catalogue and business on every page.",
  },
  // A made-up example of the monthly report, clearly labelled as such on the page.
  // No real client or real results.
  sampleReport: {
    business: "Example Plumbing Co.",
    town: "Mississauga",
    question: "Who's the best plumber in Mississauga?",
    asked: 20,
    rows: [
      { tool: "ChatGPT", before: 2, after: 7 },
      { tool: "Gemini", before: 0, after: 4 },
      { tool: "Claude", before: 1, after: 5 },
    ],
    notes: [
      "Fixed: business hours and service area didn't match between Google and the website",
      "Added: a clear services page for drain cleaning and water heaters",
      "Still named ahead of you: two competitors with more recent reviews",
    ],
  },
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
      a: "Local service businesses in the Greater Toronto Area: trades and contractors, clinics, salons, cleaners, law and accounting firms, and similar. If you're not sure, ask and I'll tell you honestly whether it's a fit.",
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

// ---------- AI consulting ----------

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
      title: "Free consultation",
      body: "You tell me how your business runs and where the time goes. If I don't think AI will help, I'll tell you.",
    },
    {
      title: "A fixed quote",
      body: "I write up what I'd build, how long it will take and what it will cost, before any work starts.",
    },
    {
      title: "Build and hand over",
      body: "I build it, test it with your team, and show everyone how it works.",
    },
    {
      title: "Support",
      body: "I'm around afterwards to fix problems and make changes as your needs grow.",
    },
  ],
  faq: [
    {
      q: "How much does it cost?",
      a: "The consultation is free. After it, you get a fixed price in writing before any work starts, so there are no surprises.",
    },
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
