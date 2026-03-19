import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  width: fit-content;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;

export const StyledCheckbox = styled.span<{
  $checked: boolean;
  $error?: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: ${({ theme, $checked, $disabled }) => {
    if ($disabled) return theme.colors.gray[700];
    if ($checked) return theme.colors.orange.primary;
    return theme.colors.black.secondary;
  }};
  border: 2px solid
    ${({ theme, $error, $checked, $disabled }) => {
      if ($disabled) return theme.colors.gray[600];
      if ($error) return theme.colors.status.error;
      if ($checked) return theme.colors.orange.primary;
      return theme.colors.gray[600];
    }};
  border-radius: 4px;
  transition: all 0.2s ease;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

  svg {
    width: 14px;
    height: 14px;
    color: ${({ theme, $disabled }) =>
      $disabled ? theme.colors.gray[500] : theme.colors.black.primary};
    opacity: ${({ $checked }) => ($checked ? 1 : 0)};
    transition: opacity 0.2s ease;
  }

  ${HiddenCheckbox}:focus-visible + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.orange.primary}40;
  }
`;

export const Label = styled.span<{ $disabled?: boolean; $error?: boolean }>`
  font-size: 14px;
  color: ${({ theme, $disabled, $error }) => {
    if ($disabled) return theme.colors.gray[500];
    if ($error) return theme.colors.status.error;
    return theme.colors.gray[200];
  }};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  user-select: none;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.status.error};
  margin-top: 2px;
`;
