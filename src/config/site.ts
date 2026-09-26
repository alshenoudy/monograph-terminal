export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name: "Monograph",
  tagline: "❯ whoami",
  title: "Monograph - A minimal Astro blog theme",
  description:
    "A text-first Astro theme for essays, notes, and long-form writing, with a command-palette search and a light/dark reading mode.",
  siteUrl: "https://monograph.xocoweb.workers.dev",
  authorName: "Andrei Alba",
  email: "hello@example.com",
  language: "en",
  dateLocale: "en-US",
  locale: "en_US",
  socialImage: "/og-image.png",
  /** Intro paragraph in the home hero. */
  about:
    "Monograph is a reading-first Astro theme. Notes on building software, published when there is something worth saying.",
  /**
   * Compact CV block rendered in the home hero and on the About page. `facts`
   * are label→value rows (an optional `href` turns the value into a link);
   * `experience` feeds the Experience component; leave either array empty
   * to drop that section entirely.
   */
  cv: {
    role: "Writer & software engineer",
    facts: [
      { label: "now", value: "Writing here and shipping Monograph" },
      { label: "prev", value: "Platform teams, 2019—2026", href: "/about/" },
      { label: "focus", value: "design systems, web performance, developer tools" },
    ],
    experience: [
      {
        period: "2026 — Now",
        title: "Staff Engineer",
        position: "Meridian Labs",
        description:
          "Own the design-system platform every product team builds on: tokens, primitives, docs, and the migration path off the legacy kit.",
      },
      {
        period: "2019 — 2026",
        title: "Senior Engineer",
        position: "Platform teams, Northwind",
        description:
          "Led the rebuild of the publishing pipeline. Cut p95 render time by 60% and made deploys boring.",
      },
      {
        period: "2016 — 2019",
        title: "Frontend Engineer",
        position: "Studio Mono",
        description:
          "Shipped marketing and editorial sites for clients, and learned to write markup that survives a redesign.",
      },
    ],
    resumeUrl: "",
  },
  /**
   * Both forms below ship enabled with an empty `action`, which makes them fully
   * interactive demos that submit nowhere: a small script confirms the submit
   * and clears the fields. Paste your provider's endpoint into `action` to send
   * real submissions, or set `enabled: false` to disable the controls outright.
   */
  newsletter: {
    enabled: true,
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "Get new posts by email",
    description: "One email when something new goes up. No spam, unsubscribe anytime.",
  },
  contact: {
    enabled: true,
    action: "",
    method: "post",
    responseTime: "Replies usually go out within two business days.",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://www.tiktok.com" },
    { label: "YouTube", href: "https://www.youtube.com" },
    { label: "RSS", href: "/rss.xml" },
  ],
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "About", href: "/about/" },
  { label: "Archive", href: "/posts/" },
  { label: "Categories", href: "/categories/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = [
  { label: "Contact", href: "/contact/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "RSS", href: "/rss.xml" },
];
