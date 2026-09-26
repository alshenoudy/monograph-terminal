/**
 * Thin re-export slice of `siteConfig` for the About/CV page. The content
 * itself lives in [src/config/site.ts] — edit it there.
 */
import { siteConfig } from "./site";

export const aboutConfig = {
  education: siteConfig.education,
  projects: siteConfig.projects,
  publications: siteConfig.publications,
  skills: siteConfig.skills,
  interests: siteConfig.interests,
};

export type { AboutEducation, AboutProject, AboutPublication, SkillGroup } from "./site";
