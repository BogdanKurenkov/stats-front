import styled from "styled-components";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

export const StyledTrigger = styled(SelectPrimitive.Trigger)<{
  $hasError?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray[100]};
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 2px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.status.error : theme.colors.gray[700]};
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;
  gap: 8px;

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
  }
`;

export const StyledIcon = styled(ChevronDown)`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const StyledContent = styled(SelectPrimitive.Content)`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black.secondary};
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const StyledViewport = styled(SelectPrimitive.Viewport)`
  padding: 4px;
`;

export const StyledItem = styled(SelectPrimitive.Item)<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.gray[600] : theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.black.secondary};
  outline: none;

  &:hover:not([data-disabled]) {
    background-color: ${({ theme }) => theme.colors.orange.primary}20;
    color: ${({ theme }) => theme.colors.orange.primary};
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.colors.orange.primary}20;
    color: ${({ theme }) => theme.colors.orange.primary};
  }
`;

export const StyledItemText = styled(SelectPrimitive.ItemText)`
  flex: 1;
`;

export const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  color: ${({ theme }) => theme.colors.orange.primary};
`;

export const StyledLabel = styled.label<{ $hasError?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.status.error : theme.colors.gray[300]};
  transition: color 0.2s ease;
  margin-bottom: 4px;
  display: block;
`;

export const StyledError = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.status.error};
  margin-top: 4px;
  display: block;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
