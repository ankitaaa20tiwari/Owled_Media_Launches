import { LinkedInLogo, XLogo } from "@/components/icons";
import { LaunchCard } from "@/components/launch-card";
import { getPostUrl } from "@/lib/launch";

export function LaunchLinks() {
  const xPostUrl = getPostUrl("x");
  const linkedinPostUrl = getPostUrl("linkedin");
  const isLive = xPostUrl !== null || linkedinPostUrl !== null;

  return (
    <section aria-labelledby="launch-status" className="px-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <h2
            id="launch-status"
            className={`label inline-flex max-w-full items-center gap-2.5 text-balance ${
              isLive
                ? "rounded-full border border-sunbeam/60 bg-sunbeam/15 px-3.5 py-2 text-ink"
                : // The long pending message wraps on phones, so the pill outline only appears on wider screens.
                  "text-muted sm:rounded-full sm:border sm:border-line sm:px-3.5 sm:py-2"
            }`}
          >
            <span aria-hidden="true" className={`relative size-1.5 shrink-0 ${isLive ? "flex" : "hidden sm:flex"}`}>
              {isLive && (
                <span className="absolute inset-0 rounded-full bg-amber opacity-60 motion-safe:animate-ping" />
              )}
              <span className={`relative size-1.5 rounded-full ${isLive ? "bg-amber" : "bg-beige"}`} />
            </span>
            {isLive ? "The launch is live" : "Post links will be available on launch day"}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-pretty text-muted">
            {isLive
              ? "Choose a platform to view the launch post and show your support."
              : "The launch posts on X and LinkedIn will be linked here as soon as they’re published."}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2">
          <LaunchCard
            index="01"
            platformName="X"
            icon={<XLogo className="size-5" />}
            title="The launch post"
            description="See the announcement on X and join the conversation."
            actionLabel="View post on X"
            href={xPostUrl}
          />
          <LaunchCard
            index="02"
            platformName="LinkedIn"
            icon={<LinkedInLogo className="size-5" />}
            title="Launch post on LinkedIn"
            description="Explore the launch and share your support with the community."
            actionLabel="View post on LinkedIn"
            href={linkedinPostUrl}
          />
        </div>
      </div>
    </section>
  );
}
