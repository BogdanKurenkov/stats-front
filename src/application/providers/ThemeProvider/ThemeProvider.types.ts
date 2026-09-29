import type { ReactNode } from "react";

import type { ThemeMode } from "@/shared/styles/theme.types";

export interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

export interface CustomThemeProviderProps {
  children: ReactNode;
  initialMode?: ThemeMode;
}
