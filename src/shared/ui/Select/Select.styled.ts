import styled from "styled-components";
import { ChevronDown } from "lucide-react";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const SelectLabel = styled.label<{ $hasError?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.status.error : theme.colors.gray[300]};
  transition: color 0.2s ease;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled.select<{ $hasError?: boolean }>`
  width: 100%;
  padding: 10px 36px 10px 12px;
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
  appearance: none;
  cursor: pointer;

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

  option {
    background-color: ${({ theme }) => theme.colors.black.secondary};
    color: ${({ theme }) => theme.colors.gray[100]};

    &:disabled {
      color: ${({ theme }) => theme.colors.gray[600]};
    }
  }
`;

export const SelectIcon = styled(ChevronDown)<{ $isOpen?: boolean }>`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%)
    rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0")});
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.gray[400]};
  transition: all 0.2s ease;
  pointer-events: none;
`;

export const Placeholder = styled.option`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.status.error};
  margin-top: 2px;
`;
