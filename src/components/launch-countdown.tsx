"use client";

import { useSyncExternalStore } from "react";

/**
 * The current time, read only in the browser. The page is prerendered at build
 * time, where reading the clock isn't allowed, so the server snapshot is `null`
 * and the countdown shows placeholders until it hydrates.
 */
let now: number | null = null;

function subscribe(onTick: () => void) {
  let timer: ReturnType<typeof setTimeout>;
  const tick = () => {
    now = Date.now();
    onTick();
    // Re-align to the next whole second so the digits change together and never drift.
    timer = setTimeout(tick, 1000 - (now % 1000));
  };
  timer = setTimeout(tick, 1000 - (Date.now() % 1000));
  return () => clearTimeout(timer);
}

function getSnapshot() {
  now ??= Date.now();
  return now;
}

function getServerSnapshot() {
  return null;
}

const UNITS = [
  { label: "Days", seconds: 86_400, cycle: Infinity },
  { label: "Hours", seconds: 3_600, cycle: 24 },
  { label: "Minutes", seconds: 60, cycle: 60 },
  { label: "Seconds", seconds: 1, cycle: 60 },
] as const;

export function LaunchCountdown({ target }: { target: string }) {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const remaining = current === null ? null : Math.ceil((new Date(target).getTime() - current) / 1000);

  // Once the launch moment has passed the countdown steps aside; the launch cards take over.
  if (remaining !== null && remaining <= 0) return null;

  const parts = UNITS.map(({ label, seconds, cycle }) => ({
    label,
    value: remaining === null ? "––" : String(Math.floor(remaining / seconds) % cycle).padStart(2, "0"),
  }));

  return (
    <div role="timer" aria-label="Time until launch" className="mt-9 flex justify-center gap-2.5 sm:mt-11 sm:gap-4">
      {parts.map(({ label, value }) => (
        <div
          key={label}
          className="flex w-[4.5rem] flex-col items-center rounded-2xl border border-line bg-ivory py-4 sm:w-28 sm:py-5"
        >
          <span className="font-display text-[2.125rem] leading-none font-medium tracking-[-0.02em] text-ink tabular-nums sm:text-[3rem]">
            {value}
          </span>
          <span className="label mt-2.5 text-muted sm:mt-3">{label}</span>
        </div>
      ))}
    </div>
  );
}
