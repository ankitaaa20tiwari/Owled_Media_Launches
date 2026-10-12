import { LaunchCountdown } from "@/components/launch-countdown";
import { launchDateLong, launchDateMachine, launchDateTimeMachine, launchTime } from "@/lib/launch";

export function Hero() {
  return (
    <section className="isolate px-5 pt-14 pb-14 text-center sm:px-8 sm:pt-20 sm:pb-16">
      <p className="label inline-flex items-center gap-2.5 text-muted">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-amber" />
        Confido Health · Launch day
      </p>

      <h1 className="mx-auto mt-5 max-w-5xl font-display text-[clamp(2.75rem,7.6vw,6rem)] leading-[1.02] font-normal tracking-[-0.025em] text-balance text-ink sm:mt-7">
        We&rsquo;re putting the <span className="relative inline-block italic">
          care
          <span aria-hidden="true" className="bg-sun absolute inset-x-0 bottom-[0.06em] -z-10 h-[0.22em] rounded-full" />
        </span> back in healthcare.
      </h1>

      <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8">
        <p className="text-base text-muted sm:text-lg">
          Launching <time dateTime={launchDateMachine} className="font-medium text-ink">{launchDateLong}</time>
        </p>
        <p className="label inline-flex items-center gap-3 text-ink">
          <span aria-hidden="true" className="h-px w-6 bg-beige" />
          <time dateTime={launchDateTimeMachine}>{launchTime}</time>
          <span aria-hidden="true" className="h-px w-6 bg-beige" />
        </p>
      </div>

      <LaunchCountdown target={launchDateTimeMachine} />
    </section>
  );
}
