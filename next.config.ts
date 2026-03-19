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
  async rewrites() {
    return [
      {
        source: "/:path((?!_next|api|favicon.ico|images|fonts|404).*)",
        destination: "/404",
      },
    ];
  },
};

export default nextConfig;
