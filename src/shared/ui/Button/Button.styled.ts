import styled, { css } from "styled-components";
import { ButtonVariant, ButtonSize } from "./Button.types";

const sizeStyles = {
  small: css`
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 4px;
  `,
  medium: css`
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 6px;
  `,
  large: css`
    padding: 16px 32px;
    font-size: 18px;
    border-radius: 8px;
  `,
};

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.orange.primary};
    color: ${({ theme }) => theme.colors.black.primary};
    border: none;

    @media (hover: hover) {
      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.orange.dark};
      }
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.gray[800]};
    color: ${({ theme }) => theme.colors.orange.primary};
    border: 1px solid ${({ theme }) => theme.colors.gray[600]};

    @media (hover: hover) {
      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.gray[700]};
        border-color: ${({ theme }) => theme.colors.orange.primary};
      }
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.orange.primary};
    border: 2px solid ${({ theme }) => theme.colors.orange.primary};

    @media (hover: hover) {
      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.orange.primary}20;
      }
    }
  `,
  borderless: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray[300]};
    border: none;

    @media (hover: hover) {
      &:hover:not(:disabled) {
        color: ${({ theme }) => theme.colors.orange.primary};
        background-color: ${({ theme }) => theme.colors.gray[800]};
      }
    }
  `,
};

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  outline: none;
  white-space: nowrap;

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.orange.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
`;
