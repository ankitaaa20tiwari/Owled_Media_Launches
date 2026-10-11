import { launchConfig } from "@/config/launch";

export type Platform = "x" | "linkedin";

type PlatformRule = {
  configKey: "xPostUrl" | "linkedinPostUrl";
  name: string;
  hosts: string[];
  /** Pathname patterns that identify an individual post (never a profile or homepage). */
  postPaths: RegExp[];
  example: string;
};

const RULES: Record<Platform, PlatformRule> = {
  x: {
    configKey: "xPostUrl",
    name: "X",
    hosts: ["x.com", "www.x.com", "twitter.com", "www.twitter.com", "mobile.twitter.com"],
    postPaths: [/^\/(?:[A-Za-z0-9_]{1,15}|i(?:\/web)?)\/status\/\d+\/?$/],
    example: "https://x.com/<handle>/status/1234567890123456789",
  },
  linkedin: {
    configKey: "linkedinPostUrl",
    name: "LinkedIn",
    hosts: ["linkedin.com", "www.linkedin.com"],
    postPaths: [/^\/posts\/[^/]+\/?$/, /^\/feed\/update\/urn:li:[A-Za-z]+:\d+\/?$/],
    example: "https://www.linkedin.com/posts/<name>_<slug>-activity-1234567890123456789-abcd",
  },
};

class LaunchConfigError extends Error {
  constructor(message: string) {
    super(`\n\n[src/config/launch.ts] ${message}\n`);
    this.name = "LaunchConfigError";
  }
}

/**
 * Returns the configured post URL for a platform, or `null` while it is left empty.
 * Throws during the build if a URL is filled in but isn't an individual post on
 * that platform, so a wrong link can never be deployed.
 */
export function getPostUrl(platform: Platform): string | null {
  const rule = RULES[platform];
  const raw = launchConfig[rule.configKey].trim();
  if (raw === "") return null;

  const problem = `${rule.configKey} is set to "${raw}", which doesn't look like a link to a single post on ${rule.name}.`;
  const fix = `Expected something like ${rule.example}\nPaste the post's own link, or set it back to "" to show "Link coming soon".`;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new LaunchConfigError(`${problem}\nIt isn't a complete web address (it should start with https://).\n${fix}`);
  }

  if (url.protocol !== "https:" || !rule.hosts.includes(url.hostname.toLowerCase())) {
    throw new LaunchConfigError(`${problem}\nIt should be an https:// link on ${rule.hosts[0]}.\n${fix}`);
  }
  if (!rule.postPaths.some((pattern) => pattern.test(safeDecode(url.pathname)))) {
    throw new LaunchConfigError(`${problem}\nIt points to ${rule.name}, but not to one specific post.\n${fix}`);
  }

  return url.toString();
}

/** Copied LinkedIn links sometimes encode "urn:li:activity" as "urn%3Ali%3Aactivity". */
function safeDecode(pathname: string): string {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

function getLaunchDate(): Date {
  const date = new Date(launchConfig.launchDate);
  if (Number.isNaN(date.getTime())) {
    throw new LaunchConfigError(
      `launchDate "${launchConfig.launchDate}" isn't a valid date. Use the format 2026-10-14T20:00:00+05:30.`,
    );
  }
  return date;
}

/** Dates and times on the page are shown in US Eastern time ("ET"). */
const DISPLAY_TIME_ZONE = "America/New_York";

function formatLaunch(options: Intl.DateTimeFormatOptions, locale = "en-US"): string {
  return new Intl.DateTimeFormat(locale, { ...options, timeZone: DISPLAY_TIME_ZONE }).format(getLaunchDate());
}

/** "October 14, 2026" */
export const launchDateLong = formatLaunch({ month: "long", day: "numeric", year: "numeric" });
/** "Oct 14, 2026" */
export const launchDateShort = formatLaunch({ month: "short", day: "numeric", year: "numeric" });
/** "8:00 AM ET" */
export const launchTime = `${formatLaunch({ hour: "numeric", minute: "2-digit" })} ET`;
/** "2026-10-14", for <time dateTime> */
export const launchDateMachine = formatLaunch({}, "en-CA");
/** Full ISO timestamp, for <time dateTime> */
export const launchDateTimeMachine = getLaunchDate().toISOString();

export function getCompanyWebsite(): { href: string; label: string } {
  let url: URL;
  try {
    url = new URL(launchConfig.companyWebsite);
  } catch {
    throw new LaunchConfigError(`companyWebsite "${launchConfig.companyWebsite}" isn't a complete web address.`);
  }
  return { href: url.toString(), label: url.hostname.replace(/^www\./, "") };
}
