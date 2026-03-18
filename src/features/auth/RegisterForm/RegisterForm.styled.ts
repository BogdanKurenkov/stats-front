import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.orange.primary};
  margin-bottom: 32px;
  text-align: center;
`;