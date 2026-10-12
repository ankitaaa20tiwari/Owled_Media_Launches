/**
 * Confido Health logo (Brand Guidance › Logo): the stacked-bar "C" mark beside the
 * "Confido" (bold) + "Health" (regular) wordmark. Single color only: charcoal on
 * light grounds, white on dark ones, via `currentColor`.
 *
 * The mark is redrawn from the brand guide. Swap `LogoMark`'s paths for the
 * official SVG export from Figma when it's available.
 */

/**
 * Two mirrored groups of four stacked bars. Neighbouring rows overlap slightly and
 * are fused with rounded inner fillets, so each group reads as one stepped shape.
 * Values are [start, end] in the 164x180 viewBox; rows are 20 tall, groups 100 apart.
 */
const RIGHT = [72, 164] as const;
const PILL = [27, 78] as const;
const LEFT = [0, 78] as const;
const MARK_GROUPS: ReadonlyArray<ReadonlyArray<readonly [number, number]>> = [
  [RIGHT, PILL, RIGHT, LEFT],
  [LEFT, RIGHT, PILL, RIGHT],
];
const ROW = 20;
const R = 6;
export const MARK_VIEWBOX = "0 0 164 180";

type Span = readonly [number, number];
const inside = (x: number, span?: Span) => !!span && span[0] < x && x < span[1];

/** A bar with per-corner radii; a 0 radius leaves that corner square for a joint. */
function bar(x1: number, x2: number, y: number, tl: number, tr: number, br: number, bl: number) {
  const b = y + ROW;
  return `M${x1 + tl} ${y}H${x2 - tr}A${tr} ${tr} 0 0 1 ${x2} ${y + tr}V${b - br}A${br} ${br} 0 0 1 ${x2 - br} ${b}H${x1 + bl}A${bl} ${bl} 0 0 1 ${x1} ${b - bl}V${y + tl}A${tl} ${tl} 0 0 1 ${x1 + tl} ${y}Z`;
}

/** Concave fillet filling the inside corner at (x, y), opening toward (dx, dy). */
function fillet(x: number, y: number, dx: number, dy: number) {
  return `M${x} ${y}H${x + dx * R}A${R} ${R} 0 0 ${dx * dy > 0 ? 0 : 1} ${x} ${y + dy * R}Z`;
}

export const MARK_PATH = MARK_GROUPS.flatMap((rows, g) =>
  rows.flatMap(([x1, x2], i) => {
    const y = g * 100 + i * ROW;
    const above = rows[i - 1];
    const below = rows[i + 1];
    const parts = [
      bar(
        x1,
        x2,
        y,
        inside(x1, above) ? 0 : R,
        inside(x2, above) ? 0 : R,
        inside(x2, below) ? 0 : R,
        inside(x1, below) ? 0 : R,
      ),
    ];
    if (below) {
      const b = y + ROW;
      if (inside(x1, below)) parts.push(fillet(x1, b, -1, -1));
      if (inside(x2, below)) parts.push(fillet(x2, b, 1, -1));
      if (inside(below[0], [x1, x2])) parts.push(fillet(below[0], b, -1, 1));
      if (inside(below[1], [x1, x2])) parts.push(fillet(below[1], b, 1, 1));
    }
    return parts;
  }),
).join("");

export function LogoMark({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <svg viewBox={MARK_VIEWBOX} fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d={MARK_PATH} />
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
        <span className="ml-[0.08em] align-baseline text-[0.3em] font-normal tracking-normal">TM</span>
      </span>
    </span>
  );
}
