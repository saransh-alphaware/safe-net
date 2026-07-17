import type { NextConfig } from "next";
const repoName = "safe-net";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crafto.themezaa.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'safenetandco.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
