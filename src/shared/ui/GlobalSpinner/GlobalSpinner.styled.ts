import styled from "styled-components";

import type { StyledWrapperProps } from "./GlobalSpinner.types";

export const StyledWrapper = styled.div<StyledWrapperProps>`
  position: ${({ $fullScreen }) => ($fullScreen ? "fixed" : "absolute")};
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $overlay }) =>
    $overlay ? "rgba(0, 0, 0, 0.5)" : "transparent"};
  z-index: ${({ $zIndex }) => $zIndex};
`;
