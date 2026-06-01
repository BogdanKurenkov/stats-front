import "styled-components";

import type { Colors, Typography, Breakpoints } from "@/shared";

type Theme = {
  mode: "light" | "dark";
  colors: {
    orange: Colors["orange"];
    black: Colors["dark"]["black"] | Colors["light"]["black"];
    gray: Colors["dark"]["gray"] | Colors["light"]["gray"];
    status: Colors["dark"]["status"] | Colors["light"]["status"];
  };
  typography: Typography;
  breakpoints: Breakpoints;
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export type { Theme };
