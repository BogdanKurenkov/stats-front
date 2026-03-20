import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 16px;
  }
`;
