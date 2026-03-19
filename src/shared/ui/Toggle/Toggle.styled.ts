import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const ToggleWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  width: fit-content;
`;

export const HiddenToggle = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;

export const ToggleTrack = styled.span<{
  $checked: boolean;
  $disabled?: boolean;
  $error?: boolean;
}>`
  position: relative;
  width: 44px;
  height: 24px;
  background-color: ${({ theme, $checked, $disabled, $error }) => {
    if ($disabled) return theme.colors.gray[700];
    if ($error) return theme.colors.status.error + "40";
    return $checked ? theme.colors.orange.primary : theme.colors.gray[600];
  }};
  border-radius: 12px;
  transition: all 0.2s ease;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: ${({ $checked }) => ($checked ? "22px" : "2px")};
    width: 20px;
    height: 20px;
    background-color: ${({ theme, $disabled }) =>
      $disabled ? theme.colors.gray[400] : "#ffffff"};
    border-radius: 50%;
    transition: left 0.2s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  ${HiddenToggle}:focus-visible + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.orange.primary}40;
  }

  ${HiddenToggle}:hover:not(:disabled) + &::after {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Label = styled.span<{ $disabled?: boolean; $error?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $disabled, $error }) => {
    if ($disabled) return theme.colors.gray[500];
    if ($error) return theme.colors.status.error;
    return theme.colors.gray[200];
  }};
`;

export const Description = styled.span<{ $disabled?: boolean }>`
  font-size: 12px;
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.gray[600] : theme.colors.gray[400]};
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.status.error};
  margin-top: 2px;
`;
