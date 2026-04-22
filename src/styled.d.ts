import "styled-components";

import type { Colors } from "@/shared/styles/colors";
import type { Typography } from "@/shared/styles/typography";
import type { Breakpoints } from "@/shared/styles/breakpoints";

type Theme = {
  colors: Colors;
  typography: Typography;
  breakpoints: Breakpoints;
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export type { Theme };
