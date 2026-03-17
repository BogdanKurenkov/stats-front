import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      minify: true,
      displayName: true,
    },
  },
};

export default nextConfig;
