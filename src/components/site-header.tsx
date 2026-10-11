import { Wordmark } from "@/components/wordmark";
import { launchDateMachine, launchDateShort } from "@/lib/launch";

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Wordmark />
        <p className="label text-muted">
          <span className="hidden sm:inline">Launch day · </span>
          <time dateTime={launchDateMachine}>{launchDateShort}</time>
        </p>
      </div>
    </header>
  );
}
