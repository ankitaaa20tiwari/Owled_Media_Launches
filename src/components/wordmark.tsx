/**
 * Confido Health logo (Brand Guidance › Logo): the stacked-bar "C" mark beside the
 * "Confido" (bold) + "Health" (regular) wordmark. Single color only: charcoal on
 * light grounds, white on dark ones, via `currentColor`.
 *
 * The mark is redrawn from the brand guide. Swap `LogoMark`'s paths for the
 * official SVG export from Figma when it's available.
 */

/** Each row is a short pill plus a longer bar; the shorter middle rows open the "C". */
const MARK_ROWS = [16, 11, 8, 8, 11, 16];

export function LogoMark({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 21" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      {MARK_ROWS.map((length, row) => (
        <g key={row}>
          <rect x="0" y={row * 3.6} width="4.5" height="2.4" rx="1.2" />
          <rect x="6" y={row * 3.6} width={length} height="2.4" rx="1.2" />
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
      </span>
    </span>
  );
}
