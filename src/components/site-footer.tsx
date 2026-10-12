import { ArrowUpRight } from "@/components/icons";
import { Wordmark } from "@/components/wordmark";
import { getCompanyWebsite } from "@/lib/launch";

export function SiteFooter() {
  const website = getCompanyWebsite();

  return (
    <footer className="mt-20 bg-charcoal text-white sm:mt-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          {/* Reverse (white) logo on charcoal, per the brand color variations. */}
          <Wordmark className="text-[19px] text-white" />
          <p className="mt-3 text-sm text-sand">Building AI agents for better healthcare operations.</p>
        </div>
        <a
          href={website.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-sunbeam hover:decoration-sunbeam focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sunbeam sm:self-auto"
        >
          {website.label}
          <ArrowUpRight className="size-3.5" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </footer>
  );
}
