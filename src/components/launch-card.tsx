import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/icons";

type LaunchCardProps = {
  index: string;
  platformName: string;
  icon: ReactNode;
  title: string;
  description: string;
  actionLabel: string;
  /** `null` while the post link hasn't been configured yet. */
  href: string | null;
};

export function LaunchCard({
  index,
  platformName,
  icon,
  title,
  description,
  actionLabel,
  href,
}: LaunchCardProps) {
  const body = (
    <>
      <div className="flex items-center justify-between">
        <span className="label text-muted">
          <span className={href ? "text-ink" : undefined}>{index}</span> / {platformName}
        </span>
        <span className={href ? "text-ink" : "text-muted"}>{icon}</span>
      </div>

      <h3 className="mt-10 font-display text-[1.875rem] leading-tight font-normal tracking-[-0.015em] text-ink sm:mt-14 sm:text-[2.25rem]">
        {title}
      </h3>
      <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-muted">{description}</p>

      <div className="mt-auto pt-10">
        {href ? (
          <span className="inline-flex items-center gap-2 bg-sun rounded-full px-5 py-3 text-[15px] font-medium text-charcoal transition-colors duration-200 group-hover:bg-none group-hover:bg-charcoal group-hover:text-white">
            {actionLabel}
            <ArrowUpRight className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-[15px] font-medium text-muted">
            Link coming soon
          </span>
        )}
      </div>
    </>
  );

  const frame = "relative flex min-h-[18rem] flex-col rounded-2xl border p-7 sm:min-h-[21rem] sm:p-9";

  if (!href) {
    return <div className={`${frame} border-line bg-subtle`}>{body}</div>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View the Confido Health launch post on ${platformName} (opens in a new tab)`}
      className={`group ${frame} border-line bg-white transition-[border-color,box-shadow,transform] duration-200 hover:border-beige hover:shadow-[0_24px_48px_-28px_rgb(45_44_43/0.35)] focus-visible:border-charcoal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal active:shadow-none motion-safe:active:translate-y-px`}
    >
      {body}
    </a>
  );
}
