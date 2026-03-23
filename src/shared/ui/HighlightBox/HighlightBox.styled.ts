import styled from "styled-components";

export const StyledHighlightBox = styled.div<{
  $variant?: "default" | "compact";
}>`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.black.secondary} 0%,
    ${({ theme }) => theme.colors.gray[900]} 100%
  );
  border-left: 4px solid ${({ theme }) => theme.colors.orange.primary};
  border-radius: 16px;
  margin: 8px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 28px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px 24px;
  }

  ${({ $variant, theme }) =>
    $variant === "compact" &&
    `
    padding: 20px;
    border-radius: 12px;
    
    @media (max-width: ${theme.breakpoints.md}) {
      padding: 16px;
    }
  `}
`;
