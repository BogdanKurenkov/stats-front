export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
  TIMEOUT: 30000,
  REFRESH_ENDPOINT: "/auth/refresh",
  LOGOUT_ENDPOINT: "/auth/logout",
  SESSION_ENDPOINT: "/auth/session",
  LOGIN_ENDPOINT: "/auth/login",
  REGISTER_ENDPOINT: "/auth/register",
} as const;
