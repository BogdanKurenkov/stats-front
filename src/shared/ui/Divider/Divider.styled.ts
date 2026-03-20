import styled from "styled-components";

export const StyledDivider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gray[800]} 0%,
    ${({ theme }) => theme.colors.orange.primary} 50%,
    ${({ theme }) => theme.colors.gray[800]} 100%
  );
  margin: 8px 0;
`;
