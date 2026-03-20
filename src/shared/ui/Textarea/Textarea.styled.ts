import styled from "styled-components";

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const TextareaLabel = styled.label<{ $hasError?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.status.error : theme.colors.gray[300]};
  transition: color 0.2s ease;
`;

export const StyledTextarea = styled.textarea<{ $hasError?: boolean }>`
  width: 100%;
  padding: 12px;
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
  resize: none;
  min-height: 80px;
  font-family: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.status.error : theme.colors.orange.primary};
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

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[800]};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[600]};
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.colors.orange.primary};
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.status.error};
  margin-top: 2px;
`;
