import "styled-components";
import { colors } from "./styles/colors";
import { breakpoints } from "./styles/breakpoints";
import { spacing } from "./styles/spacing";
import { typography } from "./styles/typography";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    breakpoints: typeof breakpoints;
    spacing: typeof spacing;
    typography: typeof typography;
  }
}
