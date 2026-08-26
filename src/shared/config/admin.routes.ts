export const ADMIN_ROUTES = {
  ADMIN_ROOT: "/admin",
  ADMIN_FORECASTS: {
    ROOT: "/admin/forecasts",
    DETAILS: (id: string | number) => `/admin/forecasts/${id}`,
  },
  ADMIN_PARTNERS: {
    ROOT: "/admin/partners",
    DETAILS: (id: string | number) => `/admin/partners/${id}`,
  },
} as const;
