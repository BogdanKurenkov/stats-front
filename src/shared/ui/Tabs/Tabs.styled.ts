import styled, { css } from "styled-components";

export const TabsContainer = styled.div`
  width: 100%;
`;

export const TabsList = styled.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
  margin-bottom: 16px;
`;

export const TabContent = styled.div`
  padding: 16px 0;
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export const TabButton = styled.button<{
  $active: boolean;
  $disabled?: boolean;
  $variant: "underline" | "pills" | "buttons";
}>`
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  background: transparent;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  position: relative;
  color: ${({ theme, $active, $disabled }) => {
    if ($disabled) return theme.colors.gray[600];
    if ($active) return theme.colors.orange.primary;
    return theme.colors.gray[400];
  }};

  ${({ $variant, theme, $active }) => {
    switch ($variant) {
      case "pills":
        return css`
          border-radius: 20px;
          background: ${$active
            ? theme.colors.orange.primary + "20"
            : "transparent"};

          @media (hover: hover) {
            &:hover:not(:disabled) {
              background: ${theme.colors.orange.primary}20;
            }
          }
        `;

      case "buttons":
        return css`
          border-radius: 6px;
          background: ${$active
            ? theme.colors.orange.primary
            : theme.colors.gray[800]};
          color: ${$active
            ? theme.colors.black.primary
            : theme.colors.gray[300]};

          @media (hover: hover) {
            &:hover:not(:disabled) {
              background: ${$active
                ? theme.colors.orange.dark
                : theme.colors.gray[700]};
            }
          }
        `;

      default:
        return css`
          &::after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 2px;
            background: ${theme.colors.orange.primary};
            transform: scaleX(${$active ? 1 : 0});
            transition: transform 0.2s ease;
          }

          @media (hover: hover) {
            &:hover:not(:disabled)::after {
              transform: scaleX(0.5);
            }
          }
        `;
    }
  }}
`;
