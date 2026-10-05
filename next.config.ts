import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root (a stray package-lock.json exists higher up on this machine).
  turbopack: { root: process.cwd() },
  images: {
    // Placeholder photos are hot-linked from Unsplash through a tiny custom loader
    // (src/lib/image-loader.ts) so no image-optimization quota is used.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
};

export default nextConfig;
