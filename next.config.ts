import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "bizmagnets-website";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? `/${repoName}` : ""),
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? `/${repoName}` : ""),
  trailingSlash: true,
};

export default nextConfig;
