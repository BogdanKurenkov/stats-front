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
    locales: ["pt", "en", "es"],
    defaultLocale: "pt",
    localeDetection: false,
  },
};

export default nextConfig;
