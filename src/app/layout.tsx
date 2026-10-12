import type { Metadata, Viewport } from "next";
import { Chivo_Mono, Geist, STIX_Two_Text } from "next/font/google";
import "./globals.css";

// Brand typefaces, loaded as static files in the approved weights only.
const stix = STIX_Two_Text({
  variable: "--font-stix",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
  weight: ["400"],
});

// Vercel provides the production domain at build time; locally we fall back to localhost.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const title = "Confido Health · Launch Day";
const description =
  "We're putting the care back in healthcare. Confido Health is launching AI agents that work alongside care teams 24/7. View the launch post on X and LinkedIn.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "Confido Health",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${stix.variable} ${geist.variable} ${chivoMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
