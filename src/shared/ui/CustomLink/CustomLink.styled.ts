import styled, { css } from "styled-components";
import Link from "next/link";
import { LinkVariant } from "./CustomLink.types";

const variantStyles = {
  default: css`
    color: ${({ theme }) => theme.colors.gray[300]};
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.orange.primary};
      }
    }
  `,

  primary: css`
    color: ${({ theme }) => theme.colors.orange.primary};
    text-decoration: none;
    font-weight: 500;

    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.orange.dark};
      }
    }
  `,

  secondary: css`
    color: ${({ theme }) => theme.colors.gray[400]};
    text-decoration: none;
    font-weight: 500;

    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.gray[100]};
      }
    }
  `,

  underline: css`
    color: ${({ theme }) => theme.colors.gray[300]};
    text-decoration: underline;
    text-underline-offset: 2px;

    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.orange.primary};
      }
    }
  `,
};

export const StyledLink = styled(Link)<{ $variant: LinkVariant }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: inherit;
  line-height: inherit;

  ${({ $variant }) => variantStyles[$variant]}

  &[target="_blank"] {
    &::after {
      content: "↗";
      font-size: 0.8em;
      margin-left: 2px;
    }
  }

  &[aria-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
