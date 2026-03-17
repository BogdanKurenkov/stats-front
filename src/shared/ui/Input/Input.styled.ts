import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const InputLabel = styled.label<{ $hasError?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.error : theme.colors.gray[300]};
  transition: color 0.2s ease;
`;

export const StyledInput = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[100]};
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 2px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.gray[700]};
  border-radius: 6px;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.orange.primary};
  }

  &:focus {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.orange.primary};
    box-shadow: 0 0 0 3px
      ${({ theme, $hasError }) =>
        $hasError
          ? `${theme.colors.error}20`
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
      $hasError ? theme.colors.error : theme.colors.gray[700]};
  }

  &:autofill {
    background-color: ${({ theme }) => theme.colors.black.secondary};
    color: ${({ theme }) => theme.colors.gray[100]};
  }

  &[type="number"] {
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 2px;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: "⚠️";
    font-size: 12px;
  }
`;
