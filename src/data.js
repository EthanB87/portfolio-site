// All site content lives here. Edit this file to update the site.

export const LINKS = {
  email: "ethanabrockman@gmail.com",
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
  ["Based in", "Waterloo, Ontario"],
  ["Works with", "Shops, makers & small businesses"],
  ["You deal with", "Me, start to finish"],
  ["By day", "Software engineer at Equitable Life"],
];

