import type { NextConfig } from "next";

// If you serve this app under a sub-path (e.g. sigmaschool.co/ai-risk),
// set BASE_PATH=/ai-risk in your Vercel env vars. Leave unset for root.
const basePath = process.env.BASE_PATH || undefined;

const nextConfig: NextConfig = {
  basePath,
  // Keep asset prefix in sync with basePath so CSS/JS/images resolve.
  assetPrefix: basePath,
};

export default nextConfig;
