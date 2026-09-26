/**
 * Thin re-export slice of `siteConfig` for the home hero. The content itself
 * lives in [src/config/site.ts] — edit it there.
 */
import { siteConfig } from "./site";

export const heroConfig = {
  tagline: siteConfig.tagline,
  name: siteConfig.name,
  role: siteConfig.role,
  about: siteConfig.about,
  facts: siteConfig.facts,
  experience: siteConfig.experience,
  resumeUrl: siteConfig.resumeUrl,
  email: siteConfig.email,
  socials: siteConfig.socials,
};

export type { HeroExperience, HeroFact } from "./site";
