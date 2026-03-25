import styled from "styled-components";
import { Eye, EyeOff } from "lucide-react";

export const PasswordInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const PasswordLabel = styled.label<{ $hasError?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.status.error : theme.colors.gray[300]};
  transition: color 0.2s ease;
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 10px 40px 10px 12px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[100]};
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 2px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.status.error : theme.colors.gray[700]};
  border-radius: 6px;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: ${({ theme, $hasError }) =>
        $hasError ? theme.colors.status.error : theme.colors.orange.primary};
    }
  }

  &:focus {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.status.error : theme.colors.orange.primary};
    box-shadow: 0 0 0 3px
      ${({ theme, $hasError }) =>
        $hasError
          ? `${theme.colors.status.error}20`
          : `${theme.colors.orange.primary}20`};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.gray[800]};
    border-color: ${({ theme }) => theme.colors.gray[700]};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.gray[100]};
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.black.secondary}
      inset;
    transition: background-color 5000s ease-in-out 0s;
    caret-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.status.error : theme.colors.gray[700]};
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[400]};
  transition: color 0.2s ease;
  padding: 4px;

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.orange.primary};
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.orange.primary};
    border-radius: 4px;
  }
`;

export const EyeIcon = styled(Eye)`
  width: 18px;
  height: 18px;
`;

export const EyeOffIcon = styled(EyeOff)`
  width: 18px;
  height: 18px;
`;
