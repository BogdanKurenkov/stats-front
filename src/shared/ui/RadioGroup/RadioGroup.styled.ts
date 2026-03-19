import styled from "styled-components";

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const GroupError = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.status.error};
  margin-top: 2px;
`;
