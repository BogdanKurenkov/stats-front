import styled from "styled-components";

export const ToggleButton = styled.button<{ $isDark: boolean }>`
  position: relative;
  width: 64px;
  height: 32px;
  min-width: 64px;
  max-width: 64px;
  border-radius: 32px;
  background: ${({ $isDark, theme }) =>
    $isDark ? theme.colors.gray[700] : theme.colors.gray[300]};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  display: inline-block;
  flex-shrink: 0;

  @media (hover: hover) {
    &:hover {
      opacity: 0.9;
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Knob = styled.div<{ $isDark: boolean }>`
  position: absolute;
  top: 3px;
  left: ${({ $isDark }) => ($isDark ? "35px" : "3px")};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${({ $isDark, theme }) =>
    $isDark ? theme.colors.orange.primary : theme.colors.black.primary};
  transition: left 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const Icon = styled.span`
  font-size: 13px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
