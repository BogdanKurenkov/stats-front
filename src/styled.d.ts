import "styled-components";
import { colors } from "./colors";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";

type Theme = {
  colors: typeof colors;
  typography: typeof typography;
  breakpoints: typeof breakpoints;
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export type { Theme };
