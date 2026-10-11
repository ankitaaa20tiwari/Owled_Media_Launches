import { ArrowUpRight } from "@/components/icons";
import { Wordmark } from "@/components/wordmark";
import { getCompanyWebsite } from "@/lib/launch";

export function SiteFooter() {
  const website = getCompanyWebsite();

  return (
    <footer className="mt-20 border-t border-line sm:mt-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <Wordmark className="text-[12px]" />
          <p className="mt-2 text-sm text-muted">Building AI agents for better healthcare operations.</p>
        </div>
        <a
          href={website.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand hover:decoration-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:self-auto"
        >
          {website.label}
          <ArrowUpRight className="size-3.5" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </footer>
  );
}
