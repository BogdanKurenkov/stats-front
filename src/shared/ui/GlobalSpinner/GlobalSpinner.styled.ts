import styled from "styled-components";

import { StyledWrapperProps } from "./GlobalSpinner.types";

export const StyledWrapper = styled.div<StyledWrapperProps>`
  position: ${({ $fullScreen }) => ($fullScreen ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $overlay }) =>
    $overlay ? "rgba(0, 0, 0, 0.5)" : "transparent"};
  z-index: ${({ $zIndex }) => $zIndex};
`;
