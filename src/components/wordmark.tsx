/**
 * Confido Health logo (Brand Guidance › Logo): the stacked-bar "C" mark beside the
 * "Confido" (bold) + "Health" (regular) wordmark. Single color only: charcoal on
 * light grounds, white on dark ones, via `currentColor`.
 *
 * The mark is redrawn from the brand guide. Swap `LogoMark`'s paths for the
 * official SVG export from Figma when it's available.
 */

/**
 * Each row is a short pill and a longer bar split by a small gap. The middle rows
 * reach further left and stop shorter, so the stack reads as a "C".
 * Values are in the 28x21 viewBox: [start, split, end].
 */
export const MARK_ROWS: ReadonlyArray<readonly [number, number, number]> = [
  [4, 9.5, 28],
  [1.5, 7.5, 25],
  [0, 6.5, 22],
  [0, 6.5, 22],
  [1.5, 7.5, 25],
  [4, 9.5, 28],
];
export const MARK_VIEWBOX = "0 0 28 21";
const GAP = 1.2;

export function LogoMark({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <svg viewBox={MARK_VIEWBOX} fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      {MARK_ROWS.map(([start, split, end], row) => (
        <g key={row}>
          <rect x={start} y={row * 3.72} width={split - GAP - start} height="2.4" rx="1.2" />
          <rect x={split} y={row * 3.72} width={end - split} height="2.4" rx="1.2" />
        </g>
      ))}
    </svg>
  );
}

type WordmarkProps = {
  className?: string;
  /** "primary" puts the mark beside the name; "secondary" stacks it above. */
  layout?: "primary" | "secondary";
};

export function Wordmark({ className = "text-[19px] text-ink", layout = "primary" }: WordmarkProps) {
  const stacked = layout === "secondary";
  return (
    <span
      role="img"
      aria-label="Confido Health"
      className={`inline-flex items-center leading-none tracking-[-0.02em] ${stacked ? "flex-col gap-[0.4em]" : "gap-[0.45em]"} ${className}`}
    >
      <LogoMark className="h-[1em] w-auto" />
      <span>
        <span className="font-semibold">Confido</span>
        <span className="font-normal">Health</span>
        <sup className="ml-[0.1em] align-[0.15em] text-[0.3em] font-normal tracking-normal">TM</sup>
      </span>
    </span>
  );
}
