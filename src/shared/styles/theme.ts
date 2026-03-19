import { colors } from "./colors";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";

export const theme = {
  colors,
  typography,
  breakpoints,
} as const;

export type Theme = typeof theme;
