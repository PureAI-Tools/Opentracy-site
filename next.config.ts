import type { NextConfig } from "next";

const docsOrigin = (process.env.DOCS_ORIGIN || "https://opentracy.mintlify.app").replace(/\/$/, "");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/docs",
        permanent: false,
      },
      {
        source: "/quickstart",
        destination: "/docs/quickstart",
        permanent: false,
      },
      {
        source: "/concepts/:path*",
        destination: "/docs/concepts/:path*",
        permanent: false,
      },
      {
        source: "/guides/:path*",
        destination: "/docs/guides/:path*",
        permanent: false,
      },
      {
        source: "/api-reference/:path*",
        destination: "/docs/api-reference/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: docsOrigin,
      },
      {
        source: "/docs/:path*",
        destination: `${docsOrigin}/:path*`,
      },
      {
        source: "/mintlify-assets/:path*",
        destination: `${docsOrigin}/mintlify-assets/:path*`,
      },
      {
        source: "/static/:path*",
        destination: `${docsOrigin}/static/:path*`,
      },
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/array/:path*",
        destination: "https://us-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  // Required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
