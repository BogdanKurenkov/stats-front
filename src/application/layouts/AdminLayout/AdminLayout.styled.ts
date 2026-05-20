import styled from "styled-components";

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const AdminContent = styled.main`
  flex: 1;
  margin-top: 81px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 64px;
  }
`;
