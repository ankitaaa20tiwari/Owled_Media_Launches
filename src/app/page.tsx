import { Hero } from "@/components/hero";
import { LaunchLinks } from "@/components/launch-links";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SupportNote } from "@/components/support-note";

// The whole page is prerendered at build time and served from the CDN.
export const ensureStatic = "navigation";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <LaunchLinks />
        <SupportNote />
      </main>
      <SiteFooter />
    </>
  );
}
