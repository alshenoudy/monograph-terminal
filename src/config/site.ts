import { heroConfig } from "./hero";

export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  name: heroConfig.name,
  /** Rendered by Prompt as `❯ {tagline}`. */
  tagline: `❯ ${heroConfig.tagline}`,
  title: `${heroConfig.name} - A minimal Astro blog theme`,
  description:
    "A text-first Astro theme for essays, notes, and long-form writing, with a command-palette search and a light/dark reading mode.",
  siteUrl: "https://monograph.xocoweb.workers.dev",
  authorName: "Andrei Alba",
  /** Contact email shared by the hero and the contact page. */
  email: heroConfig.email,
  language: "en",
  dateLocale: "en-US",
  locale: "en_US",
  socialImage: "/og-image.png",
  /** Intro paragraph in the home hero. */
  about: heroConfig.about,
  /**
   * Compact CV block rendered in the home hero and on the About page. Kept
   * here so existing pages can import `siteConfig.cv` while the hero uses
   * `heroConfig` as the single source of truth.
   */
  cv: {
    role: heroConfig.role,
    facts: heroConfig.facts,
    experience: heroConfig.experience,
    resumeUrl: heroConfig.resumeUrl,
  },
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
  socials: heroConfig.socials,
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
