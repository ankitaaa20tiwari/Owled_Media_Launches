/**
 * ──────────────────────────────────────────────────────────────────────────
 *  CONFIDO HEALTH · LAUNCH DAY SETTINGS
 *  This is the only file you need to edit before the launch.
 * ──────────────────────────────────────────────────────────────────────────
 *
 *  HOW TO ADD THE POST LINKS
 *
 *  1. X: open the launch post on X, click Share → "Copy link",
 *     and paste it between the quotes of `xPostUrl` below.
 *     It should look like:  https://x.com/<handle>/status/1234567890123456789
 *
 *  2. LinkedIn: open the launch post, click "…" → "Copy link to post",
 *     and paste it between the quotes of `linkedinPostUrl` below.
 *     It should look like:  https://www.linkedin.com/posts/<name>_<slug>-activity-1234…
 *                      or:  https://www.linkedin.com/feed/update/urn:li:activity:1234…
 *
 *  3. Save the file (or commit it on GitHub). Vercel redeploys on its own
 *     in about a minute.
 *
 *  WHAT VISITORS SEE
 *
 *  - Link left empty ("")  → the card shows "Link coming soon" and can't be
 *                            clicked. If both are empty, the page says
 *                            "Post links will be available on launch day".
 *  - Link filled in         → the whole card opens that post in a new tab,
 *                            and the page says "The launch is live".
 *  - Link that isn't a real X / LinkedIn post URL (a typo, a profile page,
 *    a homepage) → the deploy stops with a message explaining what's wrong.
 *    The site that's already live stays as it was, so it never points
 *    visitors at the wrong place.
 *
 *  The page shows a countdown to `launchDate` that disappears once that
 *  moment passes. It only says the launch is live once a real post link
 *  has been added here.
 */

export type LaunchConfig = {
  /** Full URL of the launch post on X. Leave "" until the post is published. */
  xPostUrl: string;
  /** Full URL of the launch post on LinkedIn. Leave "" until the post is published. */
  linkedinPostUrl: string;
  /** Launch moment, ISO 8601 with time-zone offset. Shown on the page as a date and time in ET. */
  launchDate: string;
  /** Confido Health's main website, linked from the footer. */
  companyWebsite: string;
};

export const launchConfig: LaunchConfig = {
  xPostUrl: "",
  linkedinPostUrl: "",
  launchDate: "2026-10-14T08:00:00-04:00", // October 14, 2026 · 8:00 AM ET (5:30 PM IST)
  companyWebsite: "https://confido.health",
};
