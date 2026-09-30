import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const OverlayContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 50%);
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
  backdrop-filter: blur(2px);
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
`;
