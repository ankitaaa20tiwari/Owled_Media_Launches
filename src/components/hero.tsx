import { launchDateLong, launchDateMachine, launchDateTimeMachine, launchTime } from "@/lib/launch";

export function Hero() {
  return (
    <section className="px-5 pt-14 pb-14 text-center sm:px-8 sm:pt-20 sm:pb-16">
      <p className="label text-brand">Confido Health · Launch day</p>

      <h1 className="mx-auto mt-5 max-w-5xl text-[clamp(2.625rem,7.2vw,5.5rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-balance text-ink sm:mt-7">
        We&rsquo;re putting the <span className="text-brand">care</span> back in healthcare.
      </h1>

      <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8">
        <p className="text-base text-muted sm:text-lg">
          Launching <time dateTime={launchDateMachine} className="font-medium text-ink">{launchDateLong}</time>
        </p>
        <p className="label inline-flex items-center gap-3 text-brand">
          <span aria-hidden="true" className="h-px w-6 bg-brand/40" />
          <time dateTime={launchDateTimeMachine}>{launchTime}</time>
          <span aria-hidden="true" className="h-px w-6 bg-brand/40" />
        </p>
      </div>
    </section>
  );
}
