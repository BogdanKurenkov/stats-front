import styled from "styled-components";

export const AuthWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black.background};
  padding: 20px;
`;
