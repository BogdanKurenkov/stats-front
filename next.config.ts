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
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "es"],
  },
};

export default nextConfig;
