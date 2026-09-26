/**
 * Single entrypoint for the home hero / portfolio identity block.
 *
 * Edit this file to change the name, tagline, role, about text, fact rows,
 * experience list, resume link, email, and social contact pills shown on the
 * home page and reused elsewhere (e.g. the About page pulls experience from
 * here).
 */
export const heroConfig: {
  tagline: string;
  name: string;
  role: string;
  about: string;
  facts: HeroFact[];
  experience: HeroExperience[];
  resumeUrl: string;
  email: string;
  socials: { label: string; href: string }[];
} = {
  /** Plain-text tagline rendered as `❯ tagline` by the Prompt component. */
  tagline: "whoami",
  /** Name in the hero heading and wordmark fallback. */
  name: "John Doe",
  /** Short line directly under the name. */
  role: "Writer & software engineer",
  /** Intro paragraph below the role. */
  about:
    "A text-first Astro theme for essays, notes, and long-form writing. Notes on building software, published when there is something worth saying.",
  /**
   * Label→value rows. An optional `href` turns the value into an inline link.
   * Leave the array empty to hide the whole facts block.
   */
  facts: [],
  /**
   * CV entries. Leave the array empty to hide the experience section entirely.
   * Each entry may optionally include an `href` to link the title.
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
  ],
  /** Optional resume link. Leave empty to hide the Resume pill. */
  resumeUrl: "",
  /** Contact email used for the Email pill. */
  email: "hello@example.com",
  /**
   * Social links rendered as contact pills. Labels with an `href` starting with
   * `http` are treated as external links.
   */
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Google Scholar", href: "https://scholar.google.com" },
    { label: "RSS", href: "/rss.xml" },
  ],
} as const;

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
