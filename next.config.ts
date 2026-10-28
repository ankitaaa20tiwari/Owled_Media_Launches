import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      // Temporary (307) for now; only the exact root path matches, so
      // /confido-health and every other route stay on owledlaunches.com.
      {
        source: "/",
        destination: "https://owledmedia.com",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      // The Bivia launch page is a standalone HTML file in public/, so it
      // skips the Confido root layout's fonts and styles.
      {
        source: "/bivia-from-articul8",
        destination: "/bivia-from-articul8/index.html",
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
