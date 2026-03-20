import styled from "styled-components";
import { CustomLink } from "@/shared/ui";
import Image from "next/image";

export const LogoLink = styled(CustomLink)<{ $size: number }>`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s ease;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.orange.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const LogoImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
`;
