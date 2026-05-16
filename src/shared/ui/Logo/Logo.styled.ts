import styled from "styled-components";
import { CustomLink } from "@/shared/ui";

export const LogoLink = styled(CustomLink)<{ $size: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.orange.primary};

  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.orange.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const LogoIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    transition: all 0.2s ease;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
