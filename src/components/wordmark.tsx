/** Text-based Confido Health wordmark (no official logo asset is in the project). */
export function Wordmark({ className = "text-[13px]" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-[0.2em] uppercase text-ink ${className}`}>
      Confido <span className="text-brand">Health</span>
    </span>
  );
}
