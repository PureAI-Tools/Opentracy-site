import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: "https://opentracy.mintlify.app",
      },
      {
        source: "/docs/:path*",
        destination: "https://opentracy.mintlify.app/:path*",
      },
    ];
  },
};

export default nextConfig;
