// shared/styles/theme.types.ts (новый файл)
import { colors } from "./colors";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";

export type ThemeMode = "light" | "dark";

export type ThemeColors = {
  orange: typeof colors.orange;
  black: typeof colors.dark.black;
  gray: typeof colors.dark.gray;
  status: typeof colors.dark.status;
};

export type AppTheme = {
  mode: ThemeMode;
  typography: typeof typography;
  breakpoints: typeof breakpoints;
  colors: ThemeColors & {
    current: typeof colors.dark | typeof colors.light;
  };
};
