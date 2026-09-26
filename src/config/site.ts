/**
 * Single source of truth for everything site-wide.
 *
 * Identity, CV, socials, navigation, metadata, and form settings all live
 * here. The home hero (`heroConfig`) and the About page (`aboutConfig`) are
 * thin re-export slices of this object, so editing this file is the only
 * thing you ever need to touch.
 */

export type HeroFact = {
  label: string;
  value: string;
  href?: string;
};

export type HeroExperience = {
  period: string;
  title: string;
  href?: string;
  position?: string;
  description?: string;
};

export type AboutEducation = {
  period: string;
  title: string;
  href?: string;
  institution?: string;
  description?: string;
};

export type AboutProject = {
  title: string;
  href?: string;
  description?: string;
};

export type AboutPublication = {
  title: string;
  href?: string;
  venue?: string;
  year?: string;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

const name = "John Doe";

export const siteConfig = {
  /* ------------------------------------------------------------- identity --- */

  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name,
  /** Short line directly under the name in the home hero. */
  role: "Writer & software engineer",
  /** Intro paragraph in the home hero and the About page header. */
  about:
    "A text-first Astro theme for essays, notes, and long-form writing. Notes on building software, published when there is something worth saying.",
  /** Terminal-style label rendered as `❯ tagline` by the Prompt component. */
  tagline: "whoami",
  /** Contact email shared by the hero, the About page, and the contact page. */
  email: "hello@example.com",
  /** Optional resume link. Leave empty to hide the Resume pill. */
  resumeUrl: "",

  /* ------------------------------------------------------------------- CV --- */

  /**
   * Label→value rows. An optional `href` turns the value into an inline link.
   * Leave the array empty to hide the whole facts block.
   */
  facts: [] as HeroFact[],

  /**
   * Experience entries, rendered in the home hero and on the About page.
   * Each entry may optionally include an `href` to link the title. Leave the
   * array empty to hide the block entirely.
   */
  experience: [
    {
      period: "2026 — Now",
      title: "Staff Engineer",
      href: "",
      position: "Meridian Labs",
      description:
        "Own the design-system platform every product team builds on: tokens, primitives, docs, and the migration path off the legacy kit.",
    },
    {
      period: "2019 — 2026",
      title: "Senior Engineer",
      href: "",
      position: "Platform teams, Northwind",
      description:
        "Led the rebuild of the publishing pipeline. Cut p95 render time by 60% and made deploys boring.",
    },
    {
      period: "2016 — 2019",
      title: "Frontend Engineer",
      href: "",
      position: "Studio Mono",
      description:
        "Shipped marketing and editorial sites for clients, and learned to write markup that survives a redesign.",
    },
  ] as HeroExperience[],

  /**
   * Education entries. Same shape as experience; leave empty to hide the
   * section entirely.
   */
  education: [
    {
      period: "2021 — 2023",
      title: "M.Sc. in Computer Science",
      institution: "Example University",
      description:
        "Specialization in distributed systems and human-computer interaction. Thesis on incremental static site generation.",
    },
    {
      period: "2016 — 2020",
      title: "B.Eng. in Software Engineering",
      institution: "Example Polytechnic",
      description:
        "Honours project on resilient UI component systems. Graduated with first-class honours.",
    },
  ] as AboutEducation[],

  /**
   * Side projects, open-source tools, or notable builds. Optional href turns
   * the title into a link.
   */
  projects: [
    {
      title: "monograph-terminal",
      href: "https://github.com/alshenoudy/monograph-terminal",
      description:
        "A text-first Astro theme for long-form writing, with MDX components, search, and a floating TOC.",
    },
    {
      title: "prompt-kit",
      description:
        "A minimal React hook collection for building terminal-like command palettes and inline prompts.",
    },
  ] as AboutProject[],

  /**
   * Papers, articles, talks, or other published work. Optional venue/year.
   */
  publications: [
    {
      title: "Incremental Builds for Static Publishing Pipelines",
      venue: "Journal of Web Engineering",
      year: "2024",
    },
    {
      title: "Design Tokens That Survive Product Growth",
      venue: "Systems Design Talks",
      year: "2023",
    },
  ] as AboutPublication[],

  /**
   * Grouped skills. Each group renders as a row of non-clickable pills that
   * wrap automatically on narrow screens.
   */
  skills: [
    {
      group: "Languages",
      items: ["TypeScript", "Python", "Go", "Rust", "SQL", "Bash"],
    },
    {
      group: "Tools & Frameworks",
      items: ["Astro", "React", "Node.js", "Tailwind CSS", "PostgreSQL", "Docker"],
    },
    {
      group: "Platforms & Cloud",
      items: ["AWS", "Cloudflare", "Vercel", "GitHub Actions", "Kubernetes"],
    },
  ] as SkillGroup[],

  /**
   * Flat list of interests, rendered as a single group of chips.
   */
  interests: [
    "Static site generators",
    "Design systems",
    "Developer experience",
    "Type safety",
    "Technical writing",
    "Open source tooling",
  ],

  /* --------------------------------------------------------- site metadata --- */

  /** Default page title suffix and RSS feed name. */
  title: `${name} - A minimal Astro blog theme`,
  description:
    "A text-first Astro theme for essays, notes, and long-form writing, with a command-palette search and a light/dark reading mode.",
  /** Canonical domain. Must be set before building for production. */
  siteUrl: "https://monograph.xocoweb.workers.dev",
  /** Fills the SEO and JSON-LD author fields. */
  authorName: "Andrei Alba",
  language: "en",
  dateLocale: "en-US",
  locale: "en_US",
  socialImage: "/og-image.png",

  /* --------------------------------------------------------------- socials --- */

  /**
   * Social links rendered as contact pills in the hero and as icon buttons in
   * the footer. Labels with an `href` starting with `http` are treated as
   * external links.
   */
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Google Scholar", href: "https://scholar.google.com" },
    { label: "RSS", href: "/rss.xml" },
  ],

  /* ----------------------------------------------------------------- forms --- */

  /**
   * Both forms below ship enabled with an empty `action`, which makes them fully
   * interactive demos that submit nowhere: a small script confirms the submit
   * and clears the fields. Paste your provider's endpoint into `action` to send
   * real submissions, or set `enabled: false` to disable the controls outright.
   */
  newsletter: {
    enabled: false,
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
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "About", href: "/about/" },
  { label: "Archive", href: "/archive/" },
  { label: "Categories", href: "/categories/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = [
  { label: "Contact", href: "/contact/" },
  { label: "RSS", href: "/rss.xml" },
];
