import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: the parent CLAUDECODE-JOBS folder has its own
  // package-lock.json, which otherwise makes Next infer the wrong root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
