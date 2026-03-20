import styled, { css } from "styled-components";

export const SectionWrapper = styled.section<{
  $pt: boolean;
  $pb: boolean;
}>`
  width: 100%;

  ${({ $pt }) =>
    $pt &&
    css`
      padding-top: 60px;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-top: 40px;
      }
    `}

  ${({ $pb }) =>
    $pb &&
    css`
      padding-bottom: 60px;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-bottom: 40px;
      }
    `}
`;
