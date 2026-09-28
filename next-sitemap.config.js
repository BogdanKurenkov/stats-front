/** @type {import('next-sitemap').IConfig} */

const SITE_URL = process.env.SITE_URL || "https://stats.net";

const LOCALES = ["pt", "en", "es", "ru"];
const DEFAULT_LOCALE = "pt";

const EXCLUDED_PATHS = [
  "/admin",
  "/admin/*",
  "/auth/*",
  "/auth/login",
  "/auth/register",
  "/404",
];

const ROBOTS_DISALLOW = ["/admin", "/auth", "/404"];

const PRIORITY = {
  "/": { priority: 1.0, changefreq: "daily" },
  "/news": { priority: 0.8, changefreq: "daily" },
  "/forecasts": { priority: 0.8, changefreq: "daily" },
  "/results": { priority: 0.8, changefreq: "daily" },
  "/reviews": { priority: 0.8, changefreq: "daily" },
  "/bonuses": { priority: 0.7, changefreq: "weekly" },
  "/legal/privacy-policy": { priority: 0.3, changefreq: "yearly" },
  "/legal/cookie-policy": { priority: 0.3, changefreq: "yearly" },
  "/legal/terms-of-use": { priority: 0.3, changefreq: "yearly" },
};

const PUBLIC_PATHS = Object.keys(PRIORITY);

const withLocale = (path, locale) => {
  const clean = path === "/" ? "" : path;
  if (locale === DEFAULT_LOCALE) return clean || "/";
  return `/${locale}${clean}`;
};

const buildAlternates = (cleanPath) => [
  ...LOCALES.map((locale) => ({
    href: `${SITE_URL}${withLocale(cleanPath, locale)}`,
    hreflang: locale,
    hrefIsAbsolute: true,
  })),
  {
    href: `${SITE_URL}${withLocale(cleanPath, DEFAULT_LOCALE)}`,
    hreflang: "x-default",
    hrefIsAbsolute: true,
  },
];

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: EXCLUDED_PATHS,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ROBOTS_DISALLOW },
    ],
  },

  transform: async () => null,

  additionalPaths: async () => {
    const now = new Date().toISOString();
    const out = [];

    for (const cleanPath of PUBLIC_PATHS) {
      const meta = PRIORITY[cleanPath];
      const alternates = buildAlternates(cleanPath);

      for (const locale of LOCALES) {
        out.push({
          loc: withLocale(cleanPath, locale),
          changefreq: meta.changefreq,
          priority: meta.priority,
          lastmod: now,
          alternateRefs: alternates,
        });
      }
    }

    return out;
  },
};