export const PUBLIC_ROUTES = {
  HOME: "/",
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  NEWS: "/news",
  FORECASTS: "/forecasts",
  RESULTS: "/results",
  BONUSES: "/bonuses",
  PRIVACY_POLICY: "/legal/privacy-policy",
  COOKIE_POLICY: "/legal/cookie-policy",
  TERMS_OF_USE: "/legal/terms-of-use",
} as const;

export type PublicRoute = (typeof PUBLIC_ROUTES)[keyof typeof PUBLIC_ROUTES];
