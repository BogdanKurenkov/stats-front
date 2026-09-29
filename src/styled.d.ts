import "styled-components";

import type { AppTheme } from "@/shared/styles";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
