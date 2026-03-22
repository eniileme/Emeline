import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Browsers still request /favicon.ico; we serve the same asset as app/icon.png
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon.png" }];
  },
};

export default nextConfig;
