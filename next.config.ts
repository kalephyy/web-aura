import type { NextConfig } from "next";

// Configure static export suitable for GitHub Pages. When building in GitHub Actions
// we set basePath/assetPrefix to the repository name so assets resolve correctly.
const isGithub = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const ghBase = isGithub && repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: ghBase || undefined,
  assetPrefix: ghBase || undefined,
};

export default nextConfig;
