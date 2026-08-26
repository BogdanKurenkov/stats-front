import { PUBLIC_ROUTES } from "./public.routes";
import { ADMIN_ROUTES } from "./admin.routes";

export const ROUTES = {
  ...PUBLIC_ROUTES,
  ...ADMIN_ROUTES,
} as const;

export { PUBLIC_ROUTES, ADMIN_ROUTES };
export type { PublicRoute } from "./public.routes";
